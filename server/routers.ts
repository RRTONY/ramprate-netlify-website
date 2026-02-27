import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createLead } from "./db";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";
import { RAMPRATE_SYSTEM_PROMPT } from "./ramprate-knowledge";

const leadInputSchema = z.object({
  name: z.string().min(1, "Name is required").max(255),
  email: z.string().email("Valid email is required").max(320),
  company: z.string().max(255).optional(),
  title: z.string().max(255).optional(),
  phone: z.string().max(50).optional(),
  practice: z.enum(["sourcing", "growth", "web3", "impact", "general"]).default("general"),
  message: z.string().max(5000).optional(),
  source: z.string().max(100).optional(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  ai: router({
    ask: publicProcedure
      .input(z.object({
        question: z.string().min(1).max(2000),
        history: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })).max(20).optional(),
      }))
      .mutation(async ({ input }) => {
        const messages = [
          { role: "system" as const, content: RAMPRATE_SYSTEM_PROMPT },
          ...(input.history || []).map(m => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
          { role: "user" as const, content: input.question },
        ];
        const result = await invokeLLM({ messages });
        const answer = typeof result.choices[0]?.message?.content === "string"
          ? result.choices[0].message.content
          : "That's a conversation for our principals — reach out at ramprate.com/connect.";
        return { answer };
      }),
  }),

  lead: router({
    submit: publicProcedure
      .input(leadInputSchema)
      .mutation(async ({ input }) => {
        // Store the lead in the database
        const result = await createLead({
          name: input.name,
          email: input.email,
          company: input.company ?? null,
          title: input.title ?? null,
          phone: input.phone ?? null,
          practice: input.practice,
          message: input.message ?? null,
          source: input.source ?? null,
        });

        // Notify the owner about the new lead
        const practiceLabel = input.practice === "general" ? "General" : input.practice.charAt(0).toUpperCase() + input.practice.slice(1);
        try {
          await notifyOwner({
            title: `New Lead: ${input.name} (${practiceLabel})`,
            content: [
              `**Name:** ${input.name}`,
              `**Email:** ${input.email}`,
              input.company ? `**Company:** ${input.company}` : null,
              input.title ? `**Title:** ${input.title}` : null,
              input.phone ? `**Phone:** ${input.phone}` : null,
              `**Practice:** ${practiceLabel}`,
              input.message ? `\n**Message:**\n${input.message}` : null,
              input.source ? `\n_Source: ${input.source}_` : null,
            ].filter(Boolean).join("\n"),
          });
        } catch (e) {
          // Notification failure should not block lead creation
          console.warn("[Lead] Failed to send owner notification:", e);
        }

        return { success: true, id: result.id } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
