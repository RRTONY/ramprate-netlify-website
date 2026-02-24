/*
 * /about — About RampRate
 * ALL CONTENT FROM: ramprate.com/about-us/, /values/, /it-sourcing/leadership-team/
 * + enriched from content migration paste
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

/* ── REAL CORE TEAM (5) — enriched bios from paste ── */
const coreTeam = [
  {
    name: "Tony Greenberg",
    role: "Founder & CEO",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/EtSyoZsiJamreUAA.png",
    bio: "25+ years. Helped take Exodus Communications public (revenue $5M to $600M). Founded RampRate in 2000. 250+ enterprise clients including Microsoft, eBay, Nike, Sony, CBS, Intel, Hearst. 75+ strategy/sourcing projects for Microsoft alone. Investor/advisor to 25+ impact startups across blockchain, psychedelic medicine, healthcare. Emissary to Bhutan's Gross National Happiness Centre. Speaker at Harvard, USC. Published in Forbes, Business Insider, HuffPost. Clinton Global Initiative, Aspen Institute, Tech Coast Angels.",
    linkedin: "https://www.linkedin.com/in/tonygreenberg",
    twitter: "https://x.com/thinktony",
  },
  {
    name: "Alex Veytsel",
    role: "Co-Founder & CSO",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/YWxJJXOzOBUuHshp.png",
    bio: "Expert in digital media business models, revenue streams, and technical infrastructure. Business planning and strategy advisor to Microsoft, Sony, Intel on value chain mapping, partner strategies, and pioneering business models. Joined RampRate 2004. As a sourcing advisor, he has helped both major TV networks (NBC, Fox) and industry pioneers (iFilm, Audible) reduce costs, improve performance, and reinvest negotiated savings in innovative technologies. Former senior research analyst at Aberdeen Group.",
    linkedin: "https://www.linkedin.com/in/aveytsel",
    twitter: null,
  },
  {
    name: "Josh Bykowski",
    role: "Corporate Development & Legal",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/aZCBGfwJAwMiioqX.png",
    bio: "Licensed US attorney. M&A advisory, data privacy, IP, emerging technologies. Expertise in blockchain technology and role as a Voting Associate for a decentralized organization with over $250 million AUM. Recognized by Columbia Law School's Blog on Corporations and Capital Markets. Panelist at legal CLE conferences.",
    linkedin: "https://www.linkedin.com/in/josh-bykowski-b445211b5",
    twitter: null,
  },
  {
    name: "Rob Holmes",
    role: "Web3 & Grants Manager, ImpactSoul",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/olBFuRMEniuQAaTo.png",
    bio: "Web3 strategist and business development advisor. Over seven years in the space helping founders, protocols, and ecosystems bridge crypto and the physical world — focusing on tokenized infrastructure, DePIN, clean energy, and real-world asset (RWA) integration. Before Web3, spent a decade in engineering and infrastructure, beginning at Halcrow, one of the UK's oldest engineering firms.",
    linkedin: "https://www.linkedin.com/in/rob-holmes-7a479016",
    twitter: null,
  },
  {
    name: "Jeff Alinsangan",
    role: "Operations",
    img: null,
    bio: "Leads operations at RampRate, ensuring the firm's advisory engagements run with precision and efficiency across all four practice areas.",
    linkedin: "https://www.linkedin.com/in/jeff-alinsangan-b3bb78",
    twitter: null,
  },
];

/* ── REAL BOARD OF ADVISORS (10) — enriched bios ── */
const boardAdvisors = [
  {
    name: "Stuart Newton",
    role: "Strategic Advisor",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/iyZuFkUvbFZRaLIv.png",
    bio: "Recently retired from Deloitte where he led business development nationally for the Blockchain and Digital Asset Practice as well as globally for the Wine Practice. Portfolio Success Leader for select private equity firms. Co-founder of Abundant Village.",
    whyAdvise: "RampRate operates at the intersection of blockchain and enterprise trust — exactly where the next decade of value creation lives. I advise because they don't just talk about transformation, they broker it.",
    linkedin: "https://pr.linkedin.com/in/stuartnewton",
    twitter: null,
  },
  {
    name: "Gulliver Smithers",
    role: "ex-CTO Sony D2C",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/kKJJUsyZjjyWxRiZ.png",
    bio: "Product-oriented CTO with over 20 years across media. Previously CTO at Sony D2C, VP of Product at the BBC, CTO at Base79 (successful exit), and Director of On-Demand at ITV. Expertise spans streaming architecture, product management, and multi-platform development.",
    whyAdvise: "Having built streaming platforms at Sony and the BBC, I know how rare it is to find advisors who understand both the technology and the business model. RampRate does both — and they've been doing it longer than anyone.",
    linkedin: "https://uk.linkedin.com/in/gulliversmithers",
    twitter: "https://x.com/GulliverSmither",
  },
  {
    name: "Purvee Kondal",
    role: "VP Sephora, Global Procurement",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/YSxTQFUJHlUuFtlE.png",
    bio: "Vice President at SEPHORA, Global Procurement Officer. Over 15 years at J&J, GE, Capgemini, Ross Stores, Globality, and Albertsons. Pioneering Indian American woman to hold the NACD.DC designation. MBA from Kellogg at Northwestern University.",
    whyAdvise: "Procurement at the enterprise level is a battlefield of information asymmetry. RampRate levels that field with data nobody else has. That's why I'm here — they make procurement honest.",
    linkedin: "https://www.linkedin.com/in/purveek",
    twitter: null,
  },
  {
    name: "Curt Hessler",
    role: "ex-Asst. Secretary of Treasury",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/CLTxUwdWDeYNuRdP.png",
    bio: "Served as Assistant Secretary of the Treasury for Economic Policy. Senior positions at Unisys and Times-Mirror Group. Chairman and founding CEO of 101communications. Rhodes Scholar. Harvard BA, Yale Law JD, UC Berkeley MA in Economics.",
    whyAdvise: "I've served at the highest levels of government and industry. RampRate brings the same rigor I demanded at Treasury — data-driven, conflict-free, and accountable to outcomes, not hours billed.",
    linkedin: "https://www.linkedin.com/in/curt-hessler-a3682b3a",
    twitter: null,
  },
  {
    name: "Barry Patmore",
    role: "34yr Accenture Partner",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/gyKtcYcxpmXoEpQB.png",
    bio: "Distinguished 34-year career at Accenture. Clients included Microsoft, Disney, Visa, JPL. Managing partner of Pacific Northwest and Southern California offices. Co-developed Method/1 and collaborated with Michael Hammer on business process re-engineering.",
    whyAdvise: "After 34 years at Accenture, I know what consulting should be and what it usually isn't. RampRate is what it should be — principals who execute, not associates who present.",
    linkedin: "https://www.linkedin.com/in/barry-patmore-8188b526",
    twitter: null,
  },
  {
    name: "Peter Gross",
    role: "VP Bloom Energy",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/KnqUilgCDpoTOQMX.png",
    bio: "Former CEO EYP Mission Critical Facilities. Data center strategic planning, design, operations. VP at Bloom Energy with deep expertise in sustainable energy infrastructure. Advisory board member at Redivider.",
    whyAdvise: "Infrastructure decisions are permanent and expensive. RampRate's SPY Index gives enterprises the data to make those decisions right the first time. That's worth more than any consulting engagement.",
    linkedin: "https://www.linkedin.com/in/petrgross",
    twitter: null,
  },
  {
    name: "Peter Hirshberg",
    role: "ex-Apple, $1B Enterprise Revenue",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/wCigzGydvwbnZpVw.png",
    bio: "9 years at Apple, grew enterprise revenue to $1B annually. Chairman of the executive committee of Technorati, tracking over 100 million Weblogs. Co-founder and chairman of The Conversation Group. Clients included AOL, Microsoft, NBC, Estee Lauder.",
    whyAdvise: "I grew Apple's enterprise business to a billion dollars. The one thing I learned: relationships compound. RampRate has 25 years of compounded trust with the world's most important buyers. That's irreplaceable.",
    linkedin: "https://www.linkedin.com/in/hirshberg",
    twitter: "https://x.com/hirshberg",
  },
  {
    name: "Joe Weinman",
    role: "Author, Cloudonomics",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/uuVlUAhjtxyNCxXB.png",
    bio: "Author of 'Cloudonomics: The Business Value of Cloud Computing' (Wiley). Awarded 20 U.S. and international patents. Senior executive at Telx, AT&T, Bell Labs, and Hewlett Packard. Named Top 10 Cloud Computing Leader. Cornell BS, UW-Madison MS in Computer Science.",
    whyAdvise: "I wrote the book on cloud economics. RampRate lives it — they have the only dataset that can tell you what cloud infrastructure actually costs versus what vendors claim. That's the difference between theory and leverage.",
    linkedin: "https://www.linkedin.com/in/joeweinman",
    twitter: "https://x.com/joeweinman",
  },
  {
    name: "Sandy Climan",
    role: "ex-CAA / Universal Studios",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/XzkRpmGIMlRHdLfQ.png",
    bio: "CEO of Entertainment Media Ventures. Senior management at Creative Artists Agency, representing Robert Redford, Robert De Niro, Kevin Costner. EVP and President of Worldwide Business Development for Universal Studios. Producer of 'The Aviator.' Harvard BA, Harvard MBA, Harvard MS in Health Policy.",
    whyAdvise: "In Hollywood, the deal is everything. RampRate understands deal architecture the way CAA understands talent — they structure outcomes where everyone wins, and that's why the relationships last decades.",
    linkedin: "https://www.linkedin.com/in/sandycliman",
    twitter: "https://x.com/ClimanSandy",
  },
  {
    name: "Tyler Kolodney",
    role: "ex-Baltimore Orioles",
    img: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663242884547/neoMXOKFotRSwfyT.png",
    bio: "Former executive with the Baltimore Orioles organization, bringing sports industry expertise and business development acumen to RampRate's advisory board.",
    whyAdvise: "Sports teaches you that winning is about preparation, not luck. RampRate prepares their clients with intelligence that turns negotiations from coin flips into calculated advantages.",
    linkedin: "https://www.linkedin.com/in/tyler-kolodny-451522192",
    twitter: "https://x.com/kolodnytyler",
  },
];

/* ── REAL VALUES — enriched from paste ── */
const values = [
  "We serve others — we provide the tools they need, and together we build their future and dreams.",
  "We choose who we work with — we forge a bond through shared values with those who are innovative, inspiring, impact-focused change agents.",
  "We deal in rationality and pragmatism — hope is not a strategy; anecdotes are not data; inputs are not impacts.",
  "We dream big — rationality and audacity are not mutually exclusive. We partner with inspirational leaders and unravel the world's greatest challenges together.",
  "We support execution — we not only recommend the course of action, but back our recommendations with the work required to implement them successfully.",
  "We earn trust — we follow through on our commitments, and require our partners and anyone we vouch for to do likewise.",
  "We overdeliver on our promises — we are resourceful and our effort is only bound by what benefits our client.",
  "We support diversity, equity, and inclusion — for powerful change to happen, people with a variety of lived experiences come together to form creative and productive teams.",
  "We are engines of transparency — we raise the bar on each ecosystem we touch by shining the light on greenwashing, corruption, and self-dealing.",
  "We believe in the transformational power of technology and innovation — that new impact-focused approaches in tech, health, and crypto should be embraced even through creative destruction.",
  "Not all that is new is better — rigorous evaluation and audit of every technology, tokenomics, therapy.",
  "We build an ecosystem of impact-preneurs and trailblazers powered by opportunities, resources, innovation, and human spirit.",
];

/* ── REAL TIMELINE from ramprate.com/about-us/ ── */
const timeline = [
  { year: "2000", event: "RampRate founded. IT sourcing advisory begins." },
  { year: "2004", event: "Alex Veytsel joins as CSO. Enterprise client roster grows to include Sony, Microsoft, Intel." },
  { year: "2010", event: "$10B+ in IT decisions brokered. Offices in Santa Monica and East Coast." },
  { year: "2015", event: "Stratum launched — bridging Web3 and enterprise." },
  { year: "2018", event: "Syzygy launched — growth advisory for founders and impactpreneurs." },
  { year: "2022", event: "RampRate at Davos / World Economic Forum. DevXDAO + XPRIZE €4M grant." },
  { year: "2023", event: "B Corp certified. $24B+ in cumulative decisions brokered." },
  { year: "2024", event: "ImpactSoul launched — tokenizing cultural treasures for impact movements." },
  { year: "2026", event: "Four brands. One coalition. 50+ countries. The purpose-driven economy is here." },
];

/* ── REAL CORPORATE FACTS — enriched from paste ── */
const corporateFacts = [
  { label: "Founded", value: "2000" },
  { label: "Structure", value: "Private & self-funded, profitable since birth" },
  { label: "HQ", value: "Santa Monica, CA" },
  { label: "EU HQ", value: "Ibiza, Spain" },
  { label: "Additional Offices", value: "Massachusetts, North Carolina, Florida" },
  { label: "IT Deals", value: "200+ locations, 50+ countries" },
  { label: "Certification", value: "B Corp Certified" },
];

export default function About() {
  return (
    <PageLayout>
      <PageHero
        sectionLabel="About RampRate"
        headline={
          <>
            Impact and Technology-Focused Advisor for{" "}
            <span className="text-[oklch(0.55_0.15_30)]">Enterprise & Startups</span>
          </>
        }
        subCopy="RampRate is a global advisory firm focused on the most impactful, positive opportunities in tech and wellness, from DAOs and blockchain to VR and psychedelics. Founded in 2000. Private & self-funded. Profitable since birth."
        stats={[
          { value: "2000", label: "Founded" },
          { value: "$24B+", label: "Decisions Brokered" },
          { value: "50+", label: "Countries" },
          { value: "B Corp", label: "Certified" },
        ]}
      />

      {/* Founder's Story — REAL from ramprate.com/values/ */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.55_0.15_30)]" style={{ fontFamily: "var(--font-body)" }}>
            Founder's Story
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Elevating the Way Business Does Business
          </h2>
          <div className="mt-8 space-y-5 text-base text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            <p>
              Hi, We're Tony and Alex, we founded RampRate in 2000 on the premise of elevating the way business does business. We could take the same connections that allowed us to cut 24% of each IT budget we touched and use them to kick down the barriers for tech innovators. We could take the same business planning rigor that we used to guide Sony, McKinsey, Microsoft or Intel on entering new markets and use it to help impact-driven startups reach their potential.
            </p>
            <p>
              So that's what we're doing today — we find the next unicorns and gatekeepers to impact that will not just earn millions yet better millions of lives. We grok their vision while putting them through bootcamp to be ready for life-changing opportunities. And then we kick down the barriers to their success by connecting them with our ecosystem and leveraging the trust we've built in the Fortune 1000 over 20 plus years to create opportunities few others can access.
            </p>
            <p>
              The purpose driven economy is here. And its leaders, in one way or another, will be powered by RampRate.
            </p>
          </div>
        </div>
      </section>

      {/* Principals, Not Pyramids */}
      <section className="bg-[#0d1117] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[oklch(0.82_0.15_75)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Our Structure
            </span>
            <h2
              className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Principals, Not Pyramids.
            </h2>
            <p
              className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-3xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Every engagement is led by the same senior team that has been serving Fortune 500 companies for 25 years. No junior associates. No handoff to unknown delivery teams. The people whose names are on the testimonials are the people who serve you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>25</div>
                <div className="text-xs text-white/40 mt-1" style={{ fontFamily: "var(--font-body)" }}>Years, same team</div>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>0</div>
                <div className="text-xs text-white/40 mt-1" style={{ fontFamily: "var(--font-body)" }}>Junior layers</div>
              </div>
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-[oklch(0.82_0.15_75)]" style={{ fontFamily: "var(--font-mono)" }}>100%</div>
                <div className="text-xs text-white/40 mt-1" style={{ fontFamily: "var(--font-body)" }}>Principal-led</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Facts — enriched with Ibiza EU HQ */}
      <section className="section-light py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
            Corporate <span className="text-[oklch(0.55_0.15_30)]">Facts</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corporateFacts.map((f, i) => (
              <div key={i} className="bg-white rounded-lg p-5 border border-black/5">
                <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.55_0.15_30)] mb-1" style={{ fontFamily: "var(--font-body)" }}>{f.label}</div>
                <div className="text-sm text-[oklch(0.3_0.02_50)]" style={{ fontFamily: "var(--font-body)" }}>{f.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-white rounded-lg border border-black/5">
            <div className="text-xs font-semibold tracking-[0.15em] uppercase text-[oklch(0.55_0.15_30)] mb-2" style={{ fontFamily: "var(--font-body)" }}>Areas of Expertise</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Social Impact (measurement, supply chain, finance)",
                "IT Infrastructure (hosting, networks, cloud, telecom, support)",
                "Strategic Research (primary research, data models, product planning)",
                "Digital Media (live events, CDN, licensing)",
                "Blockchain (mining, proof of stake, tokenomics)",
                "Health & Wellness Innovation",
              ].map(a => (
                <span key={a} className="px-3 py-1 text-xs rounded-full bg-[oklch(0.55_0.15_30)]/10 text-[oklch(0.45_0.1_30)]" style={{ fontFamily: "var(--font-body)" }}>{a}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — REAL milestones from ramprate.com */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-[oklch(0.55_0.15_30)]">Journey</span>
          </h2>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-6 py-5 border-b border-white/10 last:border-0"
              >
                <div className="text-2xl font-bold text-[oklch(0.55_0.15_30)] shrink-0 w-16" style={{ fontFamily: "var(--font-mono)" }}>{t.year}</div>
                <p className="text-white/70 text-sm leading-relaxed pt-1" style={{ fontFamily: "var(--font-body)" }}>{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team — REAL 5 from spec */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Core <span className="text-[oklch(0.55_0.15_30)]">Team</span>
          </h2>
          <p className="text-base text-[oklch(0.45_0.02_50)] mb-12 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            We deploy time-dependent configurations. Principals stay. Advisors guide. Specialists rotate.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm"
              >
                {m.img ? (
                  <div className="h-56 bg-[oklch(0.92_0.01_80)] overflow-hidden">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-[center_20%]" loading="lazy" />
                  </div>
                ) : (
                  <div className="h-56 bg-[oklch(0.92_0.01_80)] flex items-center justify-center">
                    <span className="text-5xl font-bold text-[oklch(0.55_0.15_30)]/20" style={{ fontFamily: "var(--font-display)" }}>
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>{m.name}</h3>
                      <p className="text-xs font-semibold text-[oklch(0.55_0.15_30)] mt-1 tracking-wide uppercase" style={{ fontFamily: "var(--font-body)" }}>{m.role}</p>
                    </div>
                    <div className="flex gap-2 shrink-0 mt-1">
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center hover:bg-[oklch(0.55_0.15_30)]/20 transition-colors">
                          <Linkedin size={14} className="text-[oklch(0.55_0.15_30)]" />
                        </a>
                      )}
                      {m.twitter && (
                        <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center hover:bg-[oklch(0.55_0.15_30)]/20 transition-colors">
                          <Twitter size={14} className="text-[oklch(0.55_0.15_30)]" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-[oklch(0.45_0.02_50)] leading-relaxed line-clamp-5" style={{ fontFamily: "var(--font-body)" }}>{m.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Advisors — REAL 10 from spec */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12" style={{ fontFamily: "var(--font-display)" }}>
            Board of <span className="text-[oklch(0.55_0.15_30)]">Advisors</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardAdvisors.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-xl overflow-hidden border border-black/5"
              >
                {m.img ? (
                  <div className="h-44 bg-[oklch(0.92_0.01_80)] overflow-hidden">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover object-[center_20%]" loading="lazy" />
                  </div>
                ) : (
                  <div className="h-44 bg-[oklch(0.92_0.01_80)] flex items-center justify-center">
                    <span className="text-4xl font-bold text-[oklch(0.55_0.15_30)]/20" style={{ fontFamily: "var(--font-display)" }}>
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-display)" }}>{m.name}</h3>
                      <p className="text-xs text-[oklch(0.55_0.15_30)] mt-0.5 font-semibold" style={{ fontFamily: "var(--font-body)" }}>{m.role}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0 mt-0.5">
                      {m.linkedin && (
                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center hover:bg-[oklch(0.55_0.15_30)]/20 transition-colors">
                          <Linkedin size={12} className="text-[oklch(0.55_0.15_30)]" />
                        </a>
                      )}
                      {m.twitter && (
                        <a href={m.twitter} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-[oklch(0.55_0.15_30)]/10 flex items-center justify-center hover:bg-[oklch(0.55_0.15_30)]/20 transition-colors">
                          <Twitter size={12} className="text-[oklch(0.55_0.15_30)]" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-[oklch(0.45_0.02_50)] leading-relaxed line-clamp-4" style={{ fontFamily: "var(--font-body)" }}>{m.bio}</p>
                  {m.whyAdvise && (
                    <div className="mt-3 p-3 rounded-lg bg-gradient-to-br from-[oklch(0.55_0.15_30)]/5 to-[oklch(0.82_0.15_75)]/5 border border-[oklch(0.55_0.15_30)]/10 backdrop-blur-sm">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.55_0.15_30)] mb-1" style={{ fontFamily: "var(--font-body)" }}>Why I Advise RampRate</p>
                      <p className="text-[11px] text-[oklch(0.4_0.02_50)] leading-relaxed italic" style={{ fontFamily: "var(--font-body)" }}>"{m.whyAdvise}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concentric Model */}
      <section className="section-dark py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12" style={{ fontFamily: "var(--font-display)" }}>
            The <span className="text-[oklch(0.55_0.15_30)]">Concentric</span> Model
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { ring: "Core", count: "5 Principals", desc: "Tony Greenberg, Alex Veytsel, Josh Bykowski, Rob Holmes, and Jeff Alinsangan. 24 years of shared history, complementary expertise, and a combined network spanning every major technology vendor and enterprise buyer." },
              { ring: "Board", count: "10 Advisors", desc: "Stuart Newton (Deloitte), Gulliver Smithers (Sony), Purvee Kondal (Sephora), Curt Hessler (US Treasury), Barry Patmore (Accenture), Peter Gross (Bloom Energy), Peter Hirshberg (Apple), Joe Weinman (Cloudonomics), Sandy Climan (CAA/Universal), Tyler Kolodney." },
              { ring: "Bench", count: "35+ Specialists", desc: "Deep technical experts in specific domains — from cloud architecture to telecom pricing to blockchain security to ESG measurement. Activated on-demand for specific engagements. Fortune 500 alumni. Davos, YPO, Summit, Hatch, XPRIZE, Aspen." },
            ].map((r, i) => (
              <motion.div
                key={r.ring}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 rounded-xl p-7 border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-[oklch(0.55_0.15_30)] mb-2" style={{ fontFamily: "var(--font-display)" }}>{r.ring}</div>
                <div className="text-sm text-white/50 mb-4" style={{ fontFamily: "var(--font-mono)" }}>{r.count}</div>
                <p className="text-sm text-white/60 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — REAL from ramprate.com/values/ — enriched from paste */}
      <section className="section-warm py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-[oklch(0.55_0.15_30)]">Values</span> & Principles
          </h2>
          <p className="text-base text-[oklch(0.45_0.02_50)] mb-10 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            We build an ecosystem of impact-preneurs and trailblazers powered by opportunities, resources, innovation and human spirit.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-lg p-6 border border-black/5 shadow-sm"
              >
                <p className="text-sm text-[oklch(0.4_0.02_50)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>{v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[oklch(0.55_0.15_30)] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Trust Us With What You Hate to Do
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            And focus on the change you want to create in the world.
          </p>
          <Link href="/connect" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md text-sm font-semibold bg-white text-[oklch(0.35_0.1_30)] hover:bg-white/90 transition-all shadow-lg" style={{ fontFamily: "var(--font-body)" }}>
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
