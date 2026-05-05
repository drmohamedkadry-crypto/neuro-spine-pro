# Information Architecture — Public Funnel

## Site Map

```
/                          ← Condition-agnostic hero (SEO root)
├── /back-pain             ← Condition landing pages
├── /neck-pain
├── /sciatica
├── /herniated-disc
├── /spinal-stenosis
│
├── /conditions            ← Condition library index
│   └── /conditions/[slug] ← Individual condition detail
│
├── /treatments            ← Treatment overview
│   ├── /treatments/non-surgical
│   └── /treatments/surgical
│
├── /about                 ← Practice & team
│   └── /about/credentials
│
├── /patient-stories       ← Social proof
│
└── /book                  ← Booking flow
    ├── /book/select-reason
    ├── /book/select-time
    ├── /book/contact       ← PHI collection starts here
    └── /book/confirm
```

## Navigation Structure

### Primary Nav (all pages)
- Conditions *(mega-menu)*
- Treatments
- Patient Stories
- About
- **Book a Consultation** *(CTA button)*

### Footer Nav
- Conditions index
- Treatments
- About / Credentials
- Privacy Policy
- Accessibility Statement
- Phone + Address

## Page Templates

| Template | Used By | Priority |
|---|---|---|
| `condition-landing` | `/[condition]`, `/conditions/[slug]` | High |
| `treatment-overview` | `/treatments/*` | Medium |
| `trust-page` | `/about`, `/patient-stories` | Medium |
| `booking-step` | `/book/*` | Critical |
| `home` | `/` | High |

## User Flows

### Primary: Symptom → Book
1. Organic search → condition landing page
2. Read symptom description → scroll to CTA
3. Click "Check if we can help" → `/book/select-reason`
4. Choose appointment reason → pick time slot
5. Enter contact details → confirm

### Secondary: Trust → Book
1. Referral / ad → `/about` or `/patient-stories`
2. Read credentials / stories → click sticky CTA
3. Enter booking flow at `/book/select-reason`

### Tertiary: Direct Intent
1. Direct nav or branded search → `/book`
2. Skip reason selection if referral param present
3. Pick time → contact → confirm

## Content Hierarchy per Condition Page

1. **Hero** — condition name, primary symptom, CTA
2. **Symptoms** — scannable list, patient language
3. **When to seek help** — urgency signals (red flags)
4. **How we diagnose** — reassurance, no unnecessary tests
5. **Treatment pathway** — non-surgical → surgical ladder
6. **Outcomes** — stat callouts + patient quote
7. **FAQ** — 4–6 questions, schema-marked
8. **CTA block** — book or call
