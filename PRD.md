# PRD: KISAS Korea Arts Study Abroad Center Website

## 1. Project Overview

KISAS is a study abroad center for Chinese students and families preparing for arts-related university admission in Korea. The website should explain the value of KISAS, partner university options, tuition and scholarship logic, application process, faculty network, student outcomes, campus life, services, and consultation flow.

The client-provided wireframe is `docs/KISAS_와이어프레임_v3.0_kr.html`. The wireframe is written in Korean for review convenience only. The production website must be written in English by default and Chinese as the secondary language. Korean is not a public site language unless the client asks for it later.

The Figma home design is the visual source for the production home page:

- Figma URL: `https://www.figma.com/design/nSgMPOfdRCDJ0ORTaj4uDc/KISAS?node-id=190-2`
- Figma node: `190:2`
- Scope: `/` Home visual direction, section order, tone, imagery, typography, and spacing reference
- Wireframe scope: 13-page information architecture, content requirements, and page-level functional requirements
- Exported home assets path: `public/assets/images/home`

If the Figma home design and HTML wireframe conflict for the home page, prefer the Figma visual direction while preserving the wireframe's required content intent and user flows.

This project is frontend-only for now. Backend, admin, CMS, inquiry storage, and real operational integrations are owned by another developer. Frontend should ship with static/mock data first, with clear future API boundaries.

## 2. Goals

- Build a lightweight 13-page marketing and inquiry website based on the client wireframe.
- Default language: English.
- Secondary language: Chinese.
- Make the site credible for Chinese parents and students evaluating Korea arts study abroad.
- Explain the full path from China-side preparation to Korean university admission, settlement, and career direction.
- Provide repeated but natural consultation CTAs, especially free assessment and WeChat/contact flows.
- Keep the implementation simple with Next.js, Tailwind CSS, shadcn/ui, and Vercel test deployment.
- Preserve the wireframe information architecture while replacing Korean review text with production-ready English and Chinese copy.

## 3. Non-Goals

- Korean public-language site
- Backend API implementation
- Admin dashboard
- CMS implementation
- Authentication, login, payment, booking confirmation
- Real map, WeChat, or SNS API integration
- Full university database beyond the approved frontend content model
- Heavy animation, 3D, video-first page experience

## 4. Source Wireframe Notes

- Source file: `docs/KISAS_와이어프레임_v3.0_kr.html`
- Home design source: Figma file `nSgMPOfdRCDJ0ORTaj4uDc`, node `190:2`
- Wireframe page count: 13
- Wireframe language: Korean for internal/client review
- Production languages: English default, Chinese secondary
- Many university names, admission numbers, student cases, tuition values, scholarship claims, and activity/news items are explicitly marked as dummy/example content in the wireframe.

Client decision: for the home design, visual fidelity has priority over claim softening during design implementation. Still keep claims and numbers in data/content files rather than scattering them through components so they can be reviewed and replaced later.

## 5. Target Users

### Primary Users

- Chinese high school students preparing for arts study abroad in Korea
- Chinese college students or graduates planning arts-related transfer or graduate study
- Chinese parents evaluating safety, cost, return on investment, and credibility
- Students interested in Korean music, media, design, performance, film, beauty, esports, animation, and entertainment-related majors

### User Questions

- Can I apply even if I have weak or no Korean language skills?
- Which Korean universities and majors fit my profile?
- How much will tuition and living costs actually be?
- Can scholarships reduce the cost?
- What documents, portfolio, TOPIK, interview, or practical tests are required?
- What support does KISAS provide before and after admission?
- What happens after graduation?
- How do I contact KISAS quickly, especially through WeChat?

## 6. Positioning

KISAS should feel like a premium but practical Korea arts study abroad partner for Chinese families.

Core messages:

- China-side preparation before Korea admission
- Arts-specific university and portfolio guidance
- Korea university admission and settlement support
- Transparent cost and scholarship planning
- Faculty and industry network
- Career path after graduation, including China return, Korea stay, and third-country options
- Fast consultation through WeChat, phone, or center visit

## 7. Information Architecture

The production site should follow the 13-page wireframe structure.

| Page | Route Suggestion | Wireframe Label | Production Purpose |
| --- | --- | --- | --- |
| 1 | `/` | Home | Brand, value proposition, partner university proof, ROI highlights, student proof, CTA |
| 2 | `/program` | Program | End-to-end program overview and package options |
| 3 | `/universities` | Universities | Partner/target university categories and major coverage |
| 4 | `/tuition` | Tuition | Tuition, scholarship, living cost, ROI scenarios |
| 5 | `/application` | Application | 10-month roadmap, 8-step process, documents, visa notes |
| 6 | `/faculty` | Faculty | Faculty, producer, trainer, consultant network |
| 7 | `/majors-career` | Majors & Career | Major categories, career outcomes, salary comparison |
| 8 | `/campus-life` | Campus Life | Seoul/regional living, housing, part-time work, monthly cost |
| 9 | `/students` | Students | Student cases and activity records |
| 10 | `/news` | News | Activity archive, master classes, China-Korea exchange, showcases |
| 11 | `/services` | Services | Core services and package comparison |
| 12 | `/contact` | Contact | Center address, WeChat/SNS, online inquiry |
| 13 | `/apply` | Apply | Dedicated consultation application form |

Localized routes should use a simple structure such as:

- English default: `/`, `/program`, `/universities`
- Chinese: `/zh`, `/zh/program`, `/zh/universities`

Final locale routing can be adjusted during implementation, but English must remain the default.

## 8. Navigation Requirements

Wireframe primary navigation:

- Introduction/Program
- Partner Universities
- Application
- Students/Activities
- Contact
- CTA: Apply for Consultation

Recommended English navigation:

- Program
- Universities
- Application
- Students
- Contact
- CTA: Free Consultation

Recommended Chinese navigation:

- 项目介绍
- 合作院校
- 留学申请
- 学生案例
- 联系我们
- CTA: 免费咨询

The header must remain sticky. Mobile navigation should collapse behind a menu button. The consultation CTA must remain accessible on desktop and mobile.

## 9. Page Requirements

### 9.1 Home

Purpose: establish KISAS as a premium Korea arts study abroad center for Chinese families.

Required sections:

- Hero with bilingual-ready headline and free assessment CTA
- Four value cards:
  - partner university access
  - China-side preparation
  - direct instruction by arts/industry experts
  - post-graduation planning
- Partner university strip
- Cost/ROI highlights
- Student case highlights
- Dark final CTA for free assessment

Content caution:

- University names, partner count, ROI numbers, salaries, and student outcomes must be marked as mock data in development until approved.

### 9.2 Program

Purpose: explain the end-to-end service from preparation in China to Korean admission and career planning.

Required sections:

- Program overview
- 3-stage process:
  - China-side preparation
  - Korean university admission
  - graduation and career path
- Recommended student profiles:
  - music career students
  - content/media/design/performance students
  - Korean-language beginners
- Four package options:
  - 1-month trial
  - 3-month intensive
  - 6-month regular
  - 1-year premium
- CTA to apply for custom consultation

### 9.3 Universities

Purpose: show university categories and major coverage.

Required sections:

- Hero explaining partner/target university scope
- University filter tabs:
  - All
  - Seoul
  - Regional
  - Specialized
- University cards with:
  - logo/placeholder
  - tier/category
  - location
  - key majors
  - admission condition
  - tuition range or “contact for details”
- Major spectrum:
  - Music
  - Content/media
  - Performing arts
  - New industry fields, such as esports, game, computer science, animation

Content caution:

- Official partnership claims require client confirmation.
- If not confirmed, use neutral wording such as “target universities” or “university options” instead of “official partners.”

### 9.4 Tuition

Purpose: answer cost concerns clearly for parents.

Required sections:

- Tuition transparency hero
- Effective tuition comparison chart:
  - Seoul full tuition
  - regional full tuition
  - TOPIK 5 scholarship scenario
  - TOPIK 6 scholarship scenario
- University tuition table
- Scholarship cards:
  - TOPIK 5
  - TOPIK 6
  - GKS-U
  - practical excellence scholarship, if confirmed
- Monthly living cost comparison
- ROI scenarios:
  - conservative
  - base
  - aggressive
- CTA for personalized cost simulation

Content caution:

- Tuition, scholarship, living cost, exchange rate, and ROI values must be verified before production.
- If values remain unverified, keep them as sample scenarios in internal data only.

### 9.5 Application

Purpose: explain the application timeline and reduce anxiety.

Required sections:

- 10-month preparation roadmap
- Milestone timeline:
  - T-10 months, language school registration and assessment
  - T-6 months, university selection and portfolio
  - T-4 months, document submission and TOPIK
  - T-3 months, interview/practical test and results
  - T-1 month, D-2 visa
  - T-0.5 month, dormitory and entry
- 8-step process:
  - free consultation
  - pre-assessment
  - university selection
  - document preparation
  - submission/application
  - interview/practical test
  - admission/visa
  - entry/settlement
- Required document checklist:
  - 11 common documents
  - 2 arts-specific documents
- D-2 visa notes
- Korean-language beginner admission options
- CTA for document/application support

### 9.6 Faculty

Purpose: build credibility through expert instruction and network.

Required sections:

- Faculty hero
- Three expert types:
  - university professor
  - K-pop producer
  - idol/stage trainer
- Representative consultant network:
  - university network
  - Korean arts/entertainment industry experience
  - 1:1 management for premium package

Content caution:

- Names, portraits, bios, professor status, producer credits, and trainer claims require permission and verification before publication.

### 9.7 Majors & Career

Purpose: connect arts study abroad to practical career outcomes.

Required sections:

- Major and career hero
- Major grid:
  - media
  - broadcasting/video
  - music
  - performing arts
  - design
  - management
  - tourism
  - beauty
  - esports
  - computer science
  - animation
- Graduate career distribution chart:
  - return to China
  - stay in Korea
  - third-country path
- Korea vs China starting salary comparison
- Highlight growth fields:
  - games
  - esports
  - K-pop
  - content/media

Content caution:

- Salary and career distribution claims must be backed by approved source data or softened into qualitative copy.

### 9.8 Campus Life

Purpose: show concrete living cost and daily life planning.

Required sections:

- Campus life hero
- Seoul vs regional comparison:
  - monthly living cost
  - part-time job opportunity
  - industry access
  - foreigner housing contract availability
- Housing comparison:
  - dormitory
  - studio
  - gosiwon
  - boarding house
  - shared housing
- Typical housing transition path:
  - year 1 dormitory
  - year 2 dormitory extension
  - year 3 studio
  - year 4 studio/shared housing
- Part-time work rules:
  - semester limit
  - vacation rule
  - minimum wage
- Monthly spending scenarios

Content caution:

- Legal work-hour rules, minimum wage, housing costs, and contract success rates must be updated for the production year.

### 9.9 Students

Purpose: show student outcomes and ongoing activity.

Required sections:

- Student cases hero
- Student case grid:
  - anonymous student name
  - region/province
  - year
  - university/major
  - preparation path
  - scholarship/admission result if verified
- Student activity records:
  - performance video placeholder
  - portfolio thumbnail
  - award proof
  - activity photo
- CTA to program consultation

Content caution:

- Public student cases require consent.
- Images should be blurred/mosaicked or anonymized unless explicit permission exists.

### 9.10 News

Purpose: create an activity archive with low maintenance cost.

Required sections:

- News/activity archive hero
- Category tabs:
  - all
  - China-Korea music exchange
  - master class
  - performances/projects
- News list with:
  - date
  - category
  - title
  - detail link

Operational rule:

- Keep updates manageable, around 1 to 2 selected activities per month.
- If backend/CMS is not ready, use static data.

### 9.11 Services

Purpose: summarize what KISAS handles for students and parents.

Required sections:

- Services hero
- Five services:
  - free consultation
  - custom plan
  - document support
  - visa support
  - post-arrival support
- Package comparison table:
  - 1-month trial
  - 3-month intensive
  - 6-month regular
  - 1-year premium
- Rows:
  - consultation
  - custom plan
  - document support
  - visa support
  - post-arrival support
  - practical coaching
- CTA to package consultation

### 9.12 Contact

Purpose: provide fast contact channels.

Required sections:

- Contact hero focused on WeChat and center visit
- China study abroad center block:
  - address placeholder
  - phone placeholder
  - business hours
  - map placeholder
- WeChat/SNS block:
  - WeChat ID
  - Xiaohongshu
  - Douyin
  - QR placeholder
- Online inquiry form:
  - name
  - phone or WeChat
  - target major
  - preferred date
  - message
  - submit

### 9.13 Apply

Purpose: dedicated high-conversion consultation application page.

Required sections:

- Strong CTA hero
- Application form:
  - name
  - phone or WeChat
  - target major
  - preferred consultation date
  - preferred package
  - message
  - submit
- WeChat QR fallback
- Response expectation: next business day

Frontend state requirements:

- empty state
- validation errors
- loading state
- success state
- failed submission state

## 10. Core User Flows

### Flow A: Parent evaluating credibility and cost

1. Home
2. Universities
3. Tuition
4. Campus Life
5. Students
6. Apply

### Flow B: Student checking fit

1. Home
2. Program
3. Majors & Career
4. Application
5. Apply

### Flow C: User from social channel

1. Contact or Apply
2. Program
3. Services
4. WeChat/online inquiry

### Flow D: Trust-building flow

1. Home
2. Faculty
3. Students
4. News
5. Contact

## 11. Localization Requirements

### Languages

- English: default
- Chinese: secondary
- Korean: internal reference only

### Implementation Guidance

- Keep UI strings in locale dictionaries, not hardcoded across components.
- Split locale dictionaries by page, for example `src/i18n/pages/home.ts`, instead of accumulating all copy in one large file.
- Keep shared locale configuration in `src/i18n/config.ts`.
- English and Chinese should share the same page structure and component layout.
- Avoid copy that only works in Korean cultural context.
- Keep forms, validation messages, SEO metadata, navigation, CTA labels, and footer localized.
- If content is not translated yet, use explicit placeholder strings in the locale file, not mixed-language production UI.
- Treat line breaks as part of localized content when they affect design. Use structured fields such as `titleLines`, `labelLines`, or arrays of inline text segments instead of relying on ad hoc `\n`, `<br />`, or CSS wrapping inside components.
- Components should render responsive line breaks from locale data and remain robust when Chinese copy is shorter or longer than English copy.
- Avoid fixed-height text containers unless the copy length is controlled for both English and Chinese.

### SEO Language Rules

- English pages should have English `title`, `description`, Open Graph, and canonical metadata.
- Chinese pages should have Chinese `title`, `description`, Open Graph, and `hreflang` alternates.
- Default route should resolve to English.

## 12. Content Model Draft

Use static data first, preferably under `src/data` or `src/content`. API adapters can replace the data source later.

### University

- `slug`
- `name`
- `displayName`
- `category`
- `tier`
- `location`
- `logo`
- `isOfficialPartner`
- `isVerified`
- `majors`
- `admissionRequirements`
- `tuitionRange`
- `scholarshipNotes`

### ProgramPackage

- `slug`
- `name`
- `duration`
- `summary`
- `recommendedFor`
- `includedServices`
- `isPrimary`

### TuitionScenario

- `slug`
- `label`
- `tuition`
- `livingCost`
- `scholarship`
- `totalCost`
- `roiEstimate`
- `isVerified`

### Scholarship

- `slug`
- `name`
- `benefit`
- `requirements`
- `notes`
- `isVerified`

### ApplicationStep

- `step`
- `title`
- `summary`
- `timing`
- `requiredDocuments`

### FacultyProfile

- `slug`
- `name`
- `role`
- `bio`
- `image`
- `isPublic`
- `isVerified`

### Major

- `slug`
- `name`
- `category`
- `relatedCareers`
- `portfolioRequirements`
- `recommendedUniversities`

### CampusCost

- `slug`
- `cityType`
- `housingType`
- `monthlyRent`
- `monthlyLivingCost`
- `notes`
- `isVerified`

### StudentCase

- `slug`
- `anonymousName`
- `province`
- `year`
- `university`
- `major`
- `preparationPeriod`
- `outcome`
- `story`
- `image`
- `hasConsent`
- `isVerified`

### NewsItem

- `slug`
- `date`
- `category`
- `title`
- `excerpt`
- `body`
- `image`
- `isPublished`

### Service

- `slug`
- `name`
- `summary`
- `includedInPackages`

### Inquiry

- `name`
- `phoneOrWechat`
- `targetMajor`
- `preferredDate`
- `preferredPackage`
- `message`
- `locale`
- `sourcePage`
- `privacyAccepted`

## 13. Frontend Implementation Principles

- Keep the page structure faithful to the wireframe.
- Use simple static pages first.
- Add abstractions only when the same section pattern repeats across pages.
- Keep data separate from presentation so backend/API replacement is easy.
- Use semantic HTML for tables, forms, headings, and navigation.
- Use shadcn/ui only for components that are actually needed.
- Use Tailwind CSS v4 and existing shadcn preset tokens.
- Do not hardcode dummy facts directly into components. Put them in data files with `isVerified: false`.
- Use stable responsive dimensions for cards, charts, tables, and form controls.

## 14. SCSS and Design Styling Rules

The project should use Tailwind CSS for layout speed and SCSS for page-specific design control. SCSS is mainly for Figma-derived visual values that need to be adjusted consistently across a page or across repeated semantic elements.

### File Structure

- Create one page SCSS file per route/page.
- Use route-oriented names that match the page URL:
  - `/` -> `src/styles/pages/home.scss`
  - `/program` -> `src/styles/pages/program.scss`
  - `/universities` -> `src/styles/pages/universities.scss`
  - `/majors-career` -> `src/styles/pages/majors-career.scss`
- Localized pages must share the same page SCSS as the English page. Do not create duplicate SCSS files for `/zh` unless the layout truly differs by locale.
- Shared design primitives should live in `src/styles/common.scss`.
- Shared SCSS helpers should live in `src/styles/_mixins.scss`.
- Page SCSS files should be imported through one central SCSS entry so global import order stays predictable.

### Section Class Naming

- Every major page section must have a semantic section class.
- Section class names should combine the page name and section name.
- Examples for Home:
  - `.home-hero`
  - `.home-why-kisas`
  - `.home-universities`
  - `.home-roi`
  - `.home-students`
  - `.home-final-cta`
- The section class should exist on the root element of that section and should also be represented in the page SCSS file.
- Avoid generic page-level classes such as `.section-1`, `.blue-area`, or `.content-box`.

### Tailwind and SCSS Responsibilities

- Implement responsive layout, flex/grid behavior, spacing utilities, visibility, and breakpoint changes with Tailwind first.
- Use SCSS for:
  - section-specific Figma visual tuning
  - fluid `padding`, `margin`, and `font-size`
  - semantic typography rules
  - repeated design treatments that need centralized adjustment
  - edge cases that are awkward or unclear in Tailwind
- If SCSS handles a responsive exception, keep that rule inside the relevant page section block.
- Do not split the same visual rule between Tailwind and SCSS without a clear reason.

### Fluid Clamp Mixin

Use an SCSS clamp helper based on the approach in Christian May's “Easy CSS Clamp SCSS Mixin” article:

- Source reference: `https://dev.to/christianmay21/easy-css-clamp-scss-mixin-1225`
- Purpose: calculate a `clamp()` value that scales linearly between a minimum viewport width and maximum viewport width.
- Unit rule: viewport widths must use the same unit, and min/max size values must use the same unit.
- The helper should be implemented once in `src/styles/_mixins.scss`.
- Use it for section `padding`, `margin`, and `font-size` values derived from Figma.

Recommended helper shape:

```scss
@use "sass:math";

@function fluid-clamp($min-vw, $max-vw, $min-value, $max-value) {
  $slope: math.div($max-value - $min-value, $max-vw - $min-vw);
  $intercept: $min-value - $slope * $min-vw;

  @return clamp(
    #{$min-value},
    calc(#{$intercept} + #{$slope * 100}vw),
    #{$max-value}
  );
}

@mixin fluid-prop(
  $property,
  $min-value,
  $max-value,
  $min-vw: 390px,
  $max-vw: 1440px
) {
  #{$property}: fluid-clamp($min-vw, $max-vw, $min-value, $max-value);
}
```

Usage example:

```scss
.home-hero {
  @include fluid-prop(padding-block, 96px, 180px);

  h1.home-hero-title {
    @include fluid-prop(font-size, 44px, 96px);
  }
}
```

### Common Semantic Design Rules

- Code the Figma design semantically instead of copying absolute-positioned generated code.
- Register reusable semantic typography and component treatments in `common.scss` so they can be adjusted globally.
- Use common classes for repeated elements, and combine them with section-specific classes when a page needs local tuning.
- Example pattern:

```scss
h2.section-title {
  @include fluid-prop(font-size, 36px, 80px);
  line-height: 1.1;
}

h2.home-section-title {
  color: var(--color-primary);
}
```

- Components should render semantic HTML such as `section`, `header`, `nav`, `h1`, `h2`, `p`, `ul`, `table`, and `form`.
- SCSS should reinforce the semantic structure rather than replace it with purely visual class names.

## 15. Design Direction

Wireframe design language:

- Clean premium education site
- White and light gray sections
- Deep navy accent
- Rounded cards and tables
- Sticky glass-like header
- Repeated CTAs without feeling aggressive
- Data-forward trust building: charts, tables, timelines, package comparisons

Production design should preserve:

- calm premium tone
- clear numeric comparison sections
- strong parent-facing credibility
- easy scanning for Chinese users
- restrained visual style, not a flashy academy look

Avoid:

- exaggerated claims
- unverified logos or school marks
- stock-photo-heavy generic education design
- cluttered marketing banners
- Korean-only copy in production UI

## 16. Accessibility Requirements

- Header nav and mobile menu must be keyboard accessible.
- Forms require labels, validation messages, and focus states.
- Tables and charts need accessible text summaries.
- CTA contrast must pass basic readability checks.
- Images need meaningful alt text or explicit decorative treatment.
- Language switcher must be accessible and clear.

## 17. Responsive Requirements

- Mobile: 360px and up
- Tablet: 768px and up
- Desktop: 1280px and up
- Tables must not overflow awkwardly on mobile. Use horizontal scroll or card conversion.
- Header nav collapses under mobile breakpoint.
- Apply/Contact forms must remain easy to complete on mobile.
- Responsive layout should be implemented with Tailwind breakpoints first. SCSS media queries are reserved for section-specific design exceptions.

## 18. Backend Boundary

Frontend owns:

- static/mock data
- locale dictionaries
- form UI and client-side validation
- loading/success/error UI states
- API adapter stubs
- display of verified/unverified data flags in development
- inquiry request payload shape used by Contact and Apply forms until the backend contract is finalized

Backend owns:

- actual inquiry submission API
- WeChat or CRM integration
- admin/CMS
- data validation and persistence
- verified content source management
- security, rate limit, spam protection

### Inquiry API Draft

Contact and Apply forms should share one frontend payload shape until the backend developer provides the final API contract.

Required payload fields:

- `name`
- `phoneOrWechat`
- `targetMajor`
- `preferredDate`
- `preferredPackage`
- `message`
- `locale`
- `sourcePage`
- `privacyAccepted`

Frontend behavior before backend connection:

- Validate required fields on the client.
- Show loading, success, and failed submission states.
- Keep the submit adapter isolated, for example under `src/lib/api` or `src/services`.
- Do not wire forms directly to third-party services from page components.

## 19. Verification Requirements

Before considering frontend work complete:

- `npm run lint` passes
- `npm run build` passes
- `npm run harness:smoke` passes
- `npm run harness:report` runs
- English default routes render
- Chinese routes render
- no Korean text appears in production UI except intentionally hidden comments or internal dev data
- mobile header and apply form work
- tables/charts are readable on mobile
- CTA links route to `/apply` or localized equivalent
- unverified claims are not presented as confirmed
- page SCSS files follow the route-based naming rule
- section root elements have semantic section classes matching the page SCSS

## 20. Milestones

### M1: Localization Foundation

- Define English and Chinese route strategy
- Add locale dictionaries
- Set English as default
- Add language switcher
- Update metadata per locale

### M2: Core Marketing Pages

- Home
- Program
- Universities
- Tuition
- Application

### M3: Trust and Decision Pages

- Faculty
- Majors & Career
- Campus Life
- Students
- News

### M4: Conversion Pages

- Services
- Contact
- Apply
- Inquiry form states
- WeChat QR placeholders

### M5: QA and Vercel Test Deployment

- Responsive QA
- Accessibility pass
- Build verification
- Vercel preview deployment
- Backend integration TODO list

## 21. Open Questions

- Final English and Chinese brand copy
- Approved English brand name and Chinese brand name
- Whether “official partner university” can be used publicly
- Verified list of universities
- Verified tuition, scholarship, ROI, salary, and living cost numbers
- Approved faculty names, photos, and bios
- Approved student stories and consent status
- Real WeChat ID, QR code, phone number, address, Xiaohongshu, Douyin
- Whether all 13 pages launch in phase 1 or some pages stay hidden until content approval
- Backend inquiry API shape and spam protection requirements
