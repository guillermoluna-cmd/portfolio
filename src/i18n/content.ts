// Todo el texto de la web vive aquí, en español (es) e inglés (en).
// Para cambiar un texto, edítalo en ambos idiomas.

export type Lang = 'es' | 'en';

export const profile = {
  name: 'Guillermo Luna',
  fullName: 'Guillermo Luna Aguado',
  email: 'guillermo.luna.ingteleco@gmail.com',
  // Rellena estos enlaces cuando los tengas; los vacíos no se muestran.
  linkedin: '',
  github: 'https://github.com/guillermoluna-cmd',
  calendly: '',
};

const es = {
  meta: {
    title: 'Guillermo Luna · Desarrollo, Automatización e IA',
    description:
      'Ingeniero de Telecomunicación y desarrollador full-stack. Desarrollo de software a medida, automatización de procesos con IA y cierre de ventas para empresas. Trabajo en remoto.',
  },
  nav: {
    services: 'Servicios',
    process: 'Cómo trabajo',
    work: 'Proyectos',
    about: 'Sobre mí',
    faq: 'FAQ',
    cta: 'Hablemos',
  },
  hero: {
    badge: 'Disponible para nuevos proyectos · Remoto',
    titleA: 'Software, automatización e IA',
    titleB: 'para que tu negocio',
    rotating: ['venda más.', 'trabaje menos.', 'escale sin fricción.'],
    subtitle:
      'Soy Guillermo, ingeniero de Telecomunicación y desarrollador full-stack con más de 5 años construyendo software para aseguradoras e industria. Ahora ayudo a empresas a automatizar procesos, integrar IA y cerrar más ventas.',
    primary: 'Agenda una llamada gratuita',
    secondary: 'Ver servicios',
    stats: [
      { value: '5+', label: 'años desarrollando software' },
      { value: '4', label: 'grandes clientes corporativos' },
      { value: '2', label: 'másteres en ingeniería' },
      { value: '4', label: 'idiomas de trabajo' },
    ],
  },
  trusted: 'He desarrollado software para',
  services: {
    eyebrow: 'Servicios',
    title: 'Tres formas de hacer crecer tu negocio',
    intro:
      'Desde la idea hasta el sistema en producción, y desde el primer contacto con tu cliente hasta la firma.',
    items: [
      {
        key: 'dev',
        title: 'Desarrollo de software',
        tag: 'Freelance remoto',
        desc: 'Aplicaciones web, APIs y backends robustos con estándares de empresa, listos para crecer contigo.',
        points: [
          'Aplicaciones web a medida (Angular, TypeScript)',
          'APIs y backend con Java y Spring Boot',
          'Bases de datos y migraciones (PostgreSQL, SQL)',
          'Integración con sistemas legacy y modernización',
          'Mantenimiento, soporte y resolución de incidencias',
        ],
      },
      {
        key: 'ai',
        title: 'Automatización e IA',
        tag: 'Para empresas',
        desc: 'Elimino tareas repetitivas y conecto tus herramientas para que tu equipo se centre en lo que aporta valor.',
        points: [
          'Automatización de procesos (n8n, Make, Zapier)',
          'Chatbots y asistentes IA para web y WhatsApp',
          'Agentes IA conectados a tus datos y documentos',
          'Integraciones entre CRM, ERP, email y hojas de cálculo',
          'Extracción automática de datos de facturas y PDFs',
        ],
      },
      {
        key: 'sales',
        title: 'Closer de ventas',
        tag: 'High-ticket · B2B',
        desc: 'Convierto tus leads cualificados en clientes con un proceso de venta consultivo, honesto y orientado a resultados.',
        points: [
          'Llamadas de cierre para ofertas high-ticket',
          'Cualificación y seguimiento de leads',
          'Perfil técnico ideal para productos SaaS y tecnológicos',
          'Venta en español e inglés',
          'Modelo por comisión o fijo + comisión',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Cómo trabajo',
    title: 'Un proceso claro, sin sorpresas',
    steps: [
      { title: 'Llamada de diagnóstico', desc: '30 minutos gratis para entender tu negocio, tus objetivos y dónde se pierde tiempo o dinero.' },
      { title: 'Propuesta cerrada', desc: 'Alcance, plazos y precio por escrito. Sabes exactamente qué recibes y cuándo.' },
      { title: 'Ejecución iterativa', desc: 'Entregas cortas y demos frecuentes. Ves avances reales cada semana, no solo al final.' },
      { title: 'Entrega y soporte', desc: 'Documentación, formación a tu equipo y soporte posterior para que todo siga funcionando.' },
    ],
  },
  work: {
    eyebrow: 'Proyectos',
    title: 'Experiencia en proyectos reales',
    intro: 'Una selección de proyectos en los que he trabajado como desarrollador para grandes empresas.',
    projects: [
      {
        client: 'Arteche',
        sector: 'Industria · Energía',
        title: 'Software para protección y automatización eléctrica',
        desc: 'Desarrollo backend, gestión de configuración, persistencia de datos e integración de sistemas para equipos de protección eléctrica.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'YAML'],
      },
      {
        client: 'Aegon',
        sector: 'Seguros',
        title: 'Nuevo proceso de gestión de autorizaciones',
        desc: 'Diseño y desarrollo de un flujo de autorizaciones de principio a fin, desde la interfaz hasta la nube.',
        tech: ['Angular', 'TypeScript', 'Java', 'AWS'],
      },
      {
        client: 'SegurCaixa Adeslas',
        sector: 'Seguros de salud',
        title: 'Aplicaciones web y móvil del sector salud',
        desc: 'Mantenimiento y evolución de aplicaciones con nuevas funcionalidades, resolución de incidencias y cambios en base de datos.',
        tech: ['Angular', 'TypeScript', 'Java', 'SQL'],
      },
      {
        client: 'MAPFRE',
        sector: 'Seguros',
        title: 'Módulo de gestión fiscal',
        desc: 'Desarrollo y mantenimiento de una aplicación de gestión de impuestos integrada con sistemas legacy.',
        tech: ['Angular', 'TypeScript', 'Java', 'COBOL'],
      },
    ],
    casesTitle: 'Ejemplos de automatización que puedo construir para ti',
    casesNote: 'Casos tipo para ilustrar lo que es posible. Cada solución se adapta a tu negocio.',
    cases: [
      { title: 'Atención al cliente 24/7', desc: 'Asistente IA en WhatsApp o web que responde dudas frecuentes, agenda citas y deriva a una persona cuando hace falta.', result: 'Menos tiempo respondiendo lo mismo' },
      { title: 'Leads directos al CRM', desc: 'Cada formulario, email o anuncio crea el contacto en tu CRM, lo puntúa y avisa al comercial adecuado al instante.', result: 'Ningún lead se queda sin respuesta' },
      { title: 'Facturas sin teclear', desc: 'La IA lee facturas y albaranes en PDF, extrae los datos y los registra en tu hoja de cálculo o ERP.', result: 'Horas de trabajo manual recuperadas' },
      { title: 'Informes automáticos', desc: 'Datos de ventas, marketing y operaciones reunidos en un informe que llega solo cada lunes a tu correo.', result: 'Decisiones con datos al día' },
    ],
  },
  about: {
    eyebrow: 'Sobre mí',
    title: 'Ingeniero de base, resolutivo por naturaleza',
    paragraphs: [
      'Soy Ingeniero de Telecomunicación con dos especializaciones de posgrado en Ingeniería Biomédica (Universidad Politécnica de Madrid y Università degli Studi di Padova) y más de cinco años de experiencia en software complejo y sistemas industriales.',
      'He trabajado en entornos multidisciplinares para aseguradoras y para la industria eléctrica: integración de sistemas, resolución de problemas técnicos y desarrollo full-stack. Esa mezcla de ingeniería y negocio es la que aplico ahora a cada cliente: entender el problema real y construir la solución más sencilla que lo resuelve.',
    ],
    experienceTitle: 'Experiencia',
    experience: [
      { role: 'Software Engineer', company: 'Arteche', period: 'Nov 2024 – Actualidad' },
      { role: 'Java Full-Stack Developer', company: 'NFQ Advisory, Solutions & Outsourcing', period: 'Feb 2021 – Nov 2024' },
    ],
    educationTitle: 'Formación',
    education: [
      { title: 'International Master ICT for Internet and Multimedia', place: 'Università degli Studi di Padova · Biomedical Engineering track', period: '2018 – 2020' },
      { title: 'Máster Universitario en Ingeniería de Telecomunicación', place: 'Universidad Politécnica de Madrid · Biomedical Engineering track', period: '2017 – 2020' },
      { title: 'Grado en Ingeniería de Tecnologías y Servicios de Telecomunicación', place: 'Universidad Autónoma de Madrid · Sonido e Imagen', period: '2011 – 2017' },
    ],
    stackTitle: 'Stack tecnológico',
    stack: [
      { group: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'C/C++', 'COBOL'] },
      { group: 'Frontend', items: ['Angular', 'TypeScript', 'HTML/CSS'] },
      { group: 'Datos', items: ['PostgreSQL', 'SQL', 'YAML', 'XML', 'MATLAB', 'RStudio'] },
      { group: 'Automatización e IA', items: ['n8n', 'Make', 'Zapier', 'APIs de LLMs', 'AWS'] },
      { group: 'Metodología', items: ['Scrum', 'Agile', 'Integración de sistemas'] },
    ],
  },
  languages: {
    eyebrow: 'Idiomas',
    title: 'Trabajo con clientes de toda Europa',
    items: [
      { name: 'Español', level: 'Nativo', value: 100 },
      { name: 'Inglés', level: 'Avanzado profesional', value: 85 },
      { name: 'Italiano', level: 'Principiante', value: 30 },
      { name: 'Alemán', level: 'Principiante', value: 25 },
    ],
    remote: 'Trabajo 100% en remoto desde España (CET), con solapamiento horario con Europa y la costa este de EE. UU.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que suelen preguntarme',
    items: [
      { q: '¿Cuánto cuesta un proyecto?', a: 'Depende del alcance. Tras una llamada gratuita de 30 minutos te envío una propuesta con precio cerrado, sin sorpresas. También trabajo por horas o con una cuota mensual de mantenimiento.' },
      { q: '¿Trabajas solo en remoto?', a: 'Sí, trabajo en remoto con clientes de España y del resto de Europa. Uso videollamadas, herramientas de gestión compartidas y comunicación asíncrona para que siempre sepas cómo va tu proyecto.' },
      { q: '¿Qué tipo de procesos se pueden automatizar?', a: 'Casi cualquier tarea repetitiva basada en reglas: gestión de leads, respuestas a clientes, facturación, informes, sincronización entre herramientas o clasificación de documentos. En la primera llamada identificamos los procesos con más retorno.' },
      { q: '¿Cómo funciona el servicio de closer de ventas?', a: 'Tú generas los leads y yo me encargo de las llamadas de cierre siguiendo un guion consultivo alineado con tu oferta. Normalmente trabajo a comisión sobre ventas cerradas, o con un fijo más comisión.' },
      { q: '¿Firmas acuerdos de confidencialidad?', a: 'Por supuesto. Estoy acostumbrado a trabajar con datos sensibles de aseguradoras y del sector salud, y firmo un NDA antes de acceder a tu información.' },
      { q: '¿En qué idiomas puedo trabajar contigo?', a: 'En español e inglés con total fluidez. También me defiendo a nivel básico en italiano y alemán.' },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Tienes un proyecto en mente?',
    subtitle: 'Cuéntame qué necesitas y te respondo en menos de 24 horas laborables con los siguientes pasos.',
    email: 'Escríbeme un email',
    call: 'Agenda una llamada',
    copy: 'Copiar email',
    copied: '¡Copiado!',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    built: 'Diseñado y desarrollado por Guillermo Luna.',
  },
  switchLang: 'EN',
  switchLangLabel: 'View in English',
  themeLabel: 'Cambiar tema claro/oscuro',
  menuLabel: 'Abrir menú',
};

const en: typeof es = {
  meta: {
    title: 'Guillermo Luna · Software, Automation & AI',
    description:
      'Telecommunications engineer and full-stack developer. Custom software development, AI-powered process automation and sales closing for businesses. Fully remote.',
  },
  nav: {
    services: 'Services',
    process: 'Process',
    work: 'Work',
    about: 'About',
    faq: 'FAQ',
    cta: "Let's talk",
  },
  hero: {
    badge: 'Available for new projects · Remote',
    titleA: 'Software, automation & AI',
    titleB: 'that help your business',
    rotating: ['sell more.', 'work less.', 'scale smoothly.'],
    subtitle:
      "I'm Guillermo, a telecommunications engineer and full-stack developer with 5+ years building software for insurers and industry. Today I help companies automate processes, adopt AI and close more deals.",
    primary: 'Book a free call',
    secondary: 'See services',
    stats: [
      { value: '5+', label: 'years building software' },
      { value: '4', label: 'major corporate clients' },
      { value: '2', label: "engineering master's degrees" },
      { value: '4', label: 'working languages' },
    ],
  },
  trusted: "I've built software for",
  services: {
    eyebrow: 'Services',
    title: 'Three ways to grow your business',
    intro: 'From idea to production system, and from first contact with your customer to the signed deal.',
    items: [
      {
        key: 'dev',
        title: 'Software development',
        tag: 'Remote freelance',
        desc: 'Web apps, APIs and robust backends built to enterprise standards, ready to grow with you.',
        points: [
          'Custom web applications (Angular, TypeScript)',
          'APIs and backends with Java and Spring Boot',
          'Databases and migrations (PostgreSQL, SQL)',
          'Legacy system integration and modernisation',
          'Maintenance, support and troubleshooting',
        ],
      },
      {
        key: 'ai',
        title: 'Automation & AI',
        tag: 'For businesses',
        desc: 'I remove repetitive work and connect your tools so your team can focus on what actually adds value.',
        points: [
          'Process automation (n8n, Make, Zapier)',
          'AI chatbots and assistants for web and WhatsApp',
          'AI agents connected to your data and documents',
          'Integrations across CRM, ERP, email and spreadsheets',
          'Automatic data extraction from invoices and PDFs',
        ],
      },
      {
        key: 'sales',
        title: 'Sales closer',
        tag: 'High-ticket · B2B',
        desc: 'I turn your qualified leads into customers through a consultative, honest, results-driven sales process.',
        points: [
          'Closing calls for high-ticket offers',
          'Lead qualification and follow-up',
          'Technical profile, ideal for SaaS and tech products',
          'Selling in Spanish and English',
          'Commission-only or base + commission',
        ],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'A clear process, no surprises',
    steps: [
      { title: 'Discovery call', desc: 'A free 30-minute call to understand your business, your goals and where time or money is being lost.' },
      { title: 'Fixed proposal', desc: 'Scope, timeline and price in writing. You know exactly what you get and when.' },
      { title: 'Iterative delivery', desc: 'Short iterations and frequent demos. You see real progress every week, not just at the end.' },
      { title: 'Handover & support', desc: 'Documentation, training for your team and ongoing support so everything keeps running.' },
    ],
  },
  work: {
    eyebrow: 'Work',
    title: 'Experience on real-world projects',
    intro: "A selection of projects I've worked on as a developer for large companies.",
    projects: [
      {
        client: 'Arteche',
        sector: 'Industry · Energy',
        title: 'Software for electrical protection & automation',
        desc: 'Backend development, configuration management, data persistence and systems integration for electrical protection equipment.',
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular', 'YAML'],
      },
      {
        client: 'Aegon',
        sector: 'Insurance',
        title: 'New authorisation management process',
        desc: 'End-to-end design and development of an authorisation workflow, from the UI to the cloud.',
        tech: ['Angular', 'TypeScript', 'Java', 'AWS'],
      },
      {
        client: 'SegurCaixa Adeslas',
        sector: 'Health insurance',
        title: 'Web & mobile apps for the health sector',
        desc: 'Maintained and extended applications with new features, issue resolution and database changes.',
        tech: ['Angular', 'TypeScript', 'Java', 'SQL'],
      },
      {
        client: 'MAPFRE',
        sector: 'Insurance',
        title: 'Tax management module',
        desc: 'Developed and maintained a tax management application integrated with legacy systems.',
        tech: ['Angular', 'TypeScript', 'Java', 'COBOL'],
      },
    ],
    casesTitle: 'Automations I can build for you',
    casesNote: "Example use cases to show what's possible. Every solution is tailored to your business.",
    cases: [
      { title: '24/7 customer support', desc: 'An AI assistant on WhatsApp or your website that answers FAQs, books appointments and hands off to a human when needed.', result: 'Less time answering the same questions' },
      { title: 'Leads straight to your CRM', desc: 'Every form, email or ad creates the contact in your CRM, scores it and instantly alerts the right salesperson.', result: 'No lead left unanswered' },
      { title: 'Invoices without typing', desc: 'AI reads PDF invoices and delivery notes, extracts the data and records it in your spreadsheet or ERP.', result: 'Hours of manual work recovered' },
      { title: 'Automatic reports', desc: 'Sales, marketing and operations data gathered into a report that lands in your inbox every Monday.', result: 'Decisions based on up-to-date data' },
    ],
  },
  about: {
    eyebrow: 'About',
    title: 'An engineer at heart, a problem-solver by nature',
    paragraphs: [
      "I'm a Telecommunications Engineer with two postgraduate specialisations in Biomedical Engineering (Universidad Politécnica de Madrid and Università degli Studi di Padova) and over five years of experience in complex software and industrial systems.",
      "I've worked in multidisciplinary teams for insurers and the electrical industry: systems integration, technical troubleshooting and full-stack development. I bring that mix of engineering and business to every client: understand the real problem, then build the simplest solution that solves it.",
    ],
    experienceTitle: 'Experience',
    experience: [
      { role: 'Software Engineer', company: 'Arteche', period: 'Nov 2024 – Present' },
      { role: 'Java Full-Stack Developer', company: 'NFQ Advisory, Solutions & Outsourcing', period: 'Feb 2021 – Nov 2024' },
    ],
    educationTitle: 'Education',
    education: [
      { title: 'International Master ICT for Internet and Multimedia', place: 'Università degli Studi di Padova · Biomedical Engineering track', period: '2018 – 2020' },
      { title: "Master's Degree in Telecommunications Engineering", place: 'Universidad Politécnica de Madrid · Biomedical Engineering track', period: '2017 – 2020' },
      { title: "Bachelor's Degree in Telecommunications Technologies and Services Engineering", place: 'Universidad Autónoma de Madrid · Sound and Image', period: '2011 – 2017' },
    ],
    stackTitle: 'Tech stack',
    stack: [
      { group: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'C/C++', 'COBOL'] },
      { group: 'Frontend', items: ['Angular', 'TypeScript', 'HTML/CSS'] },
      { group: 'Data', items: ['PostgreSQL', 'SQL', 'YAML', 'XML', 'MATLAB', 'RStudio'] },
      { group: 'Automation & AI', items: ['n8n', 'Make', 'Zapier', 'LLM APIs', 'AWS'] },
      { group: 'Ways of working', items: ['Scrum', 'Agile', 'Systems integration'] },
    ],
  },
  languages: {
    eyebrow: 'Languages',
    title: 'Working with clients across Europe',
    items: [
      { name: 'Spanish', level: 'Native', value: 100 },
      { name: 'English', level: 'Advanced professional', value: 85 },
      { name: 'Italian', level: 'Beginner', value: 30 },
      { name: 'German', level: 'Beginner', value: 25 },
    ],
    remote: 'Fully remote from Spain (CET), with working-hour overlap across Europe and the US East Coast.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions I often get',
    items: [
      { q: 'How much does a project cost?', a: 'It depends on scope. After a free 30-minute call I send you a fixed-price proposal, no surprises. I also work hourly or on a monthly maintenance retainer.' },
      { q: 'Do you only work remotely?', a: 'Yes, I work remotely with clients in Spain and across Europe, using video calls, shared project tools and async communication so you always know where your project stands.' },
      { q: 'What kind of processes can be automated?', a: 'Almost any repetitive, rule-based task: lead management, customer replies, invoicing, reporting, syncing between tools or document classification. On our first call we find the processes with the highest return.' },
      { q: 'How does the sales closer service work?', a: 'You generate the leads and I handle the closing calls with a consultative script aligned with your offer. I usually work on commission on closed deals, or base plus commission.' },
      { q: 'Do you sign NDAs?', a: "Of course. I'm used to handling sensitive data from insurers and the health sector, and I sign an NDA before accessing your information." },
      { q: 'Which languages can we work in?', a: 'Spanish and English, fully fluent. I can also get by in Italian and German at a basic level.' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Have a project in mind?',
    subtitle: "Tell me what you need and I'll get back to you within one business day with next steps.",
    email: 'Send me an email',
    call: 'Book a call',
    copy: 'Copy email',
    copied: 'Copied!',
  },
  footer: {
    rights: 'All rights reserved.',
    built: 'Designed and built by Guillermo Luna.',
  },
  switchLang: 'ES',
  switchLangLabel: 'Ver en español',
  themeLabel: 'Toggle light/dark theme',
  menuLabel: 'Open menu',
};

export const content = { es, en };
export type Content = typeof es;
