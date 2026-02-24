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
