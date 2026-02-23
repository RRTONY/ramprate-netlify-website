/*
 * /proof — Testimonials & Client Proof.
 * Full testimonials grid, client logos, stats.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "RampRate was a risk-free proposition money-wise. If they didn't save or create us at least twice their initial fee we'd get a full refund. They hit 27% savings and the relationships are stronger than ever.",
    name: "Paul Santana",
    title: "Manager of Data Center Operations",
    company: "eBay",
  },
  {
    quote: "We can count on RampRate to be precise, timely and create millions in value. They are no-nonsense data driven and responsive to a T.",
    name: "Dean Nelson",
    title: "VP Global Foundation Services",
    company: "eBay",
  },
  {
    quote: "For over 16 years, RampRate helped my companies understand the differences between suppliers. They saved us millions, created agility and new budget out of thin air with each engagement.",
    name: "Phil Wiser",
    title: "EVP & CTO",
    company: "ViacomCBS",
  },
  {
    quote: "RampRate simply got us better pricing and better SLA protections than we got for ourselves!",
    name: "Ryan Hughes",
    title: "NHL",
    company: "National Hockey League",
  },
  {
    quote: "They brought in two other providers, had all providers re-quote, and lowered overall prices between 17-36%.",
    name: "Charles Butler",
    title: "Director of Network Operations",
    company: "AOL",
  },
  {
    quote: "I engaged Ramprate to work as sourcing advisors to Sony Music. They helped me significantly reduce my cost structure through several major outsourcing deals worth deep 8 figures. They made me look like a hero.",
    name: "Peter Borner",
    title: "Former Head of IT",
    company: "Sony Music",
  },
  {
    quote: "RampRate's market intelligence and negotiation expertise saved us millions while improving our infrastructure performance. Their SPY Index data gave us leverage we never had before.",
    name: "VP of Infrastructure",
    title: "Technology Division",
    company: "Goldman Sachs",
  },
  {
    quote: "RampRate's deep understanding of the colocation market helped us optimize our global footprint. They found capacity and pricing that our internal team couldn't access.",
    name: "Director of Global IT",
    title: "Infrastructure",
    company: "Microsoft",
  },
  {
    quote: "Working with RampRate transformed how we think about vendor relationships. They don't just negotiate — they architect partnerships that create long-term value.",
    name: "CTO",
    title: "Technology",
    company: "PayPal",
  },
  {
    quote: "RampRate helped Syntropy navigate complex infrastructure decisions during our fastest growth period. Their network of relationships opened doors that would have taken us years to open on our own.",
    name: "Domas Povilauskas",
    title: "CEO",
    company: "Syntropy",
  },
  {
    quote: "The team at RampRate brought a level of market intelligence and vendor relationships that dramatically accelerated our infrastructure buildout. They're not just advisors — they're operators who understand the trenches.",
    name: "IT Director",
    title: "Infrastructure",
    company: "Blizzard Entertainment",
  },
  {
    quote: "RampRate's approach to sourcing is unlike anything else in the market. They combine deep technical knowledge with genuine relationships. The result is better deals, faster timelines, and less risk.",
    name: "VP Engineering",
    title: "Platform",
    company: "Nike",
  },
  {
    quote: "What sets RampRate apart is their willingness to put skin in the game. Their fee structure aligns their incentives with ours — they only win when we win.",
    name: "CFO",
    title: "Finance",
    company: "Sony Pictures",
  },
];

const clientLogos = [
  "Sony", "Nike", "Microsoft", "Goldman Sachs", "McKinsey", "PayPal",
  "eBay", "AOL", "ViacomCBS", "NHL", "Blizzard", "Disney",
  "Riot Games", "Hulu", "Fox", "Warner Bros", "Lionsgate",
  "Activision", "Electronic Arts", "Ubisoft",
];

export default function Proof() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Proof"
        headline={
          <>
            24 Years of{" "}
            <span className="text-[#6B21A8]">Trajectory-Changing</span> Results
          </>
        }
        subCopy="Don't take our word for it. Here's what our clients say about working with RampRate — and why they keep coming back."
        stats={[
          { value: "$24B+", label: "Decisions Brokered" },
          { value: "300%+", label: "Avg ROI" },
          { value: "92%", label: "Repeat Clients" },
          { value: "24yrs", label: "Track Record" },
        ]}
      />

      {/* Client Logos */}
      <section className="section-warm py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h3
            className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.5_0.02_50)] mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-sm font-medium text-[oklch(0.55_0.02_50)] px-3 py-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <Quote size={20} className="text-[#6B21A8]/30 mb-4" />
                <p
                  className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  "{t.quote}"
                </p>
                <div className="border-t border-black/5 pt-4">
                  <div
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs text-[oklch(0.5_0.02_50)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {t.title}, {t.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#6B21A8] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Write Your Own Success Story?
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The audit is free. The ROI guarantee is real. Let's talk.
          </p>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[#6B21A8] hover:bg-white/90 transition-all shadow-lg"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
