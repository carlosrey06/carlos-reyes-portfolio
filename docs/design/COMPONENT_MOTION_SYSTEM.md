# Carlos Reyes Portfolio — Component & Motion System

## Status

- Component language: `WORKING SYSTEM APPROVED`
- Navigation visual language: `WORKING SYSTEM APPROVED`
- Project imagery: `WORKING SYSTEM APPROVED`
- Motion: `WORKING SYSTEM APPROVED`
- Implementation: `NOT IMPLEMENTED`

This document defines the working visual and interaction language for the selected Editorial Engineering direction. It is design documentation only. It does not implement UI, select a component library, download fonts, or require a motion or page-transition dependency.

The system should feel precise, elegant, restrained, editorial, technological, mature, and premium. It must not become a generic SaaS component library. Typography, spacing, fine rules, controlled surfaces, large imagery, and hierarchy should do more work than repeated containers.

## Component Philosophy

- Do not make every content item a rounded card.
- Prefer editorial composition, spacing, typography, imagery, and fine rules over excessive boxes.
- Use surfaces only when they clarify grouping or interaction.
- Keep controls unmistakably interactive without making them visually loud.
- Preserve the selected dark-first Editorial Engineering identity across all states.

## Buttons and Links

### Primary CTA

The primary CTA is `Ver proyectos`.

- Blue-led, high-contrast treatment for dark mode.
- Restrained shape with a default working radius of approximately `8px`.
- Working height: approximately `48–52px` on desktop and `50–54px` on mobile.
- Neutral system sans-serif, medium or semi-bold, with readable sizing.
- Default state uses a deep-blue background.
- Hover may use a slightly brighter blue or a restrained lift in contrast.
- Active state should become darker or visibly compressed.
- `:focus-visible` requires a clear cyan/blue ring.
- Do not use heavy glow, gradient overload, excessive shadow, or a pill shape by default.

### Secondary CTA

The secondary CTA is `Descargar CV`.

- Quieter than the primary CTA while remaining obviously interactive.
- May use a transparent or subtly elevated surface with a fine border, or an editorial text-link treatment.
- On mobile it should appear below the primary CTA or as a quieter full-width action, depending on prototype validation.
- It must never look disabled.

### Text Links

- Use text as the primary visual form.
- A subtle underline or fine rule may clarify interactivity.
- Blue/cyan emphasis is allowed without turning links into glowing effects.
- Hover may use a restrained underline expansion, opacity shift, or color transition.
- Avoid flashy motion and decorative icons on every link.
- Functional icons may later support external links or downloads where useful.

## Navigation

### Desktop Navigation

The working navigation language is quiet, compact, and integrated with the hero rather than enclosed in a bulky component.

Primary items:

- Proyectos
- Stack
- Experiencia
- Sobre mí
- Contacto

Utility action:

- `Descargar CV`

Possible composition includes the brand or name at the left, navigation in the center or right, and the CV action at the edge. A transparent treatment over the hero or a subtle dark surface after scrolling may be explored. Whether navigation is static, sticky, or changes background on scroll remains an implementation/prototype decision and is not finalized here.

Do not use a giant rounded glass bar, excessive container treatment, or a navigation layout that competes with the hero.

### Mobile Navigation

Mobile navigation requires a purpose-built composition, not a wrapped desktop navigation.

- Minimal top bar with a clear menu trigger.
- Full-screen or near-full-screen dark panel is allowed.
- Large, readable links with strong vertical rhythm.
- Include the CV action where it remains useful.
- Provide an obvious close action.
- Minimum touch target: `44px`; preferred working target: `48px` or larger.
- Do not use a terminal-like menu, tiny controls, cluttered icon bars, or overanimated transitions.

Mobile content must remain usable without hover or pointer precision.

## Section Labels

Section labels may be used sparingly for meaningful anchors such as `SELECTED WORK`, `EXPERIENCE`, and `TECHNOLOGIES`.

- Use the neutral system sans-serif in uppercase with controlled tracking.
- Meaningful numeric indices are allowed when they support hierarchy.
- Do not force an index onto every section.
- Never prefix labels with `✦`, stars, sparkles, or decorative symbols.

## Project Presentation

### Featured Work

Featured Work retains this fixed order:

1. Frío Puro
2. Sellers
3. V.A.U.L.T.
4. ARCH

Do not use a generic equal four-card grid. Each project should feel like an editorial feature story or portfolio cover, with large visual weight and concise supporting information.

Possible ingredients:

- project index when useful
- oversized project name
- concise purpose
- small technology subset
- production/development state when valuable
- contribution context when necessary
- large screenshot or project visual
- public/permitted link

Imagery should dominate the relationship between the visual and metadata. The home remains concise and must not become a full case study.

### More Work

More Work retains this fixed order:

1. P.U.L.S.E.
2. IMXTime
3. YollotDP
4. Cadebot L100 / MiRobot

These projects should receive less visual weight than Featured Work. Use an indexed row, editorial list, compact block, or minimal card treatment. Useful fields include the name, one-line purpose or type, a small stack subset, status where useful, and a public link when allowed. Do not repeat the large Featured Work layout.

### Experience and Stack

Experience should remain compact, using dates, company, role, and a small technology/context line where useful. Typography, spacing, and fine rules should do more work than large employer cards. Detailed responsibilities remain in the CV.

The technology section should remain typography-led, organized by meaningful categories. Avoid glowing badges, percentages, progress bars, and expertise labels. Restrained chips may be used selectively, not as the default language.

### Infrastructure

Infrastructure may use an elegant conceptual path such as:

```text
development → deployment → production
```

The supporting themes remain Linux, SSH, Docker, Docker Compose, Traefik, Nginx, PHP-FPM, DNS, Vercel, and deployments. Do not imply that every technology belongs to the same deployment, and do not mention Hetzner as Carlos’s experience.

## Project Imagery

- Use large, crisp, high-resolution responsive images with intentional crops.
- Integrate imagery into the composition through a subtle border, fine rule, small radius, edge-to-edge treatment, masked reveal, or partial grid break as appropriate.
- A restrained browser frame may be explored, but fake device mockups should not be used everywhere.
- Avoid excessive 3D framing, reflections, huge shadows, tiny screenshots, and stock imagery when real work is available.
- Preserve actual project colors and visual character. Do not recolor every screenshot blue or cyan.
- A dark surround, subtle gradient behind an image, edge shadow, or restrained tint is allowed only when it supports hierarchy without reducing authenticity.

Future implementation must use responsive images, appropriate dimensions, lazy loading below the fold, optimized formats, preserved aspect ratios, and layout-shift prevention. Hero and above-the-fold image strategy requires separate review.

## Surfaces, Borders, and Geometry

### Surfaces and Borders

- Primary surface: near-black.
- Elevated surface: a slightly lighter graphite used only when it clarifies grouping or interaction.
- Default borders and rules: `1px` subtle lines with low contrast.
- Use rules for image frames, section separation, navigation states, buttons, and list rows when useful.
- Gold borders are rare and preferably avoided unless a specific premium accent is justified.
- Do not use depth, blur, or glossy cards as the primary hierarchy mechanism.

### Geometric Language

Approved supporting geometry includes:

- circles
- partial circles
- arcs
- thin vertical lines
- thin horizontal lines
- restrained diamond or geometric forms

Geometry must remain background/supporting material. Do not place ornaments beside every heading. `✦`, stars, and sparkles are prohibited.

### Particles, Fog, and Grain

Particles must be very sparse, fog soft and subtle, and grain almost imperceptible. These effects must never reduce text contrast, create visual noise, hurt performance, or dominate mobile. Mobile should reduce or omit atmospheric layers where necessary.

## Interaction States

### Hover and Active

- Hover is subtle confirmation.
- Active is clear but restrained pressed or selected feedback.
- Project hover may use a restrained image scale of approximately `1.01–1.03`, rule emphasis, metadata opacity shift, or slight title movement.
- Do not use large movement, glitches, flashes, or heavy glow.
- Mobile must not depend on hover.

### Focus

Keyboard focus must be clearly visible for links, buttons, menu controls, and other interactive elements.

- Use a cyan- or blue-led outline/ring with sufficient contrast.
- Keep the focus indicator visible around the component shape.
- Never remove the outline without providing an equivalent replacement.

### Icons

Use icons only where functional, such as menu, close, external link, download, or a future theme toggle. Do not introduce an icon dependency in this checkpoint or add decorative icon clutter.

## Motion System

Motion should be slow, elegant, restrained, and deliberate. It must support hierarchy rather than decorate every element.

### Working Durations

- Fast: `150–220ms`
- Standard: `280–420ms`
- Slow: `700–1000ms`
- Hero/display reveal: `900–1400ms`

Not every animation should be slow. Prefer natural ease-out for entrances and smooth ease-in-out for atmospheric movement. Avoid bounce, overshoot, and cartoon-like easing by default. Exact CSS curves remain unresolved until implementation.

### Approved Motion Vocabulary

- hero title reveal
- section-level fade with small vertical movement
- image mask reveal
- rule expansion
- restrained typography clipping
- subtle geometry breathing or pulse
- very slow atmospheric drift
- small project-image reveal
- restrained hover state changes

Do not animate every text line independently. Prefer section-level rhythm.

### Hero Title Reveal

`CARLOS REYES` may use a restrained reveal based on:

- reduced initial opacity
- slight initial vertical translation
- wider initial letter-spacing
- transition to full opacity, `translateY(0)`, and final tracking

The title must become readable quickly. No dramatic movement or excessive tracking.

### Scroll and Page Behavior

- Use native browser scrolling.
- Do not use scroll-jacking or require long pinned sections.
- `IntersectionObserver` may later trigger modest reveals.
- CSS should handle simple transitions where possible.
- A future case-study route may use a restrained transition, but no SPA/page-transition framework is selected or required.

### Reduced Motion

`prefers-reduced-motion` is first-class.

When reduced motion is enabled:

- disable tracking animation
- remove large translate reveals
- stop atmospheric loops
- avoid image scaling
- show content immediately or with a near-instant opacity change

No essential content may depend on animation.

## Light Theme Compatibility

Although dark mode dominates, component language should conceptually survive light mode. Borders, buttons, text states, and focus indicators must remain transferable without depending on glow.

## Mobile Interaction Principles

Mobile must be evaluated as a dedicated composition:

- no hover dependency
- no pointer-precision dependency
- no tiny controls
- no essential horizontal project carousel
- vertical scrolling for primary content
- comfortable touch targets
- reduced decorative and atmospheric complexity when needed

## Unresolved Implementation Decisions

- final desktop navigation behavior: static, sticky, or scroll-reactive
- final mobile menu transition and panel composition
- exact CSS easing curves
- final button token values and contrast verification
- final image assets, crops, and above-the-fold loading strategy
- whether light mode will be implemented
- whether a restrained route transition is needed for case studies

## Next Checkpoint

`2.4 — Implementation Readiness Review`

The next checkpoint audits all design documents together before source code is touched. After approval, Phase 3 begins with Hero implementation, mobile-first.
