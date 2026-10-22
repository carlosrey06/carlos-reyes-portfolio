# Publicar en Netlify

Esta guía prepara el sitio para publicarse sin adaptar Astro a SSR. El proyecto genera páginas estáticas y no necesita backend, funciones ni el adaptador de Netlify. Netlify acepta los archivos de `dist/` directamente para Astro estático. Consulte [Astro en Netlify](https://docs.netlify.com/build/frameworks/framework-setup-guides/astro/) si cambia la arquitectura.

## Requisitos

- Node.js **22.22.2**, fijado en `.nvmrc`. `package.json` declara el mínimo compatible `>=22.12.0`.
- pnpm **11.9.0**, fijado en `package.json` mediante `packageManager`.
- Git para publicar mediante integración continua. No se necesita Git para la carga manual de `dist/`.

Netlify toma Node desde `.nvmrc` y pnpm desde `packageManager`. Para instalar localmente con la versión fijada:

```sh
corepack enable
pnpm install --frozen-lockfile
```

## Desarrollo y compilación local

Inicie el servidor de desarrollo en segundo plano:

```sh
pnpm astro dev --background
pnpm astro dev status
pnpm astro dev logs
pnpm astro dev stop
```

Genere el sitio estático y compruebe las rutas y assets:

```sh
pnpm build
test -f dist/index.html
test -f dist/sobre-mi/index.html
test -f dist/cv/Carlos_Reyes_CV.pdf
```

La salida incluye las páginas `/` y `/sobre-mi/`, los recursos de `public/` y los CSS/JS compilados. No publique `node_modules/`; Netlify solo despliega el directorio configurado en `publish`.

## Publicación conectando Git

1. Sube el repositorio a un proveedor Git desde tu equipo. No incluyas `.env*`, tokens ni credenciales.
2. En Netlify, crea un sitio importando ese repositorio y selecciona la rama de producción.
3. Deja el directorio base vacío (raíz del repositorio). `netlify.toml` define los valores de build:

   - **Build command:** `pnpm build`
   - **Publish directory:** `dist`

4. No agregues una regla SPA ni un adaptador SSR. Las páginas `/` y `/sobre-mi/` se publican como HTML estático independiente.
5. Inicia el primer deploy desde Netlify y revisa el log de instalación y compilación.

Netlify ejecutará nuevos deploys al recibir cambios de la rama conectada. El archivo `pnpm-lock.yaml` y `pnpm install --frozen-lockfile` permiten reproducir la instalación.

## Publicación manual

1. En local, usa Node y pnpm de las versiones indicadas arriba.
2. Ejecuta `pnpm install --frozen-lockfile` y `pnpm build`.
3. Comprueba `dist/index.html`, `dist/sobre-mi/index.html` y `dist/cv/Carlos_Reyes_CV.pdf`.
4. En la sección **Deploys** del sitio Netlify, crea un deploy manual y arrastra la carpeta `dist/` compilada. No arrastres la raíz del repositorio.

## Dominio, canonical y redes sociales

El dominio definitivo todavía no está asignado. No configures un valor de ejemplo ni uses una URL local.

Cuando tengas el dominio:

1. Añádelo en **Domain management** de Netlify y sigue sus instrucciones DNS.
2. En las variables de entorno de Netlify, crea `PUBLIC_SITE_URL` con el origen canónico, por ejemplo `https://dominio-asignado.example`, **solo para el contexto Production**. Sustituye el ejemplo por el dominio real y no agregues una ruta al final.
3. Vuelve a compilar y verifica que `<link rel="canonical">`, `og:url`, `og:image` y los metadatos de Twitter usen ese origen. La tarjeta usa `public/og-cover.png` (1200 × 630); `public/og-cover.svg` se conserva como original vectorial.
4. Añade un sitemap con las URLs absolutas `/` y `/sobre-mi/` y su referencia `Sitemap:` en `robots.txt` cuando ya exista el dominio. No se genera sitemap mientras falta el dominio canónico.

Netlify aplica `X-Robots-Tag: noindex` a Deploy Previews. Mantén `PUBLIC_SITE_URL` limitado a Production: así las previews no se presentan como versiones canónicas. La regla `robots.txt` actual permite indexar el sitio publicado.

## Verificación posterior al deploy

- Abre directamente `/` y `/sobre-mi/`, incluyendo una recarga directa en esta última ruta.
- Comprueba navegación desktop y menú móvil, anclas internas, las cuatro tarjetas apiladas, la terminal, animación reducida, enlaces de proyecto, contacto y footer.
- Descarga el CV desde el navbar y el Hero; comprueba que el PDF abra correctamente.
- Revisa que imágenes WebP, iconos, favicon, CSS y JS carguen sin errores.
- Prueba el botón de WhatsApp y sus datos de contacto. Revisa GitHub, LinkedIn y correo.
- En **Domain management**, confirma que HTTPS esté activo y que el dominio principal redirija al host canónico seleccionado.
- Comprueba las canonical y Open Graph con el dominio real. Verifica el sitemap una vez agregado.

## Actualizar y revertir

- **Deploy por Git:** modifica el proyecto, valida `pnpm build` y `git diff --check`, y publica tus cambios en la rama conectada. Netlify compilará y desplegará la nueva versión.
- **Deploy manual:** genera `dist/` de nuevo y crea otro deploy manual.
- **Revertir:** en Netlify, abre **Deploys**, selecciona un deploy anterior que se haya verificado y publícalo de nuevo. Conserva el deploy defectuoso para poder investigar el log antes de eliminarlo.

## Seguridad y caché

`netlify.toml` añade `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` y restricciones de cámara, micrófono y geolocalización. No define CSP porque la terminal usa scripts del sitio y se cargan fuentes externas. Solo los assets con nombre hash de `/_astro/` reciben caché permanente; las imágenes y archivos públicos conservan el comportamiento por defecto de Netlify.

El CV es un archivo público descargable e incluye los datos de contacto profesionales incorporados en él. Revisa su contenido antes de cada publicación. Las carpetas de referencias y `docs/qa/` se mantienen en el repositorio y fuera de `dist/`; no es necesario borrarlas para desplegar.
