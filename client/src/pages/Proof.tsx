/*
 * /proof — Case Studies, Testimonials & Client Proof
 * ALL 28 REAL testimonials + 7 case studies from ramprate.com
 * REAL client logos from ramprate.com/clients/
 * REAL board members from spec
 * ZERO fabrication.
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Quote, Building2, TrendingDown, ShieldCheck, BarChart3 } from "lucide-react";

/* ── 7 REAL CASE STUDIES from ramprate.com ── */
const caseStudies = [
  {
    title: "Fortune 50 Financial Services",
    result: "$13M saved",
    metrics: ["26% cost reduction", "74% SLA increase", "7 data centers benchmarked"],
    desc: "Benchmarked 7 data centers plus cloud and managed services. Cut costs 26%, increased SLAs 74%, saved $13M through mid-contract negotiation.",
  },
  {
    title: "Fortune 20 Software",
    result: "14 engagements / 4 years",
    metrics: ["All divisions benchmarked", "Chargeback model restructured", "Retention through data"],
    desc: "14 engagements over 4 years. Benchmarked all divisions. Restructured internal chargeback model. Recruited and retained divisions through data-driven presentations.",
  },
  {
    title: "Fortune 50 Integrator",
    result: "7 engagements / 3 years",
    metrics: ["7–20+ countries benchmarked", "Gap analysis", "Cost driver projections"],
    desc: "7 engagements over 3 years. Global benchmarks across 7–20+ countries. Quantified market rates, gap analysis, rapid supplier identification, cost driver projections.",
  },
  {
    title: "Fortune 50 Software — 358 Vendors",
    result: "34% cost cut, 21% SLA gain",
    metrics: ["358 vendors benchmarked", "Full SPY Index analysis", "Chargeback restructured"],
    desc: "Full SPY Index benchmark of 358 external IT providers. Analyzed costs, SLAs, contract terms, bundling, list vs. actual prices. Cut costs 34%, increased SLAs 21%.",
  },
  {
    title: "Top Movie Studio",
    result: "$13M+/year saved",
    metrics: ["26% reduction potential", "64% SLA increase", "Shared services optimized"],
    desc: "Examined relationship with corporate parent's internal services. Found 26% reduction potential. Increased SLAs 64%. Saved $13M+/year from shared services bill.",
  },
  {
    title: "Startup Radio Station",
    result: "Pre-launch CDN procurement",
    metrics: ["Months before launch", "Right-fit infrastructure", "Innovative model supported"],
    desc: "Pre-launch CDN procurement. RampRate procured content delivery services months before service launch. Innovative business model supported with right-fit infrastructure.",
  },
  {
    title: "CDN Market Research",
    result: "44 CDN buyers interviewed",
    metrics: ["Executive Brief published", "Pricing intelligence", "Supplier capabilities mapped"],
    desc: "Interviewed 44 CDN buyers. Published industry-leading Executive Brief 'Sourcing CDN Services' with pricing, market dynamics, and supplier capabilities.",
  },
];

/* ── ALL 28 REAL TESTIMONIALS ── */
const testimonials = [
  { quote: "Partnering with RampRate was and continues to be game-changing for Syntropy. Within just a couple of months we expanded our reach beyond what we thought was possible. RampRate's experience navigating telecom and cloud serves as an invaluable asset.", name: "Domantas Jaskunas", title: "Co-Founder", company: "Syntropy" },
  { quote: "RampRate was a risk-free proposition money-wise. If they didn't save or create us at least twice their initial fee we'd get a full refund. They hit 27% savings and the relationships are stronger than ever.", name: "Paul Santana", title: "Manager of Data Center Operations", company: "eBay" },
  { quote: "Tony's network is of a depth that allows almost instantaneous connectivity at the highest level with significant yield across industries.", name: "Wulf Kaal", title: "Entrepreneur & Co-Founder", company: "Menagerie" },
  { quote: "As our key growth consultant, investor and activator, Tony and RampRate's team have under-promised and over-delivered for more than 4 years. They are a force of nature.", name: "Kipras Kazlauskas", title: "Co-Founder", company: "Syntropy" },
  { quote: "Intel engaged RampRate as we launched our Digital Home content strategy & alliances group. They provided valuable and highly targeted research — truly understanding our needs, timeline and budget.", name: "Ron Vaisbort", title: "Executive", company: "Intel" },
  { quote: "We can count on RampRate to be precise, timely and create millions in value. They are no-nonsense data driven and responsive to a T.", name: "Dean Nelson", title: "VP Global Foundation Services", company: "eBay" },
  { quote: "For over 16 years, RampRate helped my companies understand the differences between suppliers. They saved us millions, created agility and new budget out of thin air with each engagement.", name: "Phil Wiser", title: "EVP & CTO", company: "ViacomCBS" },
  { quote: "Each time they have saved significant time in negotiating and closing contracts, which provided at least 20 if not 40% savings over what we could have done alone.", name: "Michael Montalto", title: "Consultant", company: "Accenture" },
  { quote: "Keeping us focused, educating us on our options, identifying well qualified suppliers, and operating under tight deadlines were all things that RampRate did exceptionally well.", name: "Todd Miller", title: "CIO", company: "SF Chronicle – Hearst Corp" },
  { quote: "RampRate has been my most reliable global resource and is ready to perform at a moment's notice. They made scaling easier.", name: "Paul Sams", title: "COO", company: "Blizzard Entertainment" },
  { quote: "Tony and his team are very well connected in the global high-tech community. He is a generous giver of his time and energy to worthy causes, driving impact to become measurable, attainable and reportable.", name: "William Quigley", title: "Managing Director", company: "WAX / Clearstone Venture Partners" },
  { quote: "Since engaging them they have helped me significantly reduce my cost structure through several major outsourcing deals worth deep 8 figures. They made me look like a hero to my executive management.", name: "Peter Borner", title: "Former Head of IT", company: "Sony Music" },
  { quote: "RampRate helped us cut the clutter, gain insight and distill our team's thoughts for over 50 digital media, IT and product studies. RampRate is an invaluable partner for us.", name: "Gary Share", title: "Windows Marketing and Product", company: "Microsoft" },
  { quote: "Not only did RampRate save us an incredible amount of time, resources, and money, but also we know we have the best possible solution for our needs now and far beyond.", name: "Ian Rodgers", title: "CEO Beats Music, GM Yahoo Music", company: "Beats Music (acquired by Apple)" },
  { quote: "They brought in two other providers, had all providers re-quote, and lowered overall prices between 17-36%. They helped us achieve breakthrough innovative best-of-breed SLA coverage.", name: "Charles Butler", title: "Director of Network Operations", company: "AOL" },
  { quote: "RampRate's comprehensive, organized expert approach to assessing our needs allowed us to complete this process in record time.", name: "Michael Whelan", title: "CIO", company: "Primedia / MSNBC" },
  { quote: "RampRate simply got us better pricing and better SLA protections than we got for ourselves!", name: "Ryan Hughes", title: "Network Operations", company: "National Hockey League" },
  { quote: "RampRate handled our project with the utmost professionalism and requisite confidentiality. They work fast, saved us over 40% and months of due diligence.", name: "Andrew Robbins", title: "Vice President of New Media", company: "Miramax" },
  { quote: "RampRate was adaptable, brilliant and innovative. Their team stayed on schedule and stayed within the price. We saved millions.", name: "Niles Triget", title: "Executive", company: "Thomson Reuters / Delphion" },
  { quote: "When we receive a RampRate RFP it is professionally prepared and provides the information required for WTG to provide a quality proposal.", name: "Stacey McCormick", title: "Director of Sales", company: "World Telecom Group" },
  { quote: "The deal that RampRate got for the Walt Disney Internet Group was one of the best deals in IT services I saw during my tenure at Disney.", name: "Robert Gonsalves", title: "Former Director of Production Operations", company: "Warner Bros. Online / Walt Disney" },
  { quote: "I have always considered RampRate a trusted advisor when it comes to digital entertainment services. RampRate combines a unique approach with consulting professionals who deliver results.", name: "Geoff Campbell", title: "Former VP", company: "Sony Corporation of America" },
  { quote: "RampRate are out-of-the-box thinkers and are extremely professional. The caliber of their teams is excellent.", name: "Isabel Maxwell", title: "Entrepreneur at Large", company: "" },
  { quote: "In a field filled with prognosticators, RampRate applies sound business judgment and analytics to assist senior management in making crucial, time-sensitive decisions.", name: "Jay Samit", title: "Former EVP", company: "Sony Corporation of America" },
  { quote: "RampRate is in a league of its own when it comes to matching the right solutions with the right clients.", name: "Kevin Shively", title: "Executive Director", company: "International Webcasting Association" },
  { quote: "Your team stayed on schedule and stayed within the price dozens of times across hundreds of millions in spend. You have always saved us tremendous time and money.", name: "Rich Lappenbusch", title: "Executive", company: "Microsoft" },
  { quote: "I would recommend either he or his firm unequivocally for business planning, scale or cost containment. They are globally astute consummate analysts and deal pros extraordinaire.", name: "Richard Titus", title: "EVP BBC, Managing Director Razorfish LA", company: "BBC / Razorfish" },
  { quote: "RampRate knows this business better than anyone. We reduced our monthly expenditure by over 75%.", name: "Blair Harrison", title: "CEO", company: "Frequency (formerly Viacom)" },
];

/* ── REAL CLIENT LOGO IMAGES from ramprate.com ── */
const clientLogoImages = [
  { name: "Sony", src: "https://ramprate.com/wp-content/uploads/Sony-Corporation1.png" },
  { name: "Microsoft", src: "https://ramprate.com/wp-content/uploads/28413-3-microsoft-logo-transparent-background-1-300x110.png" },
  { name: "eBay", src: "https://ramprate.com/wp-content/uploads/eBay.png" },
  { name: "Intel", src: "https://ramprate.com/wp-content/uploads/Intel-logo-300x169.png" },
  { name: "Hearst", src: "https://ramprate.com/wp-content/uploads/hearstcorporation.jpg" },
  { name: "Accenture", src: "https://ramprate.com/wp-content/uploads/Accenture.jpg" },
  { name: "Blizzard", src: "https://ramprate.com/wp-content/uploads/blizzard1.jpg" },
  { name: "Clearstone", src: "https://ramprate.com/wp-content/uploads/clearstone.jpg" },
  { name: "Syntropy", src: "https://ramprate.com/wp-content/uploads/SyntropyLogoSmall02-04-21.png" },
  { name: "Menagerie", src: "https://ramprate.com/wp-content/uploads/menagerie-icon-on-left-text-on-right-300x90.jpg" },
  { name: "NHL", src: "https://ramprate.com/wp-content/uploads/NHL-Network.png" },
  { name: "Miramax", src: "https://ramprate.com/wp-content/uploads/Miramax.png" },
  { name: "Warner Bros", src: "https://ramprate.com/wp-content/uploads/Warner-Bros.-Online.png" },
  { name: "Viacom", src: "https://ramprate.com/wp-content/uploads/Viacom.png" },
  { name: "World Telecom Group", src: "https://ramprate.com/wp-content/uploads/World-Telecom-Group.png" },
  { name: "IWA", src: "https://ramprate.com/wp-content/uploads/International-Webcasting-Association.png" },
];

const additionalClients = [
  "Nike", "Goldman Sachs", "McKinsey", "PayPal", "Disney", "Fox",
  "Thomson Reuters", "Primedia", "MSNBC", "BBC", "Beats Music",
  "AOL", "Razorfish",
];

/* ── REAL BOARD MEMBERS from spec ── */
const boardMembers = [
  { name: "Stuart Newton", role: "ex-Deloitte Blockchain", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/ILlNmwvCsckXBqPO.jpg" },
  { name: "Gulliver Smithers", role: "ex-CTO Sony", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/eUVmQqArMuCNZtXr.png" },
  { name: "Purvee Kondal", role: "VP Sephora", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/DmFFlqTRTIEZwtwI.webp" },
  { name: "Curt Hessler", role: "ex-Treasury / Rhodes Scholar", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/YLsgxbxwspMjUSdw.png" },
  { name: "Barry Patmore", role: "34yr Accenture", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/yOBAXZZhcHZhmOMj.png" },
  { name: "Peter Gross", role: "VP Bloom Energy", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/kkqxDucjDNUUXIpQ.png" },
  { name: "Peter Hirshberg", role: "ex-Apple $1B", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/QmgSWAnZPqduAHKb.png" },
  { name: "Joe Weinman", role: "Cloudonomics", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/OXBRrCfquIfGdqNH.png" },
  { name: "Sandy Climan", role: "ex-CAA / Universal", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/jeEhGYbagnzDkfJe.jpg" },
  { name: "Tyler Kolodney", role: "ex-Orioles", img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/UVyoiPewtvstKrsa.jpg" },
];

export default function Proof() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="Proof"
        headline={
          <>
            24 Years of{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Trajectory-Changing</span> Results
          </>
        }
        subCopy="Don't take our word for it. Here's what our clients say about working with RampRate — and why they keep coming back."
        stats={[
          { value: "$24B+", label: "Decisions Brokered" },
          { value: "24%", label: "Avg IT Budget Savings" },
          { value: "50+", label: "Countries" },
          { value: "24yrs", label: "Track Record" },
        ]}
      />

      {/* Case Studies — REAL from ramprate.com */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
              Case Studies
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Enterprise-Grade <span className="text-[oklch(0.55_0.15_30)]">Results</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-xl p-7 border border-black/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center shrink-0">
                    <Building2 size={18} className="text-[oklch(0.55_0.15_30)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-tight" style={{ fontFamily: "var(--font-display)" }}>{cs.title}</h3>
                  </div>
                </div>
                <div className="mb-4 px-3 py-2 rounded-md bg-[oklch(0.55_0.15_30)]/8">
                  <span className="text-sm font-bold text-[oklch(0.45_0.12_30)]" style={{ fontFamily: "var(--font-mono)" }}>{cs.result}</span>
                </div>
                <p className="text-sm text-[oklch(0.4_0.02_50)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {cs.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {cs.metrics.map((m) => (
                    <span key={m} className="text-[10px] px-2 py-0.5 rounded-full bg-[oklch(0.94_0.03_80)] text-[oklch(0.45_0.02_50)] font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      {m}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos — REAL images from ramprate.com */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h3 className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.5_0.02_50)] mb-10" style={{ fontFamily: "var(--font-body)" }}>
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogoImages.map((logo) => (
              <div key={logo.name} className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
            {additionalClients.map((c) => (
              <span key={c} className="text-xs font-medium text-[oklch(0.55_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="section-dark py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Board of <span className="text-[oklch(0.55_0.15_30)]">Advisors</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {boardMembers.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-white/10 mb-3">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-body)" }}>{m.name}</div>
                <div className="text-xs text-white/50" style={{ fontFamily: "var(--font-body)" }}>{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B Corp Badge */}
      <section className="section-light py-12">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-5 bg-[oklch(0.97_0.01_80)] rounded-xl border border-black/5">
            <div className="text-3xl font-bold text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-display)" }}>B</div>
            <div className="text-left">
              <div className="text-sm font-bold" style={{ fontFamily: "var(--font-body)" }}>Certified B Corporation</div>
              <div className="text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>Meeting the highest standards of social and environmental performance</div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL 28 Testimonials — masonry layout */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12" style={{ fontFamily: "var(--font-display)" }}>
            What Our <span className="text-[oklch(0.55_0.15_30)]">Clients</span> Say
          </h2>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.08 }}
                className="break-inside-avoid bg-[oklch(0.97_0.01_80)] rounded-xl p-7 border border-black/5 hover:shadow-md transition-shadow"
              >
                <Quote size={20} className="text-[oklch(0.55_0.15_30)]/30 mb-4" />
                <p className="text-sm text-[oklch(0.35_0.02_50)] leading-relaxed mb-5 italic" style={{ fontFamily: "var(--font-body)" }}>
                  "{t.quote}"
                </p>
                <div className="border-t border-black/5 pt-4">
                  <div className="text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{t.name}</div>
                  <div className="text-xs text-[oklch(0.5_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>
                    {t.title}{t.company ? `, ${t.company}` : ""}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            The audit is free. The ROI guarantee is real. Let's talk.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
