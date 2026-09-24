# Carlos Reyes Portfolio — Final Design Direction

## Selected Direction

- Direction: **Editorial Engineering**
- Decision date: **24 September 2026**
- Source concept: Concept 01 — Editorial Engineering
- Implementation status: Not implemented

Concept 02 — Technical Monolith and Concept 03 — Cinematic Systems remain historical explorations and are not selected as the primary direction. No hybrid direction is being created.

## Design Intent

The portfolio is a high-impact professional developer presentation, not a résumé rendered as HTML.

Primary feeling:

- premium
- editorial
- technological
- elegant
- restrained
- professional
- modern

The design should feel confident without becoming visually aggressive.

## Core Visual Language

The confirmed direction includes:

- near-black background
- off-white primary typography
- restrained cool accent
- generous negative space
- large typography
- editorial/asymmetrical composition
- subtle geometric circles
- partial/cropped circles
- fine vertical/horizontal rules
- restrained diamond/geometric ornaments
- subtle grain/noise
- very restrained atmospheric fog
- minimal particles where appropriate
- controlled depth

Geometry must support hierarchy rather than decorate empty space.

## Typography Direction

- Display reference: Cinzel-style serif typography.
- Editorial reference: Cormorant Garamond-style serif typography.
- UI / technical typography: clean modern sans-serif.

Final font families are not selected. Cinzel and Cormorant Garamond remain references until the typography-system checkpoint confirms exact fonts. Do not download or implement fonts yet.

## Hero

Priority order:

1. `CARLOS REYES`
2. `Full Stack Developer & Systems Engineer`
3. Positioning sentence
4. `Ver proyectos`
5. `Descargar CV`

Positioning sentence:

> Desarrollo aplicaciones web completas y la infraestructura necesaria para llevarlas a producción de forma segura y mantenible.

`CARLOS REYES` should be the strongest visual element. The direction is a large, asymmetrical editorial composition occupying approximately the first viewport, with substantial negative space, restrained geometric background, and subtle atmospheric depth.

Do not overload the hero with technologies, biography, employment history, metrics, badges, or long metadata.

## Mobile Hero

Mobile is a separate composition, not a scaled desktop layout.

Possible direction:

```text
FULL STACK DEVELOPER
& SYSTEMS ENGINEER

CARLOS
REYES

positioning sentence

[ VER PROYECTOS ]

DESCARGAR CV
```

Exact layout remains unresolved. Mobile must maintain strong vertical rhythm, a visually dominant CTA, reduced decorative complexity, comfortable touch targets, no horizontal overflow, and deliberate typography.

## Featured Work

Fixed order:

1. Frío Puro
2. Sellers
3. V.A.U.L.T.
4. ARCH

Featured projects should not use a generic equal-card grid. Use large project visuals, editorial composition, oversized names, concise technology subsets, restrained status/context, and generous spacing. Each project should feel important and distinct while the home remains concise.

## More Work

Fixed order:

1. P.U.L.S.E.
2. IMXTime
3. YollotDP
4. Cadebot L100 / MiRobot

These projects receive lower visual priority. Suitable directions include an indexed list, compact editorial cards, or restrained project rows. All publication and privacy rules remain authoritative.

## Tech Stack

The presentation should be typography-led, using categories such as:

- Frontend
- Backend
- Databases
- Infrastructure / Deployment
- Security / Authentication
- Automation

Avoid percentage ratings, progress bars, senior/expert labels, and giant logo clouds.

## Experience

Experience remains concise on the home. Show primarily company, role, date, and a small technology/context line where useful. Detailed responsibilities belong in the downloadable CV.

## Infrastructure

This is a short supporting section showing that Carlos works beyond application code and understands deployment and production environments.

Confirmed themes may include Linux, SSH, Docker, Docker Compose, Traefik, Nginx, PHP-FPM, DNS, Vercel, and deployments.

Do not turn this into a technical résumé. Never mention Hetzner as Carlos’s personal experience.

## About

Dedicated route:

`/sobre-mi`

The home should not contain a large biography.

## Motion

Motion should be slow, elegant, restrained, and deliberate. Potential motion includes text reveal, tracking transition, subtle geometry breathing, small image reveals, restrained scroll entrances, and subtle atmospheric movement.

Avoid scroll-jacking, aggressive parallax, WebGL by default, glitch, cursor gimmicks, heavy particle engines, and excessive animation. Motion must support `prefers-reduced-motion`.

## Explicitly Rejected

Do not use:

- `✦`
- stars
- sparkles or sparkle glyphs
- Matrix/code rain
- fake terminals
- hacker clichés
- gaming HUDs
- excessive neon or cyberpunk overload
- skill bars or percentage skills
- fake metrics
- excessive glassmorphism
- floating logo clutter

## Responsive Principle

Desktop and mobile are different compositions using the same visual system. Mobile must be designed intentionally, with a strong hierarchy, clear CTAs, comfortable touch targets, performant motion, and no desktop layout simply scaled down.

## Next Design Checkpoint

The next phase is not implementation.

### 2.3 — Visual System Definition

The next checkpoint must define and approve:

- exact color palette
- exact fonts
- typography scale
- spacing scale
- content widths
- border/rule system
- geometry rules
- motion tokens
- image treatment
- desktop layout grid
- mobile layout grid
- buttons / links
- navigation behavior

Implementation begins only after the visual system is approved.

