# Tasks — Mimo Public Funnel

## Status Key
- `[ ]` Not started
- `[~]` In progress
- `[x]` Done
- `[!]` Blocked

---

## Phase 0 — Engineering Foundation

- [x] 0.1 Bootstrap Next.js 15 (TypeScript, App Router, Tailwind, ESLint, Prettier)
- [x] 0.2 Install design tokens · configure Tailwind CSS custom property bridge · `/test-tokens` page
- [x] 0.3 Font loading: Instrument Serif, Inter 400/600, IBM Plex Sans Arabic 400/600
- [ ] 0.4 Global layout shell: `<html lang>` toggle, RTL support via `dir` attribute, CSS logical properties baseline
- [ ] 0.5 i18n routing: `/en/*` and `/ar/*` with middleware-based redirect from `/`
- [ ] 0.6 CI: ESLint + Prettier check, Lighthouse CI budget (perf ≥ 90, a11y = 100)

---

## Phase 1 — Design System

- [x] Define design brief
- [x] Draft information architecture
- [x] Establish Midnight Glow design tokens (`tokens.css`)
- [ ] 1.1 Component: Button (primary teal, secondary outline, ghost)
- [ ] 1.2 Component: Typography scale (display / heading / body / label, AR/EN)
- [ ] 1.3 Component: Card (surface, brand-dark variant)
- [ ] 1.4 Component: Input + Textarea (focus ring, error state)
- [ ] 1.5 Component: Nav (mobile-first, sticky, lang switcher)
- [ ] 1.6 Atmospheric panel — cyan glow hero background (CSS only, no images)
- [ ] 1.7 Accessibility audit checklist drafted

---

## Phase 2 — Public Funnel Pages

- [ ] 2.1 Hero section — headline, subhead, CTA (AR + EN)
- [ ] 2.2 How It Works — 3-step Strategic Content Workflow
- [ ] 2.3 What You Get — deliverable cards (Brand Diagnosis, Mini Brand Book, etc.)
- [ ] 2.4 Pricing section — single tier, value framing
- [ ] 2.5 Social proof — outcome stats + client quotes
- [ ] 2.6 Subscribe form — email/phone capture, GDPR-aware
- [ ] 2.7 Footer — bilingual, links, legal

---

## Phase 3 — Quality & Launch

- [ ] 3.1 Mobile QA all sections (375 px, 390 px, 430 px)
- [ ] 3.2 RTL QA — Arabic layout passes visual inspection
- [ ] 3.3 Lighthouse CI passes (perf ≥ 90, a11y 100, best-practices 100)
- [ ] 3.4 WCAG 2.1 AA manual audit
- [ ] 3.5 OG image + favicon set
- [ ] 3.6 Analytics integration (privacy-first)
- [ ] 3.7 Production deploy

---

## Open Questions

- [ ] Single domain with lang subdirectory (`mimo.co/ar`) or subdomains (`ar.mimo.co`)?
- [ ] Payment provider for GCC: Moyasar, Tap, or Stripe?
- [ ] Is the subscribe form a Typeform embed or custom?
- [ ] Video or static for the "How It Works" section?
