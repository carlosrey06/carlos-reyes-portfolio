# Carlos Reyes Portfolio — Content Inventory

Este documento es la fuente de control para recopilar información antes del diseño.

## Status Definitions

### CONFIRMED

Información respaldada o explícitamente confirmada.

### NEEDS VERIFICATION

Información conocida parcialmente que requiere evidencia, fechas, contexto o confirmación.

### MISSING

Información que todavía debemos conseguir.

## Publication Status

### PUBLIC

Información aprobada para mostrarse públicamente en el portfolio.

### PRIVATE

Información que puede servir como evidencia interna pero no debe publicarse.

### UNDECIDED

Todavía debemos decidir si se mostrará públicamente.

El estado de verificación y el estado de publicación son independientes. Por ejemplo, un dato puede estar `CONFIRMED` pero ser `PRIVATE`.

## Professional Identity

| Field | Status | Value / Notes |
|---|---|---|
| nombre profesional | MISSING | Pendiente de confirmar el formato público. |
| headline | MISSING | No definir antes de recopilar y verificar la información. |
| ubicación pública que deseamos mostrar | MISSING | Pendiente de decidir. |
| resumen profesional | MISSING | Pendiente de redactar con información confirmada. |
| tipos de roles buscados | MISSING | Pendiente de confirmar. |
| idiomas | MISSING | Pendiente de confirmar nivel y uso público. |
| disponibilidad | MISSING | Pendiente de confirmar. |

## Professional Experience

Preparar una entrada por cada empleo. No inventar empleos ni información.

```yaml
- company: MISSING
  role: MISSING
  location: MISSING
  employment type: MISSING
  start date: MISSING
  end date: MISSING
  responsibilities: MISSING
  contribution / scope: MISSING
  technologies: MISSING
  notable problems solved: MISSING
  measurable outcomes: MISSING
  evidence/source: MISSING
  evidence location: MISSING
  verification status: MISSING
  publication status: MISSING
  last verified: MISSING
```

`contribution / scope` identifica específicamente qué hizo Carlos. `evidence location` puede referirse posteriormente a CV, capturas, repositorios, documentos, commits u otra evidencia. No todo lo confirmado tiene que hacerse público.

## Projects

Preparar una entrada por cada proyecto. No presentar como hecho ningún proyecto que no tenga evidencia o confirmación.

```yaml
- project name: MISSING
  summary: MISSING
  problem: MISSING
  solution: MISSING
  role: MISSING
  ownership / contribution: MISSING
  collaborators / team context: MISSING
  stack: MISSING
  architecture: MISSING
  notable technical decisions: MISSING
  challenges solved: MISSING
  outcome: MISSING
  repository: MISSING
  live URL: MISSING
  screenshots/assets: MISSING
  public/private status: MISSING
  evidence: MISSING
  evidence location: MISSING
  verification status: MISSING
  publication status: MISSING
  last verified: MISSING
```

Evitar presentar trabajo colectivo como si Carlos hubiera sido el único autor cuando no sea cierto.

## Technical Skills

Registrar únicamente tecnologías y herramientas confirmadas, sin porcentajes ni niveles ficticios.

Cada tecnología que finalmente pase a `CONFIRMED` debería poder asociarse al menos a una evidencia o contexto de uso real, por ejemplo:

- empleo
- proyecto
- repositorio
- sistema implementado
- documentación verificable

No usar porcentajes, estrellas ni etiquetas arbitrarias como “90% experto”.

- Frontend — MISSING
- Backend — MISSING
- Databases / ORM — MISSING
- DevOps / Deployment — MISSING
- Linux / Servers — MISSING
- Infrastructure / Networking — MISSING
- IT Support — MISSING
- Tools / Collaboration — MISSING

## Education

Preparar una entrada por institución o programa:

```yaml
- institution: MISSING
  degree: MISSING
  dates: MISSING
  status: MISSING
  relevant details: MISSING
  evidence/source: MISSING
  evidence location: MISSING
  verification: MISSING
  publication status: MISSING
  last verified: MISSING
```

## Certifications / Courses

Preparar una entrada por certificación o curso, sin inventar certificaciones.

```yaml
- name: MISSING
  provider: MISSING
  date: MISSING
  credential URL / ID: MISSING
  evidence: MISSING
  evidence location: MISSING
  verification: MISSING
  publication status: MISSING
  last verified: MISSING
```

## Professional Links

Para cada enlace deberemos poder registrar:

```yaml
- name: MISSING
  URL: MISSING
  verification status: MISSING
  publication status: MISSING
```

No agregar URLs inventadas.

## CV

- PDF final pendiente de incorporar.
- Nombre de archivo pendiente.
- Última revisión pendiente.
- Consistencia con el portfolio pendiente.

Antes de publicar el CV debemos comprobar:

- fechas consistentes con el portfolio
- cargos consistentes
- tecnologías consistentes
- datos de contacto públicos correctos
- ausencia de datos personales que no deban hacerse públicos
- versión y fecha de actualización

## Visual Assets

Necesidades futuras:

- fotografía profesional
- logo/monograma personal si se decide usar
- screenshots de proyectos
- Open Graph image
- favicon
- imágenes/capturas de casos de estudio
- consentimiento/aprobación para publicar fotografías personales
- derechos o autorización para publicar imágenes de proyectos/clientes cuando corresponda
- versión optimizada para web

## Open Questions

Acumular aquí las preguntas que deban resolverse antes del diseño.

- ¿Qué nombre profesional y headline deben mostrarse públicamente?
- ¿Qué ubicación y disponibilidad desea comunicar Carlos?
- ¿Qué experiencias y proyectos cuentan con evidencia disponible?
- ¿Qué enlaces profesionales y forma de contacto deben publicarse?
- ¿Qué assets visuales son necesarios y cuáles están disponibles?
- ¿Qué información confirmada debe permanecer privada?
- ¿Qué proyectos pueden mostrarse públicamente?
- ¿Qué repositorios pueden enlazarse?
- ¿Qué screenshots o información de clientes se pueden publicar?
- ¿Qué datos personales deben excluirse del CV público?

## Content Rule

Nada pasa de `NEEDS VERIFICATION` a `CONFIRMED` sin evidencia o confirmación explícita.

El diseño final debe construirse sobre contenido confirmado, no sobre suposiciones.

- `CONFIRMED` no significa automáticamente `PUBLIC`.
- La evidencia puede permanecer privada aunque el dato derivado sea público.
- Ningún secreto, credencial, dato sensible o información confidencial de empleadores/clientes debe publicarse.
- Las contribuciones deben atribuirse correctamente.
- No usar métricas si no pueden respaldarse.
