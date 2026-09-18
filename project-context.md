# PMI-ACP Agile Exam Prep web context

## Scope

- Service: `GLB-0003`
- Public title: `PMI-ACP Agile Exam Prep`
- Package / bundle: `app.mcyj.examprep.glb0003`
- Repository: `MCYJ/pmi-acp-agile-exam-prep-web`
- Production: `https://mcyj.github.io/pmi-acp-agile-exam-prep-web/`
- The source app directory is read-only for this website task.

## Verified public Store identity — 2026-09-19

- Google Play: `https://play.google.com/store/apps/details?id=app.mcyj.examprep.glb0003`
- Apple App Store: `https://apps.apple.com/us/app/id6795570504`
- Apple public track ID: `6795570504`; exact bundle found in US, KR and GB.
- Both marketplace badges use an exact `194 × 75` clickable frame while preserving official artwork proportions.

## Official facts and content

- PMI certification overview and March 2026 Examination Content Outline were checked on 2026-09-19.
- Current public structure: 120 questions, 180 minutes, one scheduled 10-minute break.
- Domain weights: Mindset 28%, Leadership 25%, Product 19%, Delivery 28%.
- No fixed numeric passing score is claimed because PMI does not publish one.
- Current eligibility is explained as multiple pathways rather than a single experience rule; final application guidance remains authoritative.
- Maintenance page confirms 30 PDUs in a three-year cycle.
- Eleven substantive guides are independently written in English and Korean; no official exam questions are copied.

## Design and technical decisions

- Visual thesis: a high-contrast agile decision board using deep violet, signal coral and flow cyan, with visible domain-weight bars and staggered work cards.
- App Store screenshots and the current app icon are copied into the isolated site repository.
- Global text uses `word-break: keep-all` and safe overflow handling.
- Static multi-route site, no runtime database, account, analytics or cookies.

## Verification commands

- `npm run build`
- `npm run check`
- Production QA must cover every sitemap route, representative assets, 404, exact Store identities and badge-frame CSS.
