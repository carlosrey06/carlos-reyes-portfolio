# Carlos Reyes Portfolio — Visual System Foundation

## 1. Purpose

This document defines the visual-system direction for the portfolio before implementation. It establishes theme, color, surface, typography tone, interaction, accessibility, and restraint principles.

These are foundational visual references only, not final implemented tokens.

## 2. Theme Strategy

- Dark theme is the primary and dominant identity.
- Light theme is secondary and optional.
- All major visual decisions must work in dark mode first.
- If implemented later, light mode must feel like a coherent extension, not a separate identity.

### Dark-First Principle

The portfolio must be designed and evaluated dark-first. Hierarchy, typography, imagery, contrast, accents, borders, CTAs, navigation, and mobile composition should be proven in the dark theme before a light variant is considered.

## 3. Color Direction

The preliminary working family is:

- Tech Cyan: `#06B6D4`
- Deep Blue: `#2563EB`
- Graphite Gray: `#1F2937`
- Subtle Gold: `#D4AF37`
- Near Black: `#0B0D10`
- Off White: `#F5F7FA`

These values are approximate visual references pending final token approval. They do not define the final palette.

Supporting working references may include:

- Elevated dark surface: `#121820`
- Soft border: `#2A3440`
- Muted text: `#A7B0BC`
- Light background: `#F7F8FA`
- Light surface: `#FFFFFF`
- Light primary text: `#111827`
- Light muted text: `#4B5563`
- Light border: `#D1D5DB`

## 4. Color Roles

| Role | Dark-first behavior | Working reference |
|---|---|---|
| Primary background | Near-black base that gives typography and imagery priority. | `#0B0D10` |
| Secondary background | Slight tonal shift for adjacent sections without obvious bands. | `#10151B` |
| Elevated surface | Subtle separation for cards, panels, or metadata areas. | `#121820` |
| Primary text | Off-white, high-readability text. | `#F5F7FA` |
| Secondary text | Softer text for supporting information. | `#C5CBD3` |
| Muted text | Reserved for low-priority metadata, never essential content. | `#A7B0BC` |
| Primary accent | Cyan-led emphasis for restrained UI details and innovation cues. | `#06B6D4` |
| Secondary accent | Deep blue for links, CTAs, and identity moments. | `#2563EB` |
| Highlight accent | Rare gold highlight for distinction or premium notes. | `#D4AF37` |
| Border subtle | Thin, low-contrast structural separation. | `#2A3440` |
| Border strong | Clearer separation where interaction or grouping requires it. | pending |
| CTA primary background | Blue-led treatment with clear contrast in dark mode. | Deep Blue reference |
| CTA primary text | Text with sufficient contrast against the CTA background. | pending |
| CTA secondary treatment | Restrained outline or ghost treatment that remains visible. | pending |
| Focus ring | Highly visible cyan/blue treatment independent of hover styling. | Tech Cyan / Deep Blue |
| Selection / active state | Clear but restrained accent state; never dependent on color alone. | pending |

The final values, combinations, and contrast ratios remain unresolved.

## 5. Dark Theme Foundation

Dark mode should feel:

- near-black
- highly readable
- elegant in depth
- restrained in cool accents
- minimal but intentional in highlights
- premium in contrast

### Surface Hierarchy in Dark Mode

Use subtle tonal steps rather than heavy shadows or obvious glossy cards:

1. page background
2. secondary section background
3. elevated surface
4. interactive or focused surface

Each level should remain quiet and support content hierarchy.

Dark mode must not become neon-heavy, glossy UI overload, excessive glassmorphism, or a gamer aesthetic.

## 6. Light Theme Foundation

Light mode is secondary and optional. If implemented, it should feel:

- clean
- premium
- restrained
- airy
- aligned with the same identity

It must preserve blue/cyan accents, structure, restraint, and elegance without becoming the default identity. Light surfaces should use clean separation and avoid excessive shadows.

## 7. Accent Usage Rules

### Tech Cyan

Use for innovation cues, subtle emphasis, modernity, focus, and small UI accents. Cyan should not become a constant glow or the dominant page color.

### Deep Blue

Use for links, highlighted words, primary buttons, selected/active states, and strong identity moments. Blue-led CTAs must remain clear in dark mode.

### Subtle Gold

Use rarely for value, distinction, or a premium note. Gold must never dominate, appear everywhere, or make the site feel luxury-forced.

### Graphite

Use for structure, borders, support surfaces, dividers, and quiet technical framing.

Gold must be highly restrained.

## 8. Typography Tone Reference

Sora is explicitly discarded and must not be part of the selected visual system.

The approved primary typography direction is the Cinzel and Cormorant Garamond pairing. Exact font files, sizes, weights, tracking, line heights, and loading strategy are not finalized yet.

### Display / Brand — Cinzel

Use conceptually for:

- `CARLOS REYES`
- major page headings
- featured project titles where appropriate
- section titles
- selected small branding or pre-title elements
- restrained numeric/index treatments when visually appropriate

Preserve elegant display presence, uppercase capability, controlled letter-spacing, strong visual identity, and a premium/editorial tone. Do not apply extreme tracking everywhere; reduce tracking intentionally on mobile.

### Editorial — Cormorant Garamond

Use conceptually for:

- editorial descriptions
- selected introductory copy
- short statements
- About-page editorial moments
- selective secondary typography

Regular, light, or italic styles may be used when justified by hierarchy. Do not apply Cormorant Garamond automatically to every UI element.

### Functional / UI Text

Do not select a third branded webfont yet. Technical metadata, navigation, buttons, technology labels, and other high-legibility UI text may use a neutral system sans-serif stack during prototyping:

```text
system-ui
-apple-system
BlinkMacSystemFont
"Segoe UI"
sans-serif
```

This is a conceptual stack, not an implementation token.

The intended overall tone remains:

- strong refined display serif for identity and headings
- elegant editorial serif for selective moments
- modern sans-serif for UI, metadata, and technology lists

This tone should work with the blue/cyan/graphite family without turning the interface into a decorative editorial poster or a generic technical dashboard.

### Title Motion Reference

The original animated reference included a title reveal based on:

- opacity
- subtle vertical translation
- letter-spacing transition

`CARLOS REYES` may use a restrained version of this behavior during future exploration. It must be subtle, fast enough not to block content, responsive, and reduced or removed under `prefers-reduced-motion`. Do not implement it yet.

## 9. Surface / Border / Depth Direction

### Dark Mode

- layered but subtle
- soft contrast between page background and cards/sections
- thin rules
- restrained borders
- no thick noisy outlines

### Light Mode

- soft separation
- very clean borders
- no excessive shadows

### Depth

Depth should feel subtle, premium, and controlled. Avoid exaggerated floating cards everywhere, heavy blur, and effects that compete with typography or project imagery.

## 10. CTA / Link / Interactive Color Logic

- Primary CTA: likely Deep Blue or a blue-led treatment; strong and clear in dark mode.
- Secondary CTA: more restrained, potentially outline or ghost treatment, but still visible and accessible.
- Links: likely blue-led with elegant, non-flashy hover states.
- Focus: visible and accessible, with a possible cyan/blue treatment that does not rely on hover.
- Active/selected states: clear through color plus another visual cue such as position, weight, underline, or border.

This section defines visual logic only. It does not define final components or exact styles.

## 11. Accessibility and Contrast Principles

All palette decisions must preserve:

- strong readability
- WCAG-aware contrast
- visible focus
- clarity in dark mode
- clarity in light mode if implemented

Decorative accents must never reduce readability. Color must not be the only means of communicating state, hierarchy, or interaction.

## 12. Visual Restraint Rules

Do not overuse:

- cyan
- blue glow
- gold
- gradients
- shadows
- fog
- particles
- decorative geometry

The site should feel composed, not overloaded.

Rejected patterns remain:

- `✦`
- sparkles
- Matrix/code rain
- fake terminals
- cyberpunk neon
- skill bars
- percentage ratings
- logo clutter

## 13. Open Decisions

- final exact token set
- whether light mode will definitely be implemented
- final font files/families and loading strategy
- desktop and mobile type scale
- typography weights
- tracking values
- line heights
- section hierarchy
- UI text hierarchy
- final gradient rules
- exact button styling
- final image treatment
- exact motion token system

## 14. Status

- Status: `APPROVED FOR VISUAL SYSTEM`
- Implementation: `NOT IMPLEMENTED`
- Typography direction: `APPROVED DIRECTION`
- Typography scale: `WORKING SYSTEM APPROVED`
- Spacing: `WORKING SYSTEM APPROVED`
- Grid: `WORKING SYSTEM APPROVED`
- Authoritative working specification: [Typography, Layout & Grid System](./TYPOGRAPHY_LAYOUT_SYSTEM.md)

### Component, Navigation, Imagery and Motion Authority

The authoritative working specification for component language, navigation, project imagery, interactive states, and motion is [Component & Motion System](./COMPONENT_MOTION_SYSTEM.md).

This foundation establishes the visual direction and principles. The component document defines the approved working language for those areas without implementing UI or finalizing unresolved implementation details.

- Component language: `WORKING SYSTEM APPROVED`
- Navigation visual language: `WORKING SYSTEM APPROVED`
- Project imagery: `WORKING SYSTEM APPROVED`
- Motion: `WORKING SYSTEM APPROVED`
- Next phase: `Phase 3 — Implementation`
- First implementation checkpoint: `3.1 — Hero v1 — mobile-first`
