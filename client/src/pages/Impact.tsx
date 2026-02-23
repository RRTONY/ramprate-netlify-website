/*
 * /impact — ImpactSoul: ESG & Impact Advisory.
 * Hero: "Profit With Purpose."
 * Sections: B Corp, services, impact metrics, CTA.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Leaf, Heart, Scale, Globe, BarChart3, Users } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "B Corp Certification",
    desc: "We guide organizations through the B Impact Assessment, governance changes, and certification process. RampRate is a certified B Corp — we practice what we preach.",
  },
  {
    icon: Scale,
    title: "ESG Strategy",
    desc: "Develop and implement ESG frameworks that satisfy investors, regulators, and stakeholders. We help you measure what matters and report it credibly.",
  },
  {
    icon: BarChart3,
    title: "Impact Measurement",
    desc: "Define KPIs, build measurement systems, and create impact reports that go beyond compliance. We help you prove that doing good is good business.",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    desc: "Apply our sourcing expertise to green infrastructure — renewable energy, carbon-neutral data centers, and sustainable supply chains.",
  },
  {
    icon: Heart,
    title: "Social Impact Programs",
    desc: "Design and launch programs that create measurable social impact — workforce development, digital equity, community investment.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    desc: "Build authentic relationships with communities, employees, and partners. We help you move from performative to transformative impact.",
  },
];

const impactStats = [
  { value: "B Corp", label: "Certified Since 2019" },
  { value: "1%", label: "Revenue to Impact" },
  { value: "Carbon", label: "Neutral Operations" },
  { value: "100%", label: "Renewable Energy" },
];

export default function Impact() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="ImpactSoul — ESG Advisory"
        headline={
          <>
            Profit With{" "}
            <span className="text-[#6B21A8]">Purpose.</span>
          </>
        }
        subCopy="Technology is a delivery mechanism for social and environmental impact. We help organizations align profit with purpose — because the most sustainable business strategy is one that sustains everything."
        stats={impactStats}
      />

      {/* B Corp Section */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6B21A8]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Walking the Talk
              </span>
              <h2
                className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We're a Certified B Corp
              </h2>
              <p
                className="mt-6 text-base text-[oklch(0.4_0.02_50)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                RampRate became a Certified B Corporation because we believe business should be a force for good. The B Corp certification means we meet the highest standards of verified social and environmental performance, public transparency, and legal accountability.
              </p>
              <p
                className="mt-4 text-base text-[oklch(0.4_0.02_50)] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We don't just advise on impact — we live it. Every engagement we take on is evaluated through the lens of: does this create value for all stakeholders, not just shareholders?
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-black/5 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#6B21A8] flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#6B21A8]" style={{ fontFamily: "var(--font-display)" }}>B</span>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  Certified B Corporation
                </h3>
                <p className="text-sm text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                  Meeting the highest standards of verified social and environmental performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Impact <span className="text-[#6B21A8]">Services</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-[#6B21A8]/10 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-[#6B21A8]" />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-[oklch(0.45_0.02_50)] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.desc}
                </p>
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
            Impact Starts With a Conversation
          </h2>
          <p
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you're pursuing B Corp certification, building an ESG framework, or launching an impact initiative — we'll help you make it real.
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
