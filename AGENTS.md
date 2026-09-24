# AGENTS.md

Estas son las reglas maestras para trabajar en Carlos Reyes Portfolio.

## Project Purpose

El sitio es el portafolio profesional de Carlos Reyes.

Su objetivo principal es presentar de manera profesional y verificable experiencia en:

- Full Stack Development
- Web Development
- Software Engineering / Systems Engineering
- Backend
- Databases
- DevOps
- Linux
- IT Support
- Infrastructure / Networking

El sitio debe estar diseñado para reclutadores y clientes. Debe permitir presentar proyectos, experiencia, tecnologías y descargar el CV.

No debe convertirse en una plantilla genérica de desarrollador.

## Technical Foundation

Base actual:

- Astro 7
- TypeScript
- pnpm
- Node.js 22+

Astro debe ser la tecnología principal. Preferir Astro Components para contenido estático.

No agregar React, Vue, Svelte u otro framework salvo que exista una necesidad real de interactividad y haya sido autorizado explícitamente.

No agregar dependencias nuevas sin autorización previa.

No reemplazar pnpm por npm, yarn o bun.

## Architecture Principles

- Mantener componentes pequeños y reutilizables.
- Separar contenido/datos de presentación cuando tenga sentido.
- Evitar componentes monolíticos.
- Evitar JavaScript del lado cliente cuando no sea necesario.
- Preferir generación estática.
- No introducir backend ni base de datos mientras el alcance no lo requiera.
- Mantener una estructura fácil de mantener y ampliar.
- Usar nombres de archivos, variables, componentes y código en inglés.
- Mantener el contenido público principal del sitio en español inicialmente.
- Diseñar la arquitectura para permitir internacionalización futura sin implementarla todavía.

## Design Principles

La interfaz debe ser:

- profesional
- moderna
- premium
- limpia
- responsive
- mobile-first
- accesible
- rápida

Evitar:

- diseños genéricos de portfolio
- exceso de efectos visuales
- animaciones innecesarias
- fondos de “hacker/code rain”
- barras de progreso ficticias para skills
- porcentajes arbitrarios de conocimiento
- elementos puramente decorativos que perjudiquen rendimiento o accesibilidad

El diseño debe comunicar ingeniería, tecnología y profesionalismo.

## Content Integrity

Regla crítica: nunca inventar:

- experiencia laboral
- tecnologías utilizadas
- fechas
- métricas
- clientes
- resultados
- certificaciones
- estudios
- responsabilidades
- proyectos

Cuando falte información, usar placeholders claramente identificados o solicitar la información. No transformar una suposición en un hecho.

Los proyectos deben mostrar evidencia real y tecnologías realmente utilizadas.

## Professional Positioning

El perfil no debe presentarse únicamente como frontend developer.

Debe reflejar la combinación real de:

- desarrollo web/full stack
- sistemas
- soporte TI
- infraestructura
- redes
- servidores
- bases de datos
- despliegue y operaciones

No exagerar experiencia ni seniority.

## CV

El proyecto deberá permitir posteriormente:

- visualizar información profesional resumida
- ofrecer un botón para descargar el CV en PDF

El PDF deberá mantenerse como un asset del proyecto cuando sea incorporado.

No implementar esta funcionalidad todavía.

## Performance

Priorizar:

- HTML estático
- poco JavaScript cliente
- imágenes optimizadas
- fuentes eficientes
- Core Web Vitals
- carga rápida
- bundle pequeño

No añadir librerías pesadas cuando CSS, Astro o APIs nativas sean suficientes.

## Accessibility

Mantener:

- HTML semántico
- navegación por teclado
- contraste adecuado
- estados focus visibles
- alt text apropiado
- `prefers-reduced-motion` cuando existan animaciones
- jerarquía correcta de headings

## SEO

La arquitectura futura debe considerar:

- title
- meta description
- canonical
- Open Graph
- Twitter cards
- sitemap
- robots.txt
- structured data cuando corresponda

No implementar estos elementos todavía salvo que otro checkpoint lo solicite.

## Development Workflow

Cuando se inicie el servidor de desarrollo, usar background mode:

```bash
astro dev --background
```

Gestionar el servidor en segundo plano con:

```bash
astro dev stop
astro dev status
astro dev logs
```

Antes de considerar terminado un checkpoint de código:

- revisar `git diff`
- ejecutar las comprobaciones relevantes
- ejecutar `pnpm build` cuando el cambio afecte la aplicación
- reportar errores y warnings

No ocultar errores. No solucionar problemas fuera del alcance del checkpoint sin autorización.

## Documentation

Full documentation: https://docs.astro.build

Consultar estas guías antes de trabajar en tareas relacionadas:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Git Rules

Codex NO debe:

- hacer commit
- hacer push
- crear branches
- cambiar remotes
- reescribir historial

Estas acciones requieren autorización explícita.

Al finalizar cada tarea, reportar:

- archivos modificados
- cambios realizados
- comandos ejecutados
- resultado de verificaciones
- cualquier problema encontrado

## Scope Discipline

Trabajar solamente en el checkpoint solicitado. No adelantarse a checkpoints posteriores.

- No hacer refactors generales no solicitados.
- No instalar herramientas "por si acaso".
- No reemplazar decisiones arquitectónicas sin autorización.
