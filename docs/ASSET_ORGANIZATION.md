# Organización de assets

## Recursos del sitio

Las imágenes optimizadas que usa Astro viven en `public/images/projects/`. Sus rutas se mantienen en `src/data/portfolio.ts`; se publican junto con `public/cv/` e `public/icons/`.

## Referencias locales

- `resources/project-originals/`: las siete capturas PNG originales, conservadas sin recomprimir.
- `resources/archive/portfolio-v2/`: copia histórica completa del sitio V2, con su estructura interna y CV de esa versión.
- `resources/archive/imports/project-images-update/` y `project-photos/`: README, manifiestos y galerías de los paquetes de imágenes. Las alternativas WebP con contenido distinto también se conservan aquí.

`resources/` está excluida de Git y del despliegue. Es material de referencia local; no subirla a GitHub. Sí subir el código de `src/`, assets activos de `public/`, configuración como `netlify.toml` y `.nvmrc`, y documentación del proyecto. El CV actual está en `public/cv/`; el histórico de V2 no lo reemplaza.

## Añadir imágenes de proyectos

Guarda la captura original local en `resources/project-originals/` con un nombre descriptivo. Prepara la versión WebP optimizada que corresponda y colócala en `public/images/projects/`. Antes de reemplazar un archivo existente, compara el contenido y confirma la versión aprobada. Actualiza las rutas y el texto alternativo en `src/data/portfolio.ts`, y verifica el build y las solicitudes de imagen.
