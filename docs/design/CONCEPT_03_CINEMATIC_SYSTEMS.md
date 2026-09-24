# Concept 03 — Cinematic Systems

## Design Status

- Status: `NOT SELECTED`
- Selection: `REJECTED AS PRIMARY DIRECTION`
- Implementation: `NOT IMPLEMENTED`
- Comparison required against: Concept 01 — Editorial Engineering; Concept 02 — Technical Monolith
- No visual concept is approved yet.

This document is historical design exploration. It was not selected as the primary direction on 24 September 2026. It does not implement UI, select fonts, define final tokens, or create components.

## Purpose

Cinematic Systems is the most immersive visual direction of the three concepts while remaining:

- professional
- performant
- technically credible
- restrained
- readable
- mobile-first

The portfolio should feel like a sequence of carefully composed visual scenes rather than a grid of conventional website sections.

This does not mean a movie website, gaming website, excessive animation, a 3D demo, a WebGL showcase, or visual effects for their own sake.

## Core Idea

Use typography, project imagery, scale, depth, cropping, negative space, slow transitions, and subtle atmosphere to create rhythm.

Each major project should receive its own moment while the result remains a professional developer portfolio.

## Identity

- Public name: Carlos Reyes
- Title: Full Stack Developer & Systems Engineer
- Hero positioning sentence: “Desarrollo aplicaciones web completas y la infraestructura necesaria para llevarlas a producción de forma segura y mantenible.”
- Primary hero action: `Ver proyectos`
- Secondary hero action: `Descargar CV`

## Visual Foundation

Possible atmosphere:

- deep near-black background
- warm or neutral off-white text
- very restrained cool accent
- soft gradients
- subtle light falloff
- low-opacity geometric depth
- gentle atmospheric haze
- image-led compositions
- large typography
- strong contrast

The exact palette is intentionally not finalized.

## Typography

Typography should be highly expressive and image-led.

- Display: large refined serif or high-character display face.
- UI: clean sans-serif.
- Technical meta: optional subtle mono or semi-mono.

The display direction may borrow the sophistication of Concept 01 while feeling more spatial. Final typefaces must not be selected or downloaded yet.

## Rejected Visual Language

Explicitly reject:

- `✦`
- stars
- sparkles
- glitter
- Matrix/code rain
- fake terminals
- hacker clichés
- cyberpunk overload
- aggressive neon
- glitch effects
- gaming HUD
- excessive blur
- generic glass cards everywhere
- constant parallax
- heavy WebGL
- fake 3D objects
- autoplay video backgrounds
- large particle engines
- scroll-jacking

## Depth and Atmosphere

Permitted visual devices include:

- large cropped circles
- oversized arcs
- soft radial gradients
- restrained atmospheric fog
- layered project imagery
- foreground/background separation
- subtle grain
- image masks
- controlled overlap
- off-screen cropping

Atmosphere must remain subtle enough that text always wins.

## Desktop Hero Direction

The hero should feel spacious and cinematic.

Conceptual composition:

```text
FULL STACK DEVELOPER
& SYSTEMS ENGINEER


                         CARLOS
                         REYES


positioning sentence


VER PROYECTOS                         DESCARGAR CV
```

This is conceptual only. Potential characteristics include:

- oversized name
- off-center composition
- large dark negative space
- geometric form behind or around the name
- slow initial reveal
- restrained atmospheric light

Do not fill the hero with metadata.

## Mobile Hero Direction

Mobile should feel intentionally cinematic within a narrow screen, not like a scaled-down desktop layout.

Possible conceptual composition:

```text
FULL STACK
DEVELOPER

CARLOS
REYES

& SYSTEMS ENGINEER

short positioning sentence

[ VER PROYECTOS ]

DESCARGAR CV
```

Potential treatment:

- typography occupying much of the viewport
- cropped circle or arc behind the title
- minimal background movement
- one clear dominant CTA
- reduced atmospheric layers
- no horizontal overflow
- no tiny metadata

## Scroll Rhythm

The home should feel like a sequence:

```text
INTRO
→ PROJECT
→ PROJECT
→ PROJECT
→ PROJECT
→ TECHNOLOGY
→ EXPERIENCE
→ MORE WORK
→ INFRASTRUCTURE
→ CONTACT
```

Do not implement scroll-jacking. Native scrolling must remain intact. Motion may support transitions between visual moments, but content order and accessibility remain normal.

## Featured Work

Fixed order:

1. Frío Puro
2. Sellers
3. V.A.U.L.T.
4. ARCH

This concept should give Featured Work the greatest visual emphasis of the three concepts.

Avoid cards. Prefer:

- large images
- full-width or near-full-width compositions
- oversized names
- controlled overlap
- cinematic cropping
- concise metadata

Each project should feel like a visual chapter.

### Featured Project Personality

#### 01 — Frío Puro

Primary message: Carlos can take a product from development to production.

Possible visual emphasis:

- full website screenshot
- CMS/product imagery if available
- strong project name
- restrained metadata

Possible metadata: `ASTRO`, `TYPESCRIPT`, `MYSQL`, `DOCKER`, `TRAEFIK`, only when supported by the confirmed inventory.

#### 02 — Sellers

Primary message: real collaborative B2B production work.

Visual treatment may differ from Frío Puro through a wide browser/product composition, editorial split layout, or layered screenshots. Respect shared contribution.

#### 03 — V.A.U.L.T.

Primary message: complex software engineering and architecture.

Potential imagery includes application UI, inventory/admin screens, and structured interface views. Public presentation stays high-level and must not expose sensitive/internal details.

Status: `IN DEVELOPMENT`.

#### 04 — ARCH

Primary message: Carlos builds his own software products.

Potential visual language includes dashboard screenshots, financial UI, large application details, and close crops.

Status: `IN DEVELOPMENT`.

Do not imply public SaaS users.

## Project Transitions

Potential motion includes:

- image mask reveal
- subtle scale from 0.98 to 1
- opacity transitions
- text clipping
- line reveals
- background tone shifts
- geometry repositioning

Avoid spinning elements, extreme zooms, long pinned scroll sections, forced scroll sequences, and animation that delays access to content.

## Tech Stack

After the highly visual projects, Tech Stack should become quieter.

Possible direction: large typographic technology names moving through a restrained layout.

Categories:

- Frontend
- Backend
- Databases
- Infrastructure
- Security / Authentication
- Automation

Do not use rankings, percentages, skill bars, or a logo cloud as the primary treatment.

## Experience

Keep employment highly concise:

- Company
- Role
- Date
- Optional small technology line

The visual treatment could use a large year, company typography, and simple horizontal transitions. No extensive job descriptions; detailed information remains in the CV.

## More Work

Fixed order:

1. P.U.L.S.E.
2. IMXTime
3. YollotDP
4. Cadebot L100 / MiRobot

After the cinematic Featured Work, More Work should become intentionally simpler.

Possible presentations include a large typographic list, image-on-hover on desktop, or a compact stacked list on mobile. Information must not require hover to be accessible. Respect all privacy rules.

## Infrastructure

Possible conceptual titles:

```text
BEYOND
THE CODE
```

or:

```text
FROM CODE
TO PRODUCTION
```

Do not finalize heading copy yet.

Communicate visually:

```text
development
→ deployment
→ production
```

Confirmed themes include Linux, SSH, Docker, Docker Compose, Traefik, Nginx, PHP-FPM, DNS, Vercel, and deployments. Do not imply they are all used together in every project. Never mention Hetzner as Carlos’s experience.

## About

The home remains concise. The dedicated page is:

`/sobre-mi`

On the home, About may receive only a subtle visual link or teaser.

## Final CTA

The final CTA should feel like the closing scene: very little content, large typography, and a direction around professional contact, collaboration, or opportunities.

Final copy is not defined yet.

## Motion Personality

Motion should feel:

- slow
- soft
- confident
- deliberate

Potential future implementation may use CSS transitions, `IntersectionObserver`, and minimal JavaScript. Animation libraries should be used only when a real design requirement justifies them; do not add GSAP by default merely because it exists in Carlos’s stack.

## Mobile Project Experience

On mobile, Featured Work may use a rhythm such as:

```text
PROJECT INDEX
PROJECT NAME

large image

short purpose
technology subset

NEXT PROJECT
```

Each project should have enough space to feel important. No horizontal carousels are required for primary content, and no hover-dependent behavior should be essential.

## Navigation

Navigation should be visually quiet:

- Desktop: minimal navigation that does not compete with imagery.
- Mobile: purpose-built menu, potentially a full-screen dark navigation with large links.

Do not use stars, sparkles, or terminal aesthetics.

## Accessibility

Future implementation must preserve:

- semantic reading order
- keyboard access
- focus states
- sufficient contrast
- reduced-motion support
- native scrolling
- no content hidden only behind animation
- no hover-only essential information

## Performance

This concept has the highest visual-performance risk. Strict principles:

- responsive images
- AVIF/WebP where appropriate
- lazy-load below-the-fold imagery
- limit decorative layers
- avoid heavy JavaScript
- avoid WebGL unless absolutely justified
- prefer CSS effects
- avoid autoplay background video
- avoid massive image payloads
- preserve strong Core Web Vitals

Cinematic does not mean heavy.

## How This Differs from Concept 01

- Concept 01: editorial typography and publication-like composition.
- Concept 03: more spatial, image-led, immersive, and chapter-based.

Concept 03 may share refined typography with Concept 01, but should use imagery and depth much more aggressively.

## How This Differs from Concept 02

- Concept 02: grid-led, architectural, systematic, and metadata-oriented.
- Concept 03: spatial, atmospheric, image-led, and less visibly structured.

Technical credibility comes from projects and content, not visible grid metadata.

## Unresolved Decisions

- exact palette
- final fonts
- atmospheric intensity
- image assets
- screenshot treatment
- hero composition
- mobile composition
- amount of project overlap
- motion intensity
- section transition style
- final navigation
- final CTA copy
