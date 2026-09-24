# Concept 01 — Editorial Engineering

## Design Status

- Status: `SELECTED`
- Selection: `APPROVED VISUAL DIRECTION`
- Implementation: `NOT IMPLEMENTED`
- Decision date: `24 September 2026`
- Primary visual direction: `Concept 01 — Editorial Engineering`

Carlos explicitly selected Concept 01 on 24 September 2026. Concepts 02 and 03 remain historical alternatives and are not selected. This document describes the approved visual direction; it does not define final design tokens, implementation details, components, or production-ready copy.

## Purpose

Editorial Engineering is a visual direction for the Carlos Reyes developer portfolio. It combines:

- premium editorial typography
- modern software engineering presentation
- a dark atmospheric visual language
- restrained geometry
- strong project imagery
- minimal content density
- intentional motion

The portfolio must not resemble:

- a generic developer template
- hacker or Matrix aesthetics
- gaming UI
- cyberpunk neon overload
- a résumé converted into HTML

## Identity

- Public name: Carlos Reyes
- Title: Full Stack Developer & Systems Engineer
- Hero positioning sentence: “Desarrollo aplicaciones web completas y la infraestructura necesaria para llevarlas a producción de forma segura y mantenible.”
- Primary hero action: `Ver proyectos`
- Secondary hero action: `Descargar CV`

## Visual Foundation

### Atmosphere

- near-black background
- off-white typography
- restrained cool accent possibilities
- subtle depth
- high contrast
- generous negative space

Exact color tokens are intentionally not finalized in this concept.

### Typography Direction

- Display: Cinzel-style serif display typography.
- Editorial: Cormorant Garamond-style editorial serif.
- UI / technical: a clean modern sans-serif; the third font is not selected yet.

Fonts must not be downloaded or implemented during this documentation checkpoint.

## Rejected Visual Language

The following patterns are explicitly prohibited:

- `✦`
- stars
- sparkles
- sparkle glyphs
- Matrix/code rain
- hacker clichés
- excessive neon
- skill progress bars
- percentage skill ratings
- generic glassmorphism everywhere
- visual clutter
- excessive floating technology logos

## Geometry and Atmosphere

Permitted exploration includes:

- oversized geometric circles
- partial circles extending beyond the viewport
- thin vertical dividers
- thin horizontal rules
- subtle diamond or geometric ornaments
- extremely restrained particles
- subtle atmospheric fog
- subtle grain/noise
- low-opacity depth layers

Geometry should support composition and hierarchy, not become decoration for its own sake.

## Motion

### Motion Personality

- slow
- controlled
- elegant
- cinematic but restrained

### Potential Behaviors

- title reveal
- tracking transition
- geometry breathing or pulse
- slow atmospheric movement
- subtle project-image reveals
- small scroll transitions

Avoid constant aggressive animation, excessive parallax, distracting cursor effects, and performance-heavy particle systems.

Future implementation must support `prefers-reduced-motion`.

## Desktop Hero Direction

The hero should occupy approximately the first viewport and remain concise.

### Content Hierarchy

1. Carlos Reyes
2. Full Stack Developer & Systems Engineer
3. Positioning sentence
4. `Ver proyectos`
5. `Descargar CV`

`CARLOS REYES` should be the dominant visual element.

Explore an asymmetrical/editorial composition instead of assuming perfect center alignment.

### Hero Exclusions

The hero should not contain:

- a long biography
- an exhaustive technology list
- employment history
- skill ratings
- decorative star or sparkle glyphs

The background may contain large circles, fine rules, subtle geometric ornaments, and atmospheric depth.

## Mobile Hero Direction

Mobile must not simply scale the desktop composition down. It requires a dedicated composition using the same visual language.

One possible exploration is:

```text
FULL STACK DEVELOPER
& SYSTEMS ENGINEER

CARLOS
REYES

short positioning copy

[ VER PROYECTOS ]

DESCARGAR CV
```

Potential characteristics:

- name split across lines
- oversized cropped background circle
- tighter but intentional spacing
- strong vertical rhythm
- one dominant primary CTA
- secondary action visually quieter
- comfortable touch targets

This is a direction for exploration, not an implementation prescription.

## Featured Work

Featured Work has a fixed order:

1. Frío Puro
2. Sellers
3. V.A.U.L.T.
4. ARCH

Avoid a generic four-card grid. Projects should feel like editorial feature stories or portfolio covers.

Each feature may use:

- large project imagery
- oversized project name
- project index
- concise purpose
- small technology list
- status where useful
- restrained metadata

Project imagery should receive significant visual weight. A possible desktop relationship is approximately 60–70% visual area and 30–40% supporting information, but this is not a fixed implementation requirement.

### Featured Project Personality

- 01 — Frío Puro: complete development plus production deployment.
- 02 — Sellers: collaborative production B2B project.
- 03 — V.A.U.L.T.: software architecture and complex application.
- 04 — ARCH: personal product, financial application, and engineering decisions.

Do not put full case-study copy on the home.

## Tech Stack

The technology section should be typography-led rather than a wall of logos.

Possible categories:

- Frontend
- Backend
- Databases
- Infrastructure
- Security / Authentication
- Automation

Use only technologies confirmed in the professional content inventory. Do not use skill percentages, skill rankings, or “expert” labels.

Networking should not dominate this section.

## Experience

Experience on the home must remain very compact.

Items:

- Importaciones a México
- Laboratorios Chontalpa
- Soriana
- SICCOMS

Prioritize company, role, date, and a small technology/context line where useful. Detailed responsibilities remain in the downloadable CV.

## More Work

More Work has a fixed order:

1. P.U.L.S.E.
2. IMXTime
3. YollotDP
4. Cadebot L100 / MiRobot

These projects should receive less visual weight than Featured Work.

Potential presentations include a horizontal list, compact editorial cards, or an indexed project list. Do not repeat the Featured Work layout exactly.

All publication and privacy restrictions in the content inventory remain authoritative.

## Infrastructure

This should be a short section that visually reinforces work beyond application code, not a second technical résumé.

Confirmed themes may include:

- Linux
- SSH
- Docker
- Docker Compose
- Traefik
- Nginx
- PHP-FPM
- DNS
- Vercel
- deployments

Hetzner must not be mentioned as Carlos’s experience.

## Experience / About Relationship

The home is concise. A longer personal introduction belongs at:

`/sobre-mi`

The home should link to `Sobre mí` without containing a large biography section.

## Final CTA

The closing section should feel intentionally large and simple, with a future direction around conversation, collaboration, or opportunity.

Final copy is not defined yet.

## Responsive Philosophy

Desktop and mobile are two compositions of the same visual language.

Mobile requirements:

- intentional typography
- no horizontal overflow
- strong project imagery
- usable navigation
- strong primary action
- reduced visual complexity when needed
- performant motion
- comfortable spacing
- touch-friendly controls

## Accessibility and Performance

Future implementation must consider:

- semantic HTML
- keyboard navigation
- visible focus states
- adequate contrast
- `prefers-reduced-motion`
- responsive images
- minimal JavaScript
- performance budgets
- no unnecessary animation libraries

## Unresolved Visual Decisions

- exact color tokens
- the third UI/technical font
- final visual direction after comparison with Concepts 02 and 03
- final desktop composition
- final mobile composition
- image treatment and asset selection
- final motion system
- final CTA and contact copy
