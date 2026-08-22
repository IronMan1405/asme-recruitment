# ASME Recruitment Portal — Design & Frontend Specification

**Purpose of this document:** a complete, opinionated spec another coding AI can implement without needing to make design decisions. No implementation code included, per request.

---

## 0. Framing: the freshman's first 90 seconds

Before any visual decisions, walk through the actual user:

A first-year opens a link (from a WhatsApp group or poster QR code) on their phone, on a mobile connection, probably between classes. They don't know what "verticals" means yet, they don't know if they're "good enough," and they're comparing this against every other club's Notion page or Google Form. The three questions running in their head are:

1. *Is this club serious/legit, or amateur?*
2. *What would I actually be doing if I joined?*
3. *Can I do this even though I've never built anything before?*

Everything downstream — copy tone, IA, task page structure — should answer these three questions as fast as possible. This means:

- The landing page must communicate craftsmanship in under 3 seconds (this is what replaces the PDF's "official letterhead" trust signal).
- Verticals must be described in terms of *outcomes and artifacts* ("you'll build a line-following bot"), not department jargon.
- Every task must visibly de-risk itself: difficulty badge, time estimate, and "no prior experience needed" framing where true, all above the fold.

This framing drives every section below.

---

## 1. Overall Visual Direction

### Concept: "Engineering Notebook / Schematic Sheet," not "Startup Landing Page"

Reject glossy SaaS gradients, generic 3D-render hero blobs, and stock "team collaborating" photography. Instead, borrow visual language from the artifacts engineers actually produce: **datasheets, schematic diagrams, technical drawing sheets, PCB silkscreens, dimensioned CAD views, terminal output.** This is authentic to the club and to your own aesthetic (blueprint/schematic motifs, precise grid systems, dark-mode-first) rather than decorative.

### Visual style
- **Dark-mode-first**, light mode optional/secondary. Dark backgrounds read as "lab/workshop" rather than "marketing site."
- Flat design with **restrained depth** — thin borders and subtle glow instead of heavy drop shadows. Shadows should look like PCB trace glow or oscilloscope phosphor, not Material Design elevation.
- A **faint blueprint/graph-paper grid** as a background texture on hero and section-break areas only — never full-bleed on text-heavy pages (it hurts long-form readability).
- Corner brackets, tick marks, and crosshair accents (like alignment marks on a PCB or CAD viewport) used sparingly as section dividers instead of plain `<hr>` lines.

### Mood
Precise, confident, a little bit "lab-at-2am," not corporate. Think: the club's Discord pinned message written by someone who actually built the thing, not marketing copy.

### Color palette
A single accent color per vertical, layered over one shared dark neutral base — this lets users spatially learn "orange = electronics" the way PCB silkscreen colors or wire colors carry meaning.

- **Base:** near-black charcoal (`#0D0F12`–`#111418` range) for background, warm-white/off-white (`#E8E6E1`) for primary text — avoid pure `#000`/`#FFF`, which feels sterile.
- **Structural neutral:** a mid-gray-blue for borders/dividers (`#2A2E35`-ish).
- **Vertical accents** (assign one HSL family per vertical, keep saturation/lightness consistent across all four so none looks "more important"):
  - Mechanical / CAD → steel blue
  - Electronics → amber/copper (trace-gold)
  - Software → green (terminal-green, desaturated)
  - Robotics / Controls → violet/magenta
- Difficulty badges use a **separate, consistent** traffic-light-adjacent scale (not vertical colors) so difficulty is instantly comparable across verticals: green → amber → red, desaturated so they don't scream "warning."

### Typography
- **Headings:** a technical/geometric sans with a slightly condensed, drafting-tool feel (e.g., something in the Inter/IBM Plex Sans/Space Grotesk family). IBM Plex has an actual engineering pedigree and pairs a matching mono — good fit.
- **Body:** a clean humanist sans for readability (Inter or IBM Plex Sans).
- **Monospace accent font** used deliberately for: task IDs, difficulty/time metadata, code snippets, resource tags, and small "system labels" (e.g., `TASK_04 // ELECTRONICS`). This is the single biggest lever for the "engineering notebook" feel and costs nothing to implement.
- Generous line-height (1.6+) for instruction bodies — this content is dense and will be read by anxious 18-year-olds; don't make it worse.

### Background treatment
- Base: solid dark neutral, no gradients as the primary surface.
- Optional very-low-opacity grid/graph-paper pattern (SVG, tileable) on hero sections and empty states only.
- Optional subtle "circuit trace" line art as a decorative corner element on the landing hero — static, not animated, to protect performance and avoid feeling gimmicky.

### Cards, borders, shadows
- 1px hairline borders in the structural neutral color, not shadows, as the primary separator — reinforces the "schematic sheet" feel.
- Border-radius: small (4–8px), not the rounded-pill style of consumer apps — sharper corners read as more technical.
- On hover: border brightens to the vertical accent color + very subtle glow (like a highlighted trace), rather than a lift/shadow animation.
- Corner "bracket" accents (small L-shaped marks at two opposite corners of a card) as an optional signature detail on featured cards (vertical cards, hero CTA).

### Icons & illustrations
- Line icons only (Lucide or Phosphor icon sets are good fits — consistent stroke weight, technical feel), no filled/glyph icons, no emoji.
- No stock illustration/character art. Where a visual is needed to explain a concept (e.g., "how recruitment works"), use a simple numbered diagram/flow rendered in the site's own line-art style, not an illustration library.
- Vertical "icons" can be simple technical pictograms (gear outline for Mechanical, IC-chip outline for Electronics, terminal bracket `>_` for Software, robotic-arm outline for Robotics) — consistent stroke weight across all four.

### Whitespace & density
- Landing/vertical pages: generous whitespace, low density — this is the "trust and orientation" layer.
- Task detail pages: medium density, information clearly grouped into cards/sections rather than one long scroll of prose — this is the "get to work" layer. Never Google-Doc-style wall of text.

---

## 2. Information Architecture

### Recommended structure (confirms your proposed structure, with one addition)

```
Landing Page
 └─ Vertical Selection (grid of 4ish verticals)
     └─ Vertical Overview (what this vertical does, task list)
         └─ Task List (filterable/sortable)
             └─ Individual Task Page
                 └─ Submission (external form CTA)

+ Global: "How Recruitment Works" (can live as a landing section AND a standalone page linked from footer/nav)
+ Global: FAQ (standalone page, linked from nav/footer — offloads repetitive questions from DMs)
```

**Why this structure, and one deliberate addition:**

- Your proposed funnel is correct — it mirrors how a student actually decides (browse → commit to a vertical → pick a task → do it), and it keeps each page's job singular, which matters a lot for anxious first-time users who shouldn't have to hold two decisions in their head at once.
- **Addition: a standalone FAQ/How-Recruitment-Works page**, not just a landing-page section. Juniors will land on this page directly from shared links ("just read the FAQ") and it reduces load on club members answering the same DMs every year. Cheap to build, high leverage.
- **Do not** add a account/login gate before browsing tasks — friction here directly costs applicants. Task browsing should be fully public; only submission requires leaving the site (to the Google Form).
- Vertical Overview and Task List can be the **same page** for verticals with few tasks (<6), or Task List can be a distinct scrollable section within Vertical Overview rather than a separate route — avoid an unnecessary extra click for small verticals. Decide per-vertical via the data (see §11), not hardcoded.

---

## 3. Landing Page

| Section | Job it does | Notes / placeholder copy |
|---|---|---|
| **Hero** | Answer "is this legit" in 3 seconds | Full-viewport-height (not more) section. Large heading, one-line subhead, one primary CTA. Faint blueprint-grid background, optional static circuit-trace corner accent. *Heading:* "Build something that actually moves." *Subhead:* "ASME Recruitment 2026 — four verticals, real hardware, no experience required." *CTA:* "Explore Verticals →" |
| **Recruitment overview** | Set expectations on timeline/effort | 3–4 short stat/fact blocks in monospace-labeled style: `DURATION: 2 weeks` `VERTICALS: 4` `EXPERIENCE: none required` `SUBMIT BY: [date]`. Not a paragraph — scannable. |
| **Vertical preview** | Let users self-select fast | Compact preview grid (name + 1-line description + icon per vertical), linking to full Vertical Selection page. Full card detail (see §4) lives on that page, not repeated here. |
| **How recruitment works** | Remove procedural anxiety | Simple numbered horizontal/vertical stepper: `01 Pick a vertical` → `02 Pick a task` → `03 Complete & submit` → `04 Hear back`. Diagram-style, not prose. |
| **Important information** | Deadlines, contact, eligibility | Small callout box, visually distinct (bordered, accent-colored left edge) so it's not missed but doesn't dominate. |
| **Footer** | Navigation + trust | Links: verticals, FAQ, how-it-works, contact/Discord/Instagram, club logo. Keep minimal — this isn't a corporate site with 5 footer columns. |

---

## 4. Vertical Selection

### Per-card content
- Vertical name + pictogram icon (accent-colored)
- One-sentence description of *what you'd actually do*
- 3–4 short bullet examples of real deliverables ("Design a gripper mechanism," "Build a PID line follower") — this is the single highest-value content block for de-risking a first-timer's decision
- Difficulty/background badge: e.g. `Beginner-friendly` / `Some experience helpful` — set per-vertical, not per-task, at this level (task-level difficulty appears later)
- Task count (`6 tasks`) shown as a small monospace metadata tag, not a headline number

### Layout
- Responsive grid: 2×2 on desktop/laptop, single column stack on mobile. Avoid a horizontal carousel — juniors should be able to compare all verticals at a glance without swiping.
- Cards are uniform height regardless of content length (truncate description text, not the layout).

### Interaction / hover
- Desktop hover: border transitions to the vertical's accent color, subtle glow, small internal content shift (e.g., an arrow or "View tasks →" label fades in) — no scale/lift transform, keep it flat.
- Mobile: no hover state needed; entire card is the tap target with a brief press-state opacity change.
- Clicking anywhere on the card navigates to the Vertical Overview — don't require hitting a small "View" link.

---

## 5. Task Interface

### Visual priority hierarchy (most → least prominent)
1. Task title
2. Difficulty badge + estimated time (always visible together, top of card/page — this is the #1 filter students use)
3. One-line description
4. Tags/prerequisites
5. Full instructions (collapsed/below the fold on the list view; primary content on the detail view)
6. Resources
7. Submission CTA

### Task list page
- Card grid or list (list works better than a grid here — task titles/descriptions vary in length and a list reads more like a structured document, which matches the "engineering notebook" concept).
- Each row/card: title, difficulty badge (color-coded per the shared scale, not per-vertical color), time estimate (monospace, e.g. `~3 hrs`), 1-line description, tag chips (prerequisites like "Basic C" or "No experience needed").
- **Filter/sort bar** at top: filter by difficulty, sort by time estimate. Keep it to 2 controls max — this is a recruitment task list for ~6–10 items per vertical, not a job board; overbuilding filtering here is wasted complexity.
- No pagination needed at this scale — full list, scrollable.

### Individual task page
- Header block: title, difficulty badge, time estimate, prerequisite tags — all visible without scrolling, mirroring the list card so context carries over.
- Body organized into **clearly labeled, visually separated sections** (bordered cards or divided blocks, each with a small monospace section label like `// PROBLEM STATEMENT`), not one continuous prose block:
  - Short description (1–2 lines, repeated from list for context)
  - Detailed problem statement / instructions
  - Prerequisites (if any)
  - Learning resources (see §6)
  - Optional/deeper resources, visually de-emphasized vs. required resources
  - Evaluation criteria (if you choose to expose this — recommended, reduces anxiety about "what counts as done")
  - Submission block (see §7)
- **Expandable sections** for genuinely long instructions (e.g., a multi-part CAD task): use native `<details>`-style expand/collapse for secondary content (deeper reading, edge cases, stretch goals) so the default view isn't overwhelming, while primary instructions stay open by default.
- Simple **prev/next task navigation** at the bottom of the page, scoped to the current vertical, so users can browse tasks within a vertical without returning to the list every time.
- No progress bar / "steps completed" UI in v1 — there's no backend to track real progress yet, and a fake progress indicator would be actively misleading. Revisit this in the backend phase (§13).

---

## 6. Resources

Treat resources as **curated pointers with context**, not a bibliography.

- Each resource entry: type icon (video / article / doc / datasheet / textbook), title, **one-sentence note on why/when to use it** ("Watch the first 10 minutes for PID intuition, skip the derivation"), and external link.
- Group into two tiers, visually distinct:
  - **Required / start here** — 2–4 items max, prominent placement directly under the problem statement.
  - **Optional / go deeper** — collapsed by default under a "Want to go further?" expandable section.
- Never present resources as an undifferentiated bullet list of 15 links — that recreates the PDF problem this project is meant to solve. If a task genuinely needs many resources, that's a signal to trim scope in the content itself, not to add more UI chrome.

---

## 7. Submission

- Submission block sits at the bottom of the task detail page, visually set apart (bordered panel, accent-colored, slightly more prominent than other sections — this is the conversion point).
- Content: 1-line reminder of what to submit (format, naming convention if any), a **single primary button** ("Submit Your Work →") linking out to the vertical/task's Google Form.
- Clicking Submit: for v1, simply opens the external Google Form in a new tab (`target="_blank"`), keeping the recruitment site itself open so the user doesn't lose their place. No modal, no in-page iframe of the form (iframed Google Forms are a poor mobile experience).
- **Architecture for future compatibility:** the submission button's destination should be driven entirely by a `submissionUrl` field in the task data object (§11), never hardcoded in a component. When a real backend/submission system exists later, this becomes a matter of swapping what `submissionUrl` resolves to (or replacing the button's `href` behavior with an in-app submission flow) without touching any component markup or page structure.

---

## 8. Responsive Design

| Breakpoint | Navigation | Task/Vertical cards | Typography | Grid |
|---|---|---|---|---|
| **Desktop** (≥1200px) | Full horizontal navbar | Verticals: 2×2 grid. Tasks: list view, generous padding | Full scale (e.g. 18px body) | Max content width ~1100–1200px, centered, generous side margins |
| **Laptop** (~1000–1200px) | Same as desktop, tighter spacing | Same layouts, reduced padding | Same | Content width scales with viewport |
| **Tablet** (~700–1000px) | Collapses to a simplified horizontal nav or a slide-out drawer | Verticals: 2-column grid or single column depending on card content length. Tasks: list view retained | Slightly reduced heading scale | Single content column, comfortable margins |
| **Mobile** (<700px) | Hamburger drawer nav, sticky top bar with logo + menu icon | Verticals: single column stack. Tasks: single column stack, full-width cards | Reduce heading scale further; body text stays ≥16px to avoid iOS auto-zoom on inputs | Full-width content with 16–20px side padding |

Additional mobile-specific notes:
- Long task descriptions: rely on the expandable-section pattern (§5) more aggressively on mobile — collapse "deeper reading" and "optional resources" by default.
- Difficulty badge + time estimate should wrap gracefully into a compact horizontal chip row, never truncate or overlap (a known failure mode you've already fought with KaTeX tags on your personal site — same category of bug, worth explicitly testing here).
- Sticky prev/next task navigation as a slim bottom bar on mobile task detail pages, so users don't have to scroll to the very bottom to move between tasks.
- Touch targets ≥44px, generous spacing between tag chips/filter buttons to avoid mis-taps.

---

## 9. Interactions & Animations

Guiding rule: **animation should confirm state changes, not decorate.** Everything below is deliberately restrained.

- **Hover (desktop only):** border-color transition to accent + subtle glow on cards; underline/color shift on links. Duration ~150–200ms, ease-out. No scale/lift transforms.
- **Expand/collapse (resources, deeper instructions):** height/opacity transition, ~200ms — should feel instant, not "presented."
- **Page transitions:** simple fade (~150ms) between routes at most. No slide/parallax page transitions — they hurt perceived performance on the mid-range Android phones a chunk of your audience will use.
- **Scroll animations:** at most a subtle fade-up on first entry for landing page sections (hero, vertical preview, how-it-works). Do **not** apply scroll animation to task list/detail content — anxious users skimming for information should never have content animate in while they're trying to read it.
- **Task navigation (prev/next):** instant, no transition needed beyond the page fade.
- **Progress indicators:** none in v1 (see §5) — don't fake state that doesn't exist yet.
- Explicitly avoid: parallax backgrounds, animated gradients, cursor-follow effects, staggered card entrance animations on every page load, confetti/celebration effects. These read as "generic modern template" — the opposite of the intended identity — and cost real performance budget on low-end devices.

---

## 10. Component Architecture

```
App
├── Layout
│   ├── Navbar (logo, vertical links, FAQ link, mobile hamburger)
│   └── Footer (links, contact, socials)
│
├── Pages
│   ├── LandingPage
│   │   ├── Hero
│   │   ├── RecruitmentStats        (the DURATION/VERTICALS/etc. block)
│   │   ├── VerticalPreviewGrid     (compact, links out — reuses VerticalCard in "compact" mode)
│   │   ├── HowItWorksStepper
│   │   └── ImportantInfoCallout
│   │
│   ├── VerticalSelectionPage
│   │   └── VerticalCard × N        (full detail mode)
│   │
│   ├── VerticalOverviewPage
│   │   ├── VerticalHeader          (name, description, icon, accent color)
│   │   ├── TaskFilterBar           (difficulty filter, sort control)
│   │   └── TaskCard × N            (list-item mode)
│   │
│   ├── TaskDetailPage
│   │   ├── TaskHeader              (title, DifficultyBadge, TimeEstimate, tags)
│   │   ├── TaskSection             (generic labeled block — reused for problem statement, prerequisites, evaluation criteria)
│   │   ├── ResourceList
│   │   │   └── ResourceCard × N
│   │   ├── SubmissionPanel
│   │   └── TaskNav                 (prev/next within vertical)
│   │
│   ├── HowItWorksPage (standalone, reuses HowItWorksStepper)
│   └── FAQPage
│
└── Shared/Primitives
    ├── DifficultyBadge             (color-coded, shared scale across verticals)
    ├── TagChip                     (prerequisites, resource types)
    ├── ExpandableSection           (used by TaskSection for optional/deep content)
    ├── AccentIcon                  (renders a vertical's pictogram in its accent color)
    ├── Button (primary / secondary / external-link variants)
    └── SectionLabel                (the small monospace `// LABEL` heading style)
```

**Reusability notes:**
- `VerticalCard` should support a `compact` prop so the same component powers both the landing-page preview and the full Vertical Selection page, rather than maintaining two near-duplicate card components.
- `TaskCard` (list mode) and `TaskHeader` (detail-page mode) should pull from the same underlying task data shape and ideally share a `DifficultyBadge` + `TimeEstimate` sub-component so the "difficulty language" stays visually identical everywhere.
- `TaskSection` should be a generic labeled-container component (`label`, `children`) reused for every content block on the task detail page — this is what keeps the page from becoming a pile of one-off styled `<div>`s.
- Every component that touches color should take the vertical's accent color as a prop/theme value, never hardcode a specific vertical's color — this is what makes adding a 5th vertical next year a data change, not a code change.

---

## 11. Content / Data Architecture

This is the most important structural decision in the whole spec — get this right and next year's exec board updates the site by editing a file, not by reading code.

### Recommended approach: static, strongly-typed JSON/TS data files, no CMS, no backend

For a club-maintained site updated ~once a year, a headless CMS or database is overkill (extra hosting, extra login system, extra thing to break). Plain structured data files checked into the repo, alongside a documented schema, are the right level of complexity — they're git-diffable, require no new tools for the next maintainer, and cost nothing to host.

### Proposed schema

```jsonc
// data/verticals.json
{
  "id": "electronics",
  "name": "Electronics",
  "shortDescription": "Design and build the circuits that make everything else work.",
  "backgroundNeeded": "beginner-friendly", // "beginner-friendly" | "some-experience-helpful"
  "accentColor": "amber",                  // maps to a design-token, not a raw hex
  "icon": "chip",                          // key into the icon set
  "exampleDeliverables": [
    "Design a motor driver PCB",
    "Build a sensor breakout board"
  ],
  "taskIds": ["elec-01", "elec-02", "elec-03"]
}
```

```jsonc
// data/tasks/elec-01.json
{
  "id": "elec-01",
  "verticalId": "electronics",
  "title": "Design a Simple Motor Driver Circuit",
  "shortDescription": "Design and simulate an H-bridge circuit to drive a DC motor in both directions.",
  "difficulty": "beginner",          // "beginner" | "intermediate" | "advanced"
  "estimatedTime": "2-3 hrs",
  "prerequisites": ["Basic circuit theory"],   // empty array if none
  "instructions": "## Problem Statement\n...markdown...",
  "resources": {
    "required": [
      { "type": "video", "title": "H-Bridge Basics", "url": "https://...", "note": "Watch 0:00–8:00 for the core concept." }
    ],
    "optional": [
      { "type": "datasheet", "title": "L298N Datasheet", "url": "https://..." }
    ]
  },
  "evaluationCriteria": [
    "Circuit correctly reverses motor direction",
    "Includes basic protection (flyback diode)"
  ],
  "submissionUrl": "https://forms.gle/placeholder",
  "tags": ["circuits", "simulation"]
}
```

### Why this structure

- **One file per task, one file per vertical, indexed by ID** rather than one giant monolithic JSON — this makes diffs small and readable in PRs/code review when a club member updates a single task, and avoids merge conflicts when multiple people edit different tasks at once.
- **`instructions` as Markdown**, not raw HTML or JSX — lets non-web-developer club members write/update task content in a familiar, forgiving format; the frontend renders it with a standard Markdown renderer.
- **`accentColor` as a semantic token** (`"amber"`), not a literal hex — keeps the design system centralized; if the palette is retuned next year, it changes in one theme file, not in every task's data.
- **`submissionUrl` as a plain field** is exactly what makes §7's "swap the destination later" plan work — the component never needs to know whether it's pointing at a Google Form or a future internal `/submit/:taskId` route.
- **`evaluationCriteria` as an explicit field** (even though not explicitly requested) directly serves the "not intimidating" goal from the brief — it turns "what are they even grading?" anxiety into a visible checklist.
- This shape is trivially portable to a real backend later: the same JSON shape becomes the response body of a `GET /tasks/:id` endpoint, and no frontend component needs to change — only the data-fetching layer.

---

## 12. Technology Recommendation

### Recommendation: **React + Vite**, static build, deployed on **GitHub Pages or Vercel/Netlify free tier**

**Comparison of the three options you listed:**

| | Vanilla HTML/CSS/JS | React + Vite | Other lightweight framework (Astro, SvelteKit, etc.) |
|---|---|---|---|
| Fit for data-driven content | Poor — you'd hand-roll templating for ~30 near-identical task pages, error-prone and painful to maintain by hand each year | Strong — task/vertical pages are naturally components driven by the JSON schema in §11 | Also strong, arguably even better-suited for a mostly-static content site |
| Learning curve for a non-web-dev but strong programmer | Low, but scales badly as content grows | Moderate, but React is the most-documented/most-AI-assisted framework by a wide margin — highly relevant since you'll hand this spec to a coding AI to implement and to future club members who'll want AI help maintaining it | Similar learning curve to React but smaller community/less AI training data, meaning less reliable AI-assisted maintenance in future years |
| Deployment simplicity | Trivial (any static host) | Trivial (Vite outputs static files; GitHub Pages/Vercel/Netlify all support it directly) | Trivial, similarly |
| Future backend integration | Hard to bolt on cleanly | Natural — component + data-fetching separation (§11) makes swapping static JSON for API calls a small, contained change | Also natural |
| Long-term maintainability by rotating student teams | Weakest | Strongest, given React's ubiquity — next year's maintainer, whoever they are, has almost certainly touched React before or can get AI help fast | Good, but a less common skill among incoming students than React |

**Recommendation: React + Vite.** It's the best balance of "data-driven from day one" (directly serves §11), "trivial static deployment," "clean path to a future backend" (§13), and — pragmatically — the framework most likely to be familiar to whoever inherits this project, and the one an AI coding assistant will implement most reliably. Avoid pulling in a full meta-framework (Next.js, Remix) for v1 — there's no server-rendering or routing complexity here that justifies it; React Router + Vite is sufficient.

Supporting choices:
- **Styling:** Tailwind CSS — fast to implement the design system in §1 consistently (spacing/color tokens), easy for a non-specialist frontend dev to maintain, avoids a bespoke CSS architecture that only the original author understands.
- **Markdown rendering:** a small library (e.g. `react-markdown`) for the `instructions` field.
- **Icons:** Lucide React (matches the line-icon direction in §1, tree-shakeable).
- **Hosting:** GitHub Pages is the simplest and free, and keeps everything in one repo the club already owns; Vercel/Netlify are fine alternatives if you want preview deployments per PR.
- **No backend, no database, no CMS for v1** — confirmed by the brief and reinforced by §11's static-JSON approach.

---

## 13. Future Extensibility

The v1 architecture supports these additions without a rebuild, because of the decisions in §7 and §11:

- **User accounts:** add an auth provider (e.g. simple email/OAuth) gating only the submission flow, not browsing — browsing should stay public even after this is added.
- **Task submission (in-app):** replace `submissionUrl`'s external-link behavior with an in-app form component; the `SubmissionPanel` component already isolates this concern (§10).
- **File uploads:** extend the (future) submission form/API with multipart upload handling; doesn't touch task/vertical display components at all.
- **Database storage:** swap the static JSON data layer (§11) for API calls with the same response shape — components consuming `task` objects don't need to change if the shape is preserved.
- **Applicant tracking / admin dashboard:** a genuinely new section of the app (`/admin`), built independently, consuming the same task/vertical data plus a new submissions table — doesn't require touching the public-facing recruitment pages.
- **Recruitment evaluation / progress tracking:** once submissions are backend-tracked, the "no fake progress bar" decision in §5 can be revisited — real per-user progress becomes honest to show.

The single architectural discipline that makes all of this possible: **never let a display component know or care where its data came from.** Keep data-fetching (static import today, API call tomorrow) at the page level, and pass plain data objects down to components.

---

## 14. Accessibility & Usability

- **Contrast:** verify all text/background pairs meet WCAG AA (4.5:1 for body text, 3:1 for large text) — dark-mode designs with muted accent colors are the most common place this silently fails; test accent-colored text specifically (e.g., amber-on-charcoal), not just primary text.
- **Font sizes:** body text minimum 16px; never rely on color alone to convey difficulty — pair the DifficultyBadge color with a text label (`Beginner`, not just a green dot).
- **Keyboard navigation:** all interactive elements (cards, filter controls, expandable sections, nav) must be reachable and operable via Tab/Enter/Space; visible focus states (a bright accent-colored outline fits the visual language well) — do not remove default focus rings without replacing them.
- **Mobile usability:** touch targets ≥44px (per §8); avoid hover-dependent functionality (e.g., a "reveal on hover" tooltip with no tap equivalent).
- **Link states:** external resource links should be visually distinguishable (icon or subtle indicator) and open in a new tab; internal navigation links should not.
- **Forms:** since v1 has no in-site form (submission goes to Google Forms), the only in-site "form" element is the filter bar — ensure filter buttons have clear selected/unselected states, not color alone.
- **Long-form technical content:** support proper semantic heading hierarchy within task instructions (Markdown → real `<h2>`/`<h3>`, not styled `<div>`s) so screen reader users and browser "find in page" both work correctly.

---

## 15. Final Implementation-Ready Specification (Summary)

### Design system
- Dark-mode-first, near-black base (`#0D0F12`–`#111418`), warm off-white text (`#E8E6E1`).
- One accent color per vertical (steel blue / amber / green / violet), plus a separate shared traffic-light difficulty scale.
- Headings: geometric/technical sans (IBM Plex Sans or Space Grotesk). Body: humanist sans (Inter/IBM Plex Sans). Metadata/code: matching monospace (IBM Plex Mono).
- Hairline 1px borders as primary separators, minimal shadow, small border-radius (4–8px), accent-colored glow on hover.
- Faint blueprint-grid background texture, used only on hero/section-break areas.
- Line icons only (Lucide/Phosphor); no stock illustration.

### Page hierarchy
```
/                      LandingPage
/verticals             VerticalSelectionPage
/verticals/:id         VerticalOverviewPage (+ task list)
/verticals/:id/:taskId TaskDetailPage
/how-it-works          HowItWorksPage
/faq                   FAQPage
```

### Component hierarchy
See §10 in full. Key primitives: `DifficultyBadge`, `TagChip`, `ExpandableSection`, `AccentIcon`, `SectionLabel`. Key composites: `VerticalCard` (compact/full), `TaskCard`, `TaskSection`, `ResourceCard`, `SubmissionPanel`.

### Data model
One JSON/TS file per vertical (`data/verticals.json`), one JSON/TS file per task (`data/tasks/<id>.json`), schema as specified in §11, `instructions` field in Markdown, `submissionUrl` as a plain swappable field.

### Responsive rules
Desktop 2×2 vertical grid / list task view; tablet 1–2 column; mobile single column, hamburger nav, sticky bottom prev/next task bar. Full breakpoint table in §8.

### Interaction rules
Restrained: border/glow hover, ~150–200ms fades, no scroll-triggered animation on content pages, no parallax/confetti/staggered entrances. Full rules in §9.

### Recommended technology stack
React + Vite, Tailwind CSS, react-markdown, Lucide React icons, React Router, static export deployed to GitHub Pages (or Vercel/Netlify). No backend, no CMS, no database in v1.

### Suggested project structure
```
/src
  /components
    /primitives      (DifficultyBadge, TagChip, ExpandableSection, AccentIcon, SectionLabel, Button)
    /composite        (VerticalCard, TaskCard, TaskSection, ResourceCard, SubmissionPanel, TaskNav)
    /layout           (Navbar, Footer)
  /pages
    LandingPage.tsx
    VerticalSelectionPage.tsx
    VerticalOverviewPage.tsx
    TaskDetailPage.tsx
    HowItWorksPage.tsx
    FAQPage.tsx
  /data
    verticals.json
    /tasks
      elec-01.json
      elec-02.json
      ...
  /theme
    tokens.ts          (color/spacing/typography design tokens, incl. accentColor → hex map)
  /lib
    getTaskById.ts, getVerticalById.ts, markdownRenderer.tsx
/public
  /icons
/data-schema.md         (documented schema + example, for next year's maintainers)
```

---

**Note on scope discipline:** every recommendation above was chosen to be implementable as a static site with zero backend, while keeping every future addition (§13) a contained, additive change rather than a rewrite. This should be sufficient for a coding AI to implement directly against the data model in §11 and component hierarchy in §10.