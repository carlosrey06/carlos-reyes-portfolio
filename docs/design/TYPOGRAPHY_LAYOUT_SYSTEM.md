# Carlos Reyes Portfolio — Typography, Layout & Grid System

## Status

- Typography: `APPROVED DIRECTION`
- Typography scale: `WORKING SYSTEM APPROVED`
- Spacing: `WORKING SYSTEM APPROVED`
- Grid: `WORKING SYSTEM APPROVED`
- Implementation: `NOT IMPLEMENTED`
- Next: `Phase 3 — Implementation / Hero v1 — mobile-first`

These are approved working values for Hero v1 and visual prototyping. Small adjustments may still be made during visual testing. This document does not implement UI, download fonts, or define final CSS tokens.

## Typography Families

- Display / brand: Cinzel.
- Editorial: Cormorant Garamond.
- Functional / UI: neutral system sans-serif stack.

Conceptual functional stack:

```text
system-ui
-apple-system
BlinkMacSystemFont
"Segoe UI"
sans-serif
```

Do not introduce Sora. Do not download fonts during this checkpoint.

## Display Typography

Cinzel should be used selectively for:

- `CARLOS REYES`
- major page titles
- section headings where appropriate
- featured project names
- selected project indices or branding details

Do not use Cinzel for paragraphs or dense UI.

## Hero Name — Desktop

Working scale:

```css
font-size: clamp(5rem, 10vw, 10rem);
font-weight: 700;
line-height: 0.88–0.95;
letter-spacing: approximately 0.06em–0.12em depending on viewport;
```

This is an approximate conceptual range of 80px to 160px. Do not hardcode excessive tracking. The final composition must prevent overflow. `CARLOS REYES` may remain on one line on large desktop or split compositionally when appropriate.

## Hero Name — Mobile

Preferred composition:

```text
CARLOS
REYES
```

Working scale:

```css
font-size: clamp(3.4rem, 17vw, 6rem);
font-weight: 700;
line-height: 0.90–0.98;
letter-spacing: approximately 0.03em–0.07em;
```

This is an approximate range of 54px to 96px. Mobile tracking must be intentionally reduced and the composition must not overflow horizontally.

## Professional Title

Text: `Full Stack Developer & Systems Engineer`

- Desktop: approximately 18–24px.
- Mobile: approximately 14–18px.
- Typeface: system sans by default; Cinzel only if visual testing proves it appropriate.
- Weight: clear and readable without competing with the display name.
- Tracking: subtle, never extreme.
- Uppercase may be explored.

## Positioning Copy

Text:

> Desarrollo aplicaciones web completas y la infraestructura necesaria para llevarlas a producción de forma segura y mantenible.

- Desktop: 18–22px.
- Mobile: 16–18px.
- Typeface: system sans by default.
- Line-height: 1.5–1.7.
- Maximum readable width: approximately 620–720px.

## Section Titles

- Desktop: `clamp(3rem, 5vw, 5rem)` — approximately 48px to 80px.
- Mobile: `clamp(2.2rem, 10vw, 3.5rem)` — approximately 35px to 56px.
- Typeface: Cinzel.
- Weight: 600–700.
- Line-height: approximately 1.
- Tracking: controlled, approximately 0.03em–0.08em.

## Featured Project Titles

- Desktop: `clamp(3rem, 6vw, 6rem)`.
- Mobile: `clamp(2.4rem, 11vw, 4rem)`.
- Typeface: Cinzel.

Project names may become one of the largest elements after the hero name. Do not force identical sizes on every project when composition requires variation.

## Editorial Text

Cormorant Garamond may be used for:

- short editorial statements
- selected introductions
- About-page moments
- section transitions
- small expressive phrases

Suggested working sizes:

- Large editorial: 28–42px desktop; 24–32px mobile.
- Standard editorial: 20–26px desktop; 18–22px mobile.

Do not use it for dense technical metadata.

## Body Text

Use the system sans-serif stack.

- Desktop: 17–18px.
- Mobile: 16–17px.
- Line-height: 1.55–1.7.

Avoid body text below 16px.

## Tech / Meta Text

Use the system sans-serif stack for technologies, project status, dates, navigation, indices, and small metadata.

- Desktop: 12–14px.
- Mobile: 12–13px.
- Uppercase: selective only.
- Uppercase tracking: 0.06em–0.12em when readability allows.

## Navigation

- Desktop: 14–16px, system sans, medium weight.
- Mobile menu: 20–28px depending on composition.

Navigation should not compete with `CARLOS REYES`.

## Button Typography

- Typeface: system sans.
- Desktop: 14–16px.
- Mobile: 15–16px.
- Weight: 500–600.
- Tracking: slightly positive only when uppercase.

Do not use Cinzel for primary control text by default.

## Spacing System

Approved working scale in pixels:

```text
4  8  12  16  20  24  32  40  48  64  80  96  128  160
```

Prefer values from this scale. Do not introduce arbitrary values without a compositional reason.

## Section Spacing

- Desktop major section spacing: approximately 128–160px.
- Large visual project transitions: 160–200px when justified.
- Tablet: 96–128px.
- Mobile: 72–96px.

Do not make every section equally spaced. Editorial rhythm may vary while remaining based on the spacing system.

## Content Width

- Primary content container: maximum 1440px.
- Body/editorial readable width: approximately 620–760px.
- Technical lists: variable according to the grid.

Do not automatically stretch textual content to 1440px.

## Page Padding

- Large desktop: 64px preferred.
- Medium desktop: 40–48px.
- Tablet: approximately 32px.
- Mobile: 20–24px, with 20px as the minimum normal content edge.

Never allow text or interactive content to touch viewport edges. Imagery or background geometry may intentionally bleed beyond the content container.

## Desktop Grid

- 12 columns.
- Maximum content width: 1440px.
- Working column gap: 24–32px.

The grid should guide hero alignment, project compositions, experience, stack, and infrastructure while remaining mostly invisible. Do not render visible grid lines in production by default.

## Tablet Grid

- 8 columns.
- Suggested gap: 20–24px.

Tablet layouts should meaningfully recompose rather than merely shrink desktop columns.

## Mobile Grid

- 4 columns.
- Suggested gap: 16px.
- Page padding: 20–24px.

Mobile may use the full four-column width, with deliberate three-quarter or offset compositions only when readability remains strong.

## Hero Height

- Desktop target: approximately `min-height: 100svh`.
- Mobile target: approximately the first viewport.

Do not lock content to exactly `100vh` if content or accessibility requires more. During implementation, modern viewport units such as `svh` or `dvh` may be evaluated so browser chrome changes do not break the layout.

## Button and Touch Targets

- Absolute minimum interactive target: 44 × 44px.
- Preferred main CTA height: 48–52px.
- Mobile primary CTA: preferably at least 50px high.

## Corner Radius Direction

Working radius family:

```text
4px
8px
12px
```

Primary default: 8px. Use 12px only where a softer treatment is visually justified. Avoid 20px+ radii, pill shapes everywhere, and massively rounded project containers. Pills may serve a specific small metadata need but must not dominate the component language.

## Border and Rule System

Thin rules are part of Editorial Engineering.

- Default visual direction: 1px subtle border/rule.
- Dark mode: low contrast.
- Stronger borders: focus, intentional emphasis, or active states only.

Do not place heavy boxes around every section.

## Project Image Rhythm

Featured Work imagery should be large:

- Desktop image area: approximately 7–9 columns depending on composition.
- Supporting text: approximately 3–5 columns.
- Mobile imagery: generally full available width.

This is compositional guidance, not a rigid template. Do not place primary project screenshots inside tiny cards.

## Hero Composition Grid

- Name: approximately 8–12 column span.
- Supporting title/copy: approximately 4–7 columns.
- CTAs: aligned with copy or opposite grid edge depending on final composition.

The composition should remain asymmetrical and editorial.

## Mobile Composition

Mobile priority:

1. Professional title.
2. `CARLOS / REYES`.
3. Positioning copy.
4. Primary CTA.
5. Secondary CTA.

Decorative geometry is secondary. If decoration conflicts with readability, remove or reduce it.

## Responsive Breakpoint Philosophy

Do not design exclusively around framework default breakpoints. Use content-driven responsive decisions.

Working reference zones:

- mobile: `< 640px`
- large mobile / small tablet: `640–767px`
- tablet: `768–1023px`
- desktop: `1024–1439px`
- large desktop: `1440px+`

These are design references, not mandatory CSS constants yet.

## Title Motion

`CARLOS REYES` may use the previously approved reveal:

Initial:

- lower opacity
- subtle `translateY`
- slightly wider tracking

Final:

- full opacity
- neutral vertical position
- approved final tracking

Recommended duration direction: approximately 900–1400ms. Do not block interaction.

Under reduced motion, appearance should be immediate or near-immediate without tracking animation.

## Typographic Restraint

Do not use Cinzel everywhere. A page where every line is Cinzel will lose hierarchy.

Desired contrast:

- Cinzel: identity.
- Cormorant Garamond: editorial personality.
- System sans: functionality and clarity.
