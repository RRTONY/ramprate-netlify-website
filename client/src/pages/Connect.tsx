/*
 * /connect — Contact / Start a Conversation.
 * ALL CONTENT FROM: ramprate.com + content migration paste
 * Contact form + hello@ramprate.com + office locations (Santa Monica HQ, Ibiza EU HQ)
 * ZERO fabrication.
 */
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, Phone, Calendar, Send, CheckCircle, ArrowRight, Globe, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const inquiryTypes = [
  { label: "IT Sourcing / Cost Optimization", value: "sourcing" as const },
  { label: "Growth Advisory / Syzygy", value: "growth" as const },
  { label: "Web3 / Stratum", value: "web3" as const },
  { label: "Impact / ImpactSoul", value: "impact" as const },
  { label: "General Inquiry", value: "general" as const },
];

/* ── OFFICE LOCATIONS — REAL from paste ── */
const offices = [
  { city: "Santa Monica, CA", role: "US Headquarters", country: "United States" },
  { city: "Ibiza, Spain", role: "EU Headquarters", country: "Europe" },
  { city: "Massachusetts", role: "East Coast Office", country: "United States" },
  { city: "North Carolina", role: "Southeast Office", country: "United States" },
  { city: "Florida", role: "Southeast Office", country: "United States" },
];

export default function Connect() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    title: "",
    phone: "",
    practice: "" as string,
    message: "",
  });

  const submitLead = trpc.lead.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitLead.mutate({
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      title: formData.title || undefined,
      phone: formData.phone || undefined,
      practice: (formData.practice as "sourcing" | "growth" | "web3" | "impact" | "general") || "general",
      message: formData.message || undefined,
      source: "connect-page",
    });
  };

  return (
    <PageLayout>
      <PageHero
        sectionLabel="Connect"
        headline={
          <>
            Trust Us With What You{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Hate to Do</span>
          </>
        }
        subCopy="And focus on the change you want to create in the world. The first conversation is always free."
      />

      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-xl p-12 border border-black/5 text-center"
                >
                  <CheckCircle size={48} className="text-[oklch(0.55_0.15_30)] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                    Message Received
                  </h3>
                  <p className="text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    Thank you for reaching out. One of our principals will respond within 24 hours. In the meantime, feel free to book a time directly on our calendar.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-black/5 shadow-sm">
                  <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
                    Start a Conversation
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        Title
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="Your title"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                        I'm interested in
                      </label>
                      <select
                        value={formData.practice}
                        onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                        className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <option value="">Select a topic</option>
                        {inquiryTypes.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-medium text-[oklch(0.4_0.02_50)] mb-2 uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-black/10 bg-[oklch(0.97_0.01_80)] text-sm focus:outline-none focus:border-[oklch(0.55_0.15_30)] focus:ring-1 focus:ring-[oklch(0.55_0.15_30)]/20 transition-colors resize-none"
                      style={{ fontFamily: "var(--font-body)" }}
                      placeholder="Tell us about your challenge..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitLead.isPending}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-[oklch(0.55_0.15_30)] text-white hover:bg-[oklch(0.48_0.15_30)] transition-all shadow-lg shadow-[oklch(0.55_0.15_30)]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {submitLead.isPending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Calendly */}
              <div className="bg-white rounded-xl p-7 border border-black/5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={20} className="text-[oklch(0.55_0.15_30)]" />
                  <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Book a Call
                  </h3>
                </div>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  Prefer to schedule directly? Pick a time that works for you and one of our principals will be on the call.
                </p>
                <a
                  href="https://calendly.com/ramprate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border-2 border-[oklch(0.55_0.15_30)] text-[oklch(0.55_0.15_30)] hover:bg-[oklch(0.55_0.15_30)] hover:text-white transition-all"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Schedule a Meeting <ArrowRight size={14} />
                </a>
              </div>

              {/* Contact info — REAL from ramprate.com */}
              <div className="bg-white rounded-xl p-7 border border-black/5 shadow-sm space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[oklch(0.55_0.15_30)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-[oklch(0.4_0.02_50)] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-body)" }}>Email</div>
                    <a href="mailto:hello@ramprate.com" className="text-sm text-[oklch(0.55_0.15_30)] hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                      hello@ramprate.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[oklch(0.55_0.15_30)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs font-medium text-[oklch(0.4_0.02_50)] uppercase tracking-wider mb-1" style={{ fontFamily: "var(--font-body)" }}>Phone</div>
                    <span className="text-sm text-[oklch(0.35_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                      +1 (310) 622-8989
                    </span>
                  </div>
                </div>
              </div>

              {/* Office Locations — REAL from paste */}
              <div className="bg-white rounded-xl p-7 border border-black/5 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <Globe size={18} className="text-[oklch(0.55_0.15_30)]" />
                  <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Office Locations
                  </h3>
                </div>
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.city} className="flex items-start gap-3">
                      <MapPin size={14} className="text-[oklch(0.55_0.15_30)] mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[oklch(0.3_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{o.city}</div>
                        <div className="text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{o.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-[oklch(0.55_0.15_30)]/10">
                <h4 className="text-base font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  The RampRate Guarantee
                </h4>
                <p className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                  The audit is always free. If we don't deliver 300%+ ROI on our sourcing engagements, you don't pay. We put skin in the game because we believe in what we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
