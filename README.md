# Carlos Reyes Portfolio

Portafolio profesional de Carlos Eduardo Reyes Cruz, construido con Astro 7, TypeScript y pnpm. Genera HTML estático; el contenido principal está en español.

## Requisitos

- Node.js 22.12 o posterior
- pnpm

## Ejecutar

```bash
pnpm install
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

## Compilar

```bash
pnpm build
pnpm preview
```

El resultado estático se genera en `dist/`. No se requiere backend.

## Contenido

- `src/data/portfolio.ts`: proyectos, trayectoria y datos de contacto verificados.
- `src/components/`: secciones y elementos Astro.
- `src/pages/`: home y `/sobre-mi`.
- `src/styles/global.css`: tokens y estilos globales.
- `public/`: favicon CR, CV, recursos sociales e iconos SVG.
- `docs/MIGRATION_AUDIT.md`: decisiones de auditoría y migración desde V2.

`Carlos_Reyes_Portafolio_Personal_V2/` se mantiene como material de referencia; no es una segunda página publicada por Astro.

## Publicación

Configura `PUBLIC_SITE_URL` con el dominio real antes de compilar para emitir canonical y URLs Open Graph absolutas. Revisa los datos personales del PDF en `public/` antes de publicar. Las portadas destacadas son capturas de los sitios públicos de cada proyecto. STARK / HAUS se identifica como concepto publicado; las participaciones y tecnologías pendientes de confirmar se señalan en la ficha.
