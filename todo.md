# Redesign TODO

## Reference Sites
- Content/Navigation: fusionramp.netlify.app (4 brands, approach, commitment, connect)
- Look/Feel: fusionramp.manus.space (warm cinematic hero, bold typography, alternating sections)
- Brand: RampRate (NOT FusionRamp)

## Design Direction (from manus.space)
- [x] Study manus.space hero: cinematic golden sphere on sand, warm earth tones
- [x] Study manus.space layout: hero → network nodes → symmetry/cards → blue CTA
- [ ] Generate new hero image: warm/cinematic, "machines becoming people" metaphor
- [ ] Implement warm color palette: earth tones, amber/gold accents, tan backgrounds
- [ ] Bold display serif headlines, clean sans body
- [ ] Alternating section backgrounds (warm image → dark → light → bold color CTA)
- [ ] Glitched finish on images, dynamic movement throughout
- [ ] Content from netlify: 4 brands, approach (4 services), commitment, connect

## Content (from netlify.app, rebrand to RampRate)
- [ ] Hero: "A fractional team of superstars creating trajectory-changing connections"
- [ ] Stats: 80% Faster | 99% Lower Risk | 25% OpEx Savings | 10x Value Growth
- [ ] 4 Brand Cards: RampRate/Syzygy/Stratum/ImpactSoul
- [ ] Approach: Speed & De-Risk | Connections | Clean Up Messes | Align Profit+Purpose
- [ ] Commitment: Skin in the game (4 comp models)
- [ ] CTA: "Trust us with what you have to do"

## Full-Stack Upgrade & Backend
- [x] Add full-stack capabilities (db, server, user) via webdev_add_feature
- [x] Fix homepage error (useAuth not imported after upgrade merge)
- [x] Create leads database table (name, email, company, title, phone, practice, message, source, status)
- [x] Add lead query helpers in server/db.ts (createLead, getLeads, getLeadById)
- [x] Create lead.submit tRPC procedure with Zod validation
- [x] Wire Connect page form to tRPC lead.submit mutation
- [x] Add owner notification on new lead submission
- [x] Add loading state and error handling to contact form
- [x] Write vitest tests for lead submission (8 tests, all passing)

## Blog Enhancements
- [x] Generate compelling thumbnail images for each blog post (Japanese minimalism + sacred geometry style)
- [x] Evaluate date display strategy — removed dates for timelessness
- [x] Integrate generated images into blog components
- [x] Research and add 20 more prescient blog posts from RampRate/TonyGreenberg archives
- [x] Add credibility grading system (Did it come true? Importance? Validity?)
- [x] Add "Proved True" / "Wave of the Future" toggle/button per post
- [x] Position blog as proof RampRate sees the future — "We are the articles"
- [x] Rebuild client logo wall: two-tier expandable grid, grayscale text-as-logo, context lines
- [x] Fix Reuben/Rob Holmes swap on About page
- [x] Fix cut-off heads on team photos (object-position adjusted)
- [x] AI-enhance team photos to be uniform and slightly stylized
- [x] Add LinkedIn links to all team members
- [x] Upload blog thumbnails to S3 and integrate into Blog page
- [x] Add glassmorphic design elements across the site (cards, overlays, frosted glass effects)
- [x] Add simulated "why I support RampRate" quotes for each advisor on About page
- [x] Add 10 confidential NDA testimonials section to Proof page with lock icons, industry icons, division tags, carousel, and "Request References" CTA
## Full Glassmorphic Pass
- [x] Homepage remaining (Operate, Compensation, Client Wall, Brands)
- [x] Process page (phase cards, Flow Circuit, Economics, Guarantee)
- [x] Proof page (case study cards, testimonial cards, confidential section)
- [x] About page (team cards, advisor cards, corporate facts, values)
- [x] Blog page (grid cards, filter bar, stats)
- [x] Thinking page + remove dates
- [x] Connect page (form card, contact cards)
- [x] Practice sub-pages (sourcing, growth, web3, impact)
- [ ] Fix blog thumbnail alt text overlay bug
- [x] Add Stratum deep-dive links (https://stratumweb-2pprew4h.manus.space) throughout the site wherever Stratum is referenced
- [x] Interlink Flow Circuit throughout the site in business-relevant contexts
- [x] Interlink FindMyMe throughout the site in business-relevant contexts
- [x] Add Google Forms exit survey (forms.gle/K5QuamnhVYKAxx22A) — persistent trigger on every page + exit-intent popup
- [x] Fix logo: combine "ramp" and "rate" into "RampRate" as one word with capital R
## Signal Alignment Feedback
- [x] Replace safe tagline with bolder, contrarian one — "Where Relationships Become Revenue"
- [x] Replace "Request Principal Review" CTA with "Tell Us What's Broken" across all pages
- [x] Name the Selected Engagements — ViacomCBS/Hearst, eBay, Syntropy
- [x] Align CTA energy across all pages to match the bold, execution-focused identity

## Blog Migration & New Pages
- [x] Add ~13 missing blog posts from old ramprate.com
- [x] Add brand tags (RampRate/Syzygy/Stratum/ImpactSoul) to all blog posts
- [x] Create Privacy Policy page
- [x] Create Terms of Service page
- [x] Create /values page
- [x] Add large site-wide search bar accessible from every page (no AI, client-side, navigates to pages/blog posts)
