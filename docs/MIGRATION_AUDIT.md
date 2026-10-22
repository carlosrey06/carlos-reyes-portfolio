# Auditoría y migración A → V2 → Astro

Fecha: 19 de octubre de 2026. El repositorio Astro es la base de publicación; `Carlos_Reyes_Portafolio_Personal_V2/` se conserva como fuente histórica sin montar un segundo sitio.

## Decisión visual

`docs/design/FINAL_DESIGN_DIRECTION.md` aprueba **Editorial Engineering** y rechaza crear una dirección híbrida. Por ello se conserva la paleta oscura azul/cian, Cinzel para identidad y Cormorant Garamond para acentos editoriales. De V2 se recuperan el monograma CR, dos ilustraciones de conceptos, el PDF aportado y la estructura de trayectoria/método. El verde Signal Lime y la tipografía alternativa de la referencia nueva quedan como referencias históricas; implementarlos como sistema principal contradiría la aprobación existente. La profundidad visual de V2 se adapta a las portadas tipográficas de proyectos sin copiar su escena espacial.

## Clasificación de elementos

| Acción | Elementos | Motivo / resultado |
|---|---|---|
| CONSERVAR | Astro 7 estático, pnpm, `Layout`, hero, navegación, proyectos principales, stack, infraestructura, contacto, footer | Ya formaban una base válida y accesible. |
| REUTILIZAR Y MEJORAR | `Hero`, `SiteNavigation`, `FeaturedProject`, `FeaturedWork`, `MoreWork`, `TechStack`, `Contact`, `SiteFooter` | Se conectaron enlaces reales, CV, datos compartidos, portadas editoriales, iconos SVG y rutas entre páginas. |
| INTEGRAR DESDE V2 | SVG de STARK / HAUS y AERYX, monograma CR, CV, trayectoria y método | Los dos SVG se presentan como conceptos. Trayectoria y método se reescribieron como componentes Astro con datos contrastados contra `CONTENT_INVENTORY.md`. |
| REFACTORIZAR | Datos de proyectos y contacto | Están centralizados en `src/data/portfolio.ts` para evitar repetir copys y URLs. |
| SUSTITUIR | Favicon Astro por monograma CR; README starter por instrucciones del proyecto | El icono y la documentación ahora representan a Carlos. |
| ELIMINAR CON JUSTIFICACIÓN | Botón de CV deshabilitado, enlaces sin destino, adornos `✦` de V2 | El PDF está presente; los adornos están expresamente rechazados en la dirección aprobada. |

## Inventario de comportamientos V2

| Recurso o comportamiento V2 | Decisión |
|---|---|
| Navegación móvil | La implementación Astro existente con `details` permanece; se añaden ruta «Sobre mí», CV y Escape. |
| Filtros de tres conceptos | Se omiten: dos conceptos no necesitan filtros; la interfaz resultaría más compleja sin aportar utilidad. |
| Modales de conceptos | Se sustituyen por contenido visible en `Explorations.astro`, accesible sin JavaScript. |
| Formulario que copia mensaje | Se omite: el correo `mailto:` ofrece contacto directo y no simula envío. |
| Reveal y puntero del hero | Se conserva el movimiento CSS discreto existente, con reducción de movimiento; se descarta el seguimiento del puntero por rendimiento y sobriedad. |
| Hero orbital SVG | Se conserva en V2 como referencia; la portada Astro usa geometría CSS y prioriza el nombre. |
| `project-pulse.svg`, `project-systems.svg` | Permanecen en V2: son ilustraciones conceptuales, no capturas verificadas de los proyectos reales. |
| STARK / HAUS y AERYX | Migrados como exploraciones conceptuales claramente etiquetadas. |
| PDF de CV | Copiado a `public/` para descarga. El archivo original se conserva en V2. |
| Iconos de tecnología de V2 | No se migran porque varios son aproximaciones; se incluyen SVG de marcas reales desde [Simple Icons](https://github.com/simple-icons/simple-icons), con texto junto a cada icono. |

## Límites de evidencia

Las capturas públicas de Frío Puro, Haight Ashbury Coffee Co., STARK / HAUS y Didilazos se guardan en `public/projects/`; las capturas de QA y comparación están en `docs/qa/featured-work-stacked/`. STARK / HAUS conserva la etiqueta de concepto que usa su sitio. Las participaciones y tecnologías de los tres sitios de YollotDP requieren confirmación antes de reemplazar los placeholders. Las experiencias y las atribuciones confirmadas provienen de `docs/CONTENT_INVENTORY.md`. El correo figura en el CV incorporado por V2 y en su README; conviene revisar el PDF y sus datos personales antes de publicar externamente. El dominio canónico no está confirmado: se genera `canonical` y `og:image` absolutos solo si se configura `PUBLIC_SITE_URL`.
