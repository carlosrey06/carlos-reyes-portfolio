export const featuredProjects = [
  { id: 'frio-puro', name: 'Frío Puro', status: 'En producción', type: 'Sitio corporativo y contenido', description: 'Sitio corporativo de suministro comercial de hielo, con información de producto, operación, proceso de producción y contacto.', contribution: 'Desarrollo integral', technologies: ['Astro', 'TypeScript', 'MySQL', 'Drizzle ORM', 'Docker', 'Traefik'], url: 'https://friopuro.com.mx', domain: 'friopuro.com.mx', image: '/images/projects/frio-puro.webp', imageSmall: '/images/projects/frio-puro-960.webp', imageAlt: 'Captura de la portada del sitio corporativo de Frío Puro.' },
  { id: 'haight-ashbury-coffee', name: 'Haight Ashbury Coffee Co.', status: 'Publicado', type: 'Sitio web para café de especialidad', description: 'Sitio de una cafetería de especialidad en Villahermosa, con secciones de historia, menú, eventos y tienda.', technologies: [], url: 'https://coffe.yollotdp.com/', domain: 'coffe.yollotdp.com', image: '/images/projects/haight-ashbury.webp', imageSmall: '/images/projects/haight-ashbury-960.webp', imageAlt: 'Captura de la página de Haight Ashbury Coffee Co.' },
  { id: 'stark-haus', name: 'STARK / HAUS', status: 'Concepto web publicado', type: 'Sitio conceptual de arquitectura e inmobiliaria', description: 'Demostración conceptual de arquitectura e inmobiliaria con una presentación editorial de proyectos residenciales.', technologies: [], url: 'https://bienesraices.yollotdp.com/', domain: 'bienesraices.yollotdp.com', image: '/images/projects/stark-haus.webp', imageSmall: '/images/projects/stark-haus-960.webp', imageAlt: 'Captura del concepto web de arquitectura e inmobiliaria STARK / HAUS.' },
  { id: 'didilazos', name: 'Didilazos', status: 'Publicado', type: 'Sitio web de accesorios y catálogo', description: 'Sitio de moños y accesorios que presenta colecciones, catálogo de productos y opciones para consultar diseños.', technologies: [], url: 'https://didilazos.yollotdp.com/', domain: 'didilazos.yollotdp.com', image: '/images/projects/didilazos.webp', imageSmall: '/images/projects/didilazos-960.webp', imageAlt: 'Captura de la página de Didilazos con su catálogo de moños y accesorios.' },
] as const;

export const moreProjects = [
  { name: 'P.U.L.S.E.', description: 'Automatización del procesamiento y actualización controlada de información de precios.', status: 'En producción', technologies: ['Google Apps Script', 'Google Sheets', 'JavaScript', 'Slack'] },
  { name: 'IMXTime', description: 'Sistema interno para asistencia, jornadas, horarios, vacaciones e incidencias.', status: 'En producción', technologies: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Docker Compose'] },
  { name: 'YollotDP', description: 'Iniciativa de soluciones digitales y software a medida, cofundada con Victor Zuñiga y Brhayan Ramos.', status: 'Iniciativa', technologies: ['PHP', 'Laravel', 'MySQL', 'Tailwind CSS', 'Docker', 'Nginx'], url: 'https://yollotdp.com/', contribution: 'Cofundador · Full Stack Developer' },
  { name: 'Sellers', description: 'Plataforma B2B para sellers, proveedores y marcas interesadas en comercializar productos en México.', status: 'En producción', technologies: ['Astro', 'TypeScript', 'SSR', 'MySQL', 'Docker', 'Traefik'], url: 'https://sellers.importacionesamexico.com.mx', contribution: 'Desarrollo colaborativo con Victor Zuñiga' },
  { name: 'V.A.U.L.T.', description: 'Sistema multiempresa para inventario, administración y trazabilidad de activos.', status: 'En desarrollo', technologies: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Drizzle ORM', 'Docker'], contribution: 'Desarrollo integral' },
  { name: 'ARCH', description: 'Plataforma personal de gestión financiera para organizar cuentas, movimientos y obligaciones.', status: 'En desarrollo', technologies: ['Next.js', 'TypeScript', 'MySQL', 'Drizzle ORM', 'Better Auth', 'Docker'], contribution: 'Desarrollo integral' },
] as const;

export const explorations = [
  {
    name: 'Cadebot L100 / MiRobot',
    kind: 'Sitio web publicado',
    description: 'Landing page comercial del robot mesero Cadebot L100.',
    contribution: 'Diseño y desarrollo integral',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://www.importacionesamexico.com.mx/cadebot',
    image: '/images/projects/cadebot.webp',
    imageAlt: 'Captura del sitio MiRobot para el robot mesero Cadebot L100.',
    imageWidth: 1600,
    imageHeight: 802,
    imageSources: ['/images/projects/cadebot-640.webp', '/images/projects/cadebot-960.webp'],
  },
  {
    name: 'AERYX Beauty Lab',
    kind: 'Concepto de demostración',
    description: 'Exploración visual de una interfaz de belleza. Es un concepto de diseño, no un producto publicado ni un trabajo para un cliente.',
    image: '/images/projects/aeryx-beauty-lab.webp',
    imageAlt: 'Captura del concepto de demostración AERYX Beauty Lab con una propuesta editorial de belleza y servicios.',
    imageWidth: 1600,
    imageHeight: 803,
    imageSources: ['/images/projects/aeryx-beauty-lab-640.webp', '/images/projects/aeryx-beauty-lab-960.webp'],
  },
] as const;

export const experience = [
  { company: 'Importaciones a México', role: 'Especialista TI', dates: 'Feb 2026 — Sep 2026', summary: 'Desarrollo de aplicaciones y sitios comerciales; APIs, datos, automatización, despliegue y soporte TI.', context: 'TypeScript · React · Astro · Node.js · Docker' },
  { company: 'Laboratorios Chontalpa', role: 'Soporte TI', dates: 'Nov 2024 — Feb 2026', summary: 'Atención N1/N2, diagnóstico de equipos y conectividad, soporte presencial y remoto, y documentación.', context: 'Service Desk · Redes · Soporte' },
  { company: 'Soriana', role: 'Administrador de sistemas / Soporte TI', dates: 'Jun 2024 — Nov 2024', summary: 'Diagnóstico de incidencias de hardware, software y conectividad, además de monitoreo y respaldos.', context: 'Sistemas · Redes · Soporte' },
  { company: 'SICCOMS', role: 'Desarrollador Full Stack / Stack PHP', dates: 'Oct 2023 — Ago 2024', summary: 'Desarrollo y mantenimiento de aplicaciones web, APIs y bases de datos; pruebas y despliegues.', context: 'PHP · Laravel · CodeIgniter · Livewire · MySQL' },
] as const;

export const contact = {
  email: 'carlos64.cr68@gmail.com',
  github: 'https://github.com/carlosrey06',
  linkedin: 'https://www.linkedin.com/in/carlos-reyes-03b95b2aa',
  phone: 'tel:9934263748',
  cv: '/cv/Carlos_Reyes_CV.pdf',
};
