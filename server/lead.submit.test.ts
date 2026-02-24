import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  createLead: vi.fn().mockResolvedValue({ id: 42 }),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("lead.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid lead submission with required fields only", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      name: "John Doe",
      email: "john@example.com",
    });

    expect(result).toEqual({ success: true, id: 42 });
  });

  it("accepts a full lead submission with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      name: "Jane Smith",
      email: "jane@acme.com",
      company: "Acme Corp",
      title: "VP Engineering",
      phone: "+1 555-0123",
      practice: "sourcing",
      message: "We need help with infrastructure costs.",
      source: "connect-page",
    });

    expect(result).toEqual({ success: true, id: 42 });
  });

  it("calls createLead with the correct data", async () => {
    const { createLead } = await import("./db");
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.lead.submit({
      name: "Test User",
      email: "test@test.com",
      company: "TestCo",
      practice: "growth",
      message: "Hello",
      source: "test",
    });

    expect(createLead).toHaveBeenCalledWith({
      name: "Test User",
      email: "test@test.com",
      company: "TestCo",
      title: null,
      phone: null,
      practice: "growth",
      message: "Hello",
      source: "test",
    });
  });

  it("calls notifyOwner on successful submission", async () => {
    const { notifyOwner } = await import("./_core/notification");
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.lead.submit({
      name: "Notify Test",
      email: "notify@test.com",
      practice: "web3",
    });

    expect(notifyOwner).toHaveBeenCalledTimes(1);
    const call = (notifyOwner as ReturnType<typeof vi.fn>).mock.calls[0][0];
    expect(call.title).toContain("Notify Test");
    expect(call.title).toContain("Web3");
    expect(call.content).toContain("notify@test.com");
  });

  it("rejects submission with empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.lead.submit({
        name: "",
        email: "test@test.com",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.lead.submit({
        name: "Test",
        email: "not-an-email",
      })
    ).rejects.toThrow();
  });

  it("defaults practice to general when not specified", async () => {
    const { createLead } = await import("./db");
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.lead.submit({
      name: "Default Practice",
      email: "default@test.com",
    });

    expect(createLead).toHaveBeenCalledWith(
      expect.objectContaining({ practice: "general" })
    );
  });

  it("still succeeds even if notifyOwner fails", async () => {
    const { notifyOwner } = await import("./_core/notification");
    (notifyOwner as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error("Notification failed"));

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.lead.submit({
      name: "Fail Notify",
      email: "fail@test.com",
    });

    // Lead should still be created successfully
    expect(result).toEqual({ success: true, id: 42 });
  });
});
