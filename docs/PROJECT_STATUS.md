# Carlos Reyes Portfolio — Project Status

## Project Purpose

Portafolio profesional de Carlos Reyes orientado principalmente a reclutadores y también a potenciales clientes.

Debe comunicar una combinación profesional de:

- Full Stack Development
- Web Development
- Systems / Software Engineering
- Backend
- Databases
- DevOps
- Linux
- IT Support
- Infrastructure / Networking

El posicionamiento debe ser profesional, verificable y honesto, sin exagerar seniority ni experiencia.

## Repository

- Ruta WSL: `/home/carlos/workspace/carlos-reyes-portfolio`
- Repositorio GitHub: `carlosrey06/carlos-reyes-portfolio`
- Remote: `origin` → `git@github.com:carlosrey06/carlos-reyes-portfolio.git`
- Branch actual: `main`
- Seguimiento: `main` sigue a `origin/main`
- Commit base del proyecto: `3529544` — `"Initial commit from Astro"`
- Commit de reglas del proyecto: `b1b16b4` — `chore: define project development guidelines`

## Environment

- Node.js: `22.22.2`
- pnpm: `11.9.0`
- Astro: `7.3.5`
- Git: `2.53.0`
- Entorno de trabajo: WSL Ubuntu
- Package manager: pnpm
- Output actual: static

## Current Technical State

- El Astro starter está creado y es la aplicación actual.
- El proyecto genera un sitio estático.
- Las dependencias base están instaladas.
- Git está configurado en la rama `main`.
- El remote de GitHub está configurado por SSH.
- La conexión SSH/GitHub y el push al repositorio funcionan.
- El build base fue aprobado.
- Codex trabaja localmente en WSL.
- `AGENTS.md` está configurado con las reglas maestras del proyecto.
- Todavía no se ha instalado Tailwind.
- Todavía no se ha instalado React.
- Todavía no se ha implementado el diseño del portfolio.
- Todavía no se ha agregado el CV.
- Todavía no se ha implementado contenido profesional definitivo.

## Build Baseline

El build base pasó correctamente el 24 de septiembre de 2026 mediante `pnpm build`.

- Output: `static`
- Páginas generadas: `1`
- Resultado: build completado correctamente

## Architecture Decisions

- Astro es la tecnología principal.
- TypeScript forma parte de la base técnica.
- pnpm es obligatorio.
- La generación estática es la preferencia actual.
- React solo se incorporará si existe una necesidad real posterior y se autoriza explícitamente.
- No se agregará backend ni base de datos mientras no sea necesario para el alcance.
- El desarrollo visual debe ser mobile-first.
- La experiencia móvil es un requisito de primer nivel.
- El sitio debe diseñarse mobile-first, no como una versión reducida del desktop.
- La navegación, jerarquía visual, tipografía, espaciados, CTAs, animaciones y rendimiento deben evaluarse específicamente en smartphone.
- La calidad visual móvil debe ser equivalente o superior a la experiencia desktop dentro de las limitaciones del dispositivo.
- Performance y accesibilidad son prioridades.
- El contenido debe ser real y verificable.
- El CV será descargable posteriormente.
- Los nombres de código se mantendrán en inglés.
- El contenido público será inicialmente en español.

## Current Checkpoint

Phase 3 — Implementation

First implementation checkpoint: `3.1 — Hero v1` — mobile-first

## Next Immediate Objective

Implementar Hero v1 con la arquitectura de información y el sistema visual aprobados, comenzando mobile-first.

La home debe funcionar como un sitio de presentación profesional de alto impacto, no como un CV convertido en página web.

## Confirmed Professional Identity

- Public name: `Carlos Reyes`
- Primary title: `Full Stack Developer & Systems Engineer`
- Primary positioning sentence: “Desarrollo aplicaciones web completas y la infraestructura necesaria para llevarlas a producción de forma segura y mantenible.”
- Primary hero CTAs: `Ver proyectos` y `Descargar CV`
- Contacto: presente en la navegación y al final del sitio, pero no como tercer CTA principal del hero.

## Confirmed Home Information Architecture

La prioridad de la home será comunicar identidad profesional, proyectos, tecnologías, experiencia resumida, capacidades de deployment/infrastructure y contacto.

1. **Hero**
   - Carlos Reyes
   - Full Stack Developer & Systems Engineer
   - frase de posicionamiento
   - Ver proyectos
   - Descargar CV
   - presentación visual dominante y concisa
   - sin biografía larga, inventario exhaustivo, responsabilidades laborales, ratings ni símbolos sparkle

2. **Featured Work**
   Orden fijo:
   1. Frío Puro
   2. Sellers
   3. V.A.U.L.T.
   4. ARCH

   Las tarjetas priorizarán visual del proyecto, nombre, propósito conciso, tecnologías clave y estado de producción/desarrollo cuando sea útil. No reproducirán el inventario técnico completo.

3. **Tech Stack**
   Sección visualmente relevante para comunicar el ecosistema confirmado de desarrollo, con categorías como Frontend, Backend, Databases, Infrastructure / Deployment, Security / Authentication y Automation. No incluir porcentajes, barras, rankings arbitrarios ni etiquetas de seniority. Networking no debe dominar esta sección.

4. **Experience**
   La experiencia en home será compacta y mostrará Importaciones a México, Laboratorios Chontalpa, Soriana y SICCOMS con empresa, rol, fechas y un resumen breve de tecnología/contexto. Las responsabilidades extensas permanecen en el CV, que será la fuente de detalle laboral.

5. **More Work**
   Orden fijo:
   1. P.U.L.S.E.
   2. IMXTime
   3. YollotDP
   4. Cadebot L100 / MiRobot

   Estos proyectos complementarios recibirán menos peso visual que Featured Work y respetarán sus restricciones de publicación y privacidad.

6. **Infrastructure / Deployment**
   Sección breve para comunicar trabajo más allá del código de aplicación: Linux / Ubuntu, SSH, Docker, Docker Compose, reverse proxies, Traefik, Nginx, PHP-FPM, DNS, Vercel, deployments, logs, health checks y backups. No mencionar Hetzner como experiencia de Carlos ni convertir esta sección en un currículum de infraestructura.

7. **Final CTA / Contact**
   Sección de cierre para contacto profesional, colaboración o conversaciones de contratación. El copy detallado queda pendiente.

8. **Footer**
   Footer mínimo con Carlos Reyes, enlaces profesionales, contacto y copyright/año si corresponde. El contenido exacto queda pendiente.

## About Page Decision

“Sobre mí” no ocupará una sección extensa de la home. Se reserva una página dedicada:

- Ruta: `/sobre-mi`
- Etiqueta de navegación: `Sobre mí`
- Propósito: presentar una introducción más humana y profesional sin convertir la home en una biografía.

El contenido futuro puede incluir introducción profesional, enfoque de desarrollo, combinación de desarrollo y sistemas, evolución profesional, educación, experiencia secundaria seleccionada y filosofía de trabajo. El copy final todavía no está definido.

## Future Project Detail Routes

La arquitectura queda preparada conceptualmente para futuras páginas de casos de estudio:

- `/proyectos/frio-puro`
- `/proyectos/sellers`
- `/proyectos/vault`
- `/proyectos/arch`

Estas rutas son únicamente preparación arquitectónica; no están implementadas y podrán contener narrativas más profundas mientras la home permanece concisa.

## Navigation

Navegación primaria propuesta:

- Proyectos
- Stack
- Experiencia
- Sobre mí
- Contacto

Acción de utilidad primaria: `Descargar CV`.

La navegación desktop debe ser limpia y contenida. La navegación mobile requiere una composición e interacción dedicada y no debe tratarse como una versión comprimida de desktop.

Nota de implementación: no inventar un asset ni una ruta para el CV. Si el PDF final todavía no está en `public/`, el CTA puede incluirse visualmente más adelante, pero no debe apuntar a un archivo falso.

## Visual Direction Status

La dirección visual seleccionada es **Concept 01 — Editorial Engineering**.

- Status: `APPROVED VISUAL DIRECTION`
- Implementation status: `NOT STARTED`
- Dark theme: primary and dominant
- Light theme: secondary and optional
- Typography: Cinzel display/brand, Cormorant Garamond editorial, system sans UI
- Visual system: sufficiently defined for implementation

- atmósfera dark / near-black
- tipografía fuerte
- referencia display estilo Cinzel
- referencia editorial Cormorant Garamond
- círculos geométricos sutiles
- ornamentos geométricos/diamante
- líneas y divisores finos
- partículas/neblina contenidas
- movimiento lento y elegante
- sensación premium tecnológica/editorial
- símbolos `✦`, estrellas y sparkle glyphs rechazados

## Mobile Requirement

Mobile es una experiencia de primer nivel. Cada propuesta futura debe diseñar intencionalmente la jerarquía móvil, adaptar tipografía y composición, mantener proyectos visualmente fuertes, conservar CTAs claros, usar touch targets adecuados, mantener el motion performante y evitar escalar simplemente el layout desktop.

## Remaining IA Decisions

- Copy final de la home y de `/sobre-mi`.
- Contenido exacto del footer, contacto y enlaces públicos.
- Detalle final de cada caso de estudio.
- Método final de carga local/web de fuentes.
- Valores exactos de tokens de color y validación final de contraste.
- Navegación desktop estática vs. sticky.
- Transición exacta del menú mobile.
- Curvas de easing finales.
- Assets y crops definitivos de screenshots.
- Posible tema claro futuro.
- Comportamiento futuro de transiciones entre páginas.

Estas decisiones son de implementación/prototipado y no bloquean Hero v1.

## Previous Information Collection Sources

La recopilación profesional ya fue completada y auditada a partir de:

- CV
- conversaciones previas
- información aportada directamente por Carlos
- repositorios
- documentación
- screenshots/evidencia

La información se clasificó por:

- verification status
- publication status

No se implementó todavía contenido visual ni UI a partir de esta información.

## Change Log

Entradas iniciales en orden cronológico. Todos los eventos iniciales documentados ocurrieron el 24 de septiembre de 2026.

1. Creación del proyecto Astro — 24 de septiembre de 2026; commit `3529544`.
2. Configuración inicial de Git y normalización de la rama `main` — 24 de septiembre de 2026.
3. Configuración de `AGENTS.md` con las reglas maestras del proyecto — 24 de septiembre de 2026; commit `b1b16b4`.
4. Creación del repositorio GitHub, configuración del remote SSH y primer push — 24 de septiembre de 2026.
5. Validación del build base con `pnpm build` — 24 de septiembre de 2026.
6. Creación de la documentación viva del proyecto — 24 de septiembre de 2026; checkpoint 1.1.
7. Cierre de la fundación documental y comienzo del checkpoint 1.2 — 24 de septiembre de 2026.
