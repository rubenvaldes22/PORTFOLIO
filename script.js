const yearElement = document.getElementById('year');
const languageToggle = document.getElementById('lang-toggle');
const showProfileButton = document.getElementById('show-profile');
const sharePortfolioButton = document.getElementById('share-portfolio');
const currentYear = new Date().getFullYear();
const defaultLanguage = 'es';
let currentLanguage = defaultLanguage;

const translations = {
  'languageSwitcher': { es: 'English', en: 'Español' },
  'share-button': { es: 'Compartir', en: 'Share' },
  'share-copied': { es: 'Enlace copiado', en: 'Link copied' },
  'nav-link-strengths': { es: 'Fortalezas', en: 'Strengths' },
  'nav-link-experience': { es: 'Experiencia', en: 'Experience' },
  'nav-link-projects': { es: 'Proyectos', en: 'Projects' },
  'nav-link-education': { es: 'Educación', en: 'Education' },
  'nav-link-skills': { es: 'Competencias', en: 'Skills' },
  'nav-link-about': { es: 'Sobre mí', en: 'About' },
  'nav-link-contact': { es: 'Contacto', en: 'Contact' },
  'page-title': { es: 'Rubén Valdés Ruiz | Desarrollador Web y Salesforce', en: 'Rubén Valdés Ruiz | Web and Salesforce Developer' },
  'meta-description': { es: 'Portafolio profesional de Rubén Valdés Ruiz, Técnico Superior en Desarrollo de Aplicaciones Web con experiencia en Salesforce, desarrollo full stack y despliegue de soluciones web.', en: 'Professional portfolio of Rubén Valdés Ruiz, Higher Technician in Web Application Development with experience in Salesforce, full stack development and web solution deployment.' },
  'hero-eyebrow': { es: 'Portfolio profesional', en: 'Professional portfolio' },
  'hero-lead-1': {
    es: 'Técnico Superior en Desarrollo de Aplicaciones Web con experiencia en Salesforce, desarrollo full stack y trabajo en equipos ágiles. Busco incorporarme en entornos profesionales donde aportar soluciones robustas y crecer en responsabilidad técnica.',
    en: 'Higher Technician in Web Application Development with experience in Salesforce, full stack development and agile teams. I am looking to join professional environments where I can contribute robust solutions and grow in technical responsibility.'
  },
  'hero-button-profile': { es: 'Mi perfil', en: 'My profile' },
  'hero-button-contact': { es: 'Contactar', en: 'Contact' },
  'hero-lead-2': {
    es: 'Cuento con experiencia en análisis de requisitos, diseño de APIs, integración CRM, pruebas, documentación y entrega de software con atención a calidad. Soy responsable, proactivo y preparado para asumir tareas técnicas durante todo el ciclo de desarrollo.',
    en: 'I have experience in requirements analysis, API design, CRM integration, testing, documentation and software delivery with a focus on quality. I am responsible, proactive and ready to take on technical tasks throughout the development lifecycle.'
  },
  'hero-highlight-1': { es: 'Salesforce, Apex y LWC', en: 'Salesforce, Apex and LWC' },
  'hero-highlight-2': { es: 'Desarrollo front-end y back-end', en: 'Front-end and back-end development' },
  'hero-highlight-3': { es: 'Metodologías ágiles y trabajo en equipo', en: 'Agile methodologies and teamwork' },
  'panel-label-profile': { es: 'Perfil profesional', en: 'Professional profile' },
  'panel-profile-desc': {
    es: 'Desarrollador web con enfoque en soluciones escalables, experiencia CRM y capacidad para entregar código fiable y documentado.',
    en: 'Web developer focused on scalable solutions, CRM experience and the ability to deliver reliable, documented code.'
  },
  'panel-label-area': { es: 'Área', en: 'Area' },
  'panel-area-value': {
    es: 'Junior Web & CRM Developer | Apex, LWC, Java, JavaScript, Python y Django | DAW',
    en: 'Junior Web & CRM Developer | Apex, LWC, Java, JavaScript, Python and Django | DAW'
  },
  'panel-label-experience': { es: 'Experiencia', en: 'Experience' },
  'panel-experience-value': { es: 'Prácticas y proyectos reales', en: 'Internships and real projects' },
  'panel-label-objective': { es: 'Objetivo', en: 'Objective' },
  'panel-objective-value': { es: 'Integrarme en un equipo profesional con retos técnicos, colaboración y enfoque en resultados.', en: 'Joining a professional team with technical challenges, collaboration and a results-driven focus.' },
  'linkedin-eyebrow': { es: 'Fortalezas', en: 'Strengths' },
  'linkedin-heading': { es: 'Resumen profesional y fortalezas', en: 'Professional summary and strengths' },
  'linkedin-description': {
    es: 'Perfil profesional con resultados claros, experiencia técnica y habilidades interpersonales alineadas con un entorno laboral exigente y competitivo.',
    en: 'Professional profile with clear results, technical experience and interpersonal skills aligned with demanding work environments.'
  },
  'feature-label-offer': { es: 'Lo que ofrezco', en: 'What I offer' },
  'feature-heading-offer': { es: 'Un perfil técnico con enfoque práctico', en: 'A technical profile with a practical focus' },
  'feature-text-offer': {
    es: 'Formación técnica en software, experiencia de soporte y habilidad para traducir requisitos en soluciones estables y mantenibles.',
    en: 'Technical training in software, support experience and the ability to translate requirements into stable, maintainable solutions.'
  },
  'feature-offer-1': { es: 'Entrega de soluciones fiables', en: 'Delivery of reliable solutions' },
  'feature-offer-2': { es: 'Comunicación técnica y colaboración', en: 'Technical communication and collaboration' },
  'feature-offer-3': { es: 'Aprendizaje continuo y mejora de procesos', en: 'Continuous learning and process improvement' },
  'feature-label-results': { es: 'Resultados clave', en: 'Key results' },
  'feature-heading-results': { es: 'Experiencia demostrada', en: 'Demonstrated experience' },
  'feature-text-results': {
    es: 'Resultados concretos en despliegue, automatización y soporte, con visión de producto y calidad técnica.',
    en: 'Concrete results in deployment, automation and support, with product vision and technical quality.'
  },
  'feature-results-1': { es: 'Automatización CRM y configuraciones avanzadas', en: 'CRM automation and advanced configurations' },
  'feature-results-2': { es: 'Resolución de incidencias con enfoque práctico', en: 'Practical incident resolution' },
  'feature-results-3': { es: 'Coordinación con equipos técnicos y stakeholders', en: 'Coordination with technical teams and stakeholders' },
  'experience-eyebrow': { es: 'Experiencia', en: 'Experience' },
  'experience-heading': { es: 'Experiencia profesional', en: 'Professional experience' },
  'experience-description': {
    es: 'Experiencia consolidada en entornos técnicos y operativos que aportan versatilidad para puestos de desarrollo, soporte y gestión.',
    en: 'Consolidated experience in technical and operational environments that adds versatility for development, support and management roles.'
  },
  'projects-eyebrow': { es: 'Proyectos', en: 'Projects' },
  'projects-heading': { es: 'Proyectos destacados', en: 'Featured projects' },
  'projects-description': { es: 'Trabajo con aplicaciones reales que conectan tecnología web, automatización y experiencia de usuario.', en: 'Work on real applications connecting web technology, automation and user experience.' },
  'project-1-title': { es: 'Aplicación Mundo Flamenco', en: 'Mundo Flamenco App' },
  'project-1-text': { es: 'TFG Django de guitarra flamenca con catálogo de productos, videotutoriales, clases privadas por Jitsi y asistente de IA. Incluye carrito simulado, comentarios anidados y notificaciones en tiempo real. Proyecto orientado a prototipado con enfoque en experiencia de usuario, integración multimedia y gestión de contenido.', en: 'Django TFG for flamenco guitar with product catalog, video tutorials, private Jitsi classes and AI assistant. Includes simulated shopping cart, nested comments and real-time notifications. Project focused on prototyping with emphasis on user experience, multimedia integration and content management.' },
  'project-1-tech': { es: 'Django 6.0, SQLite, Bootstrap, Jitsi Meet, Python, HTML/CSS y JavaScript', en: 'Django 6.0, SQLite, Bootstrap, Jitsi Meet, Python, HTML/CSS and JavaScript' },
  'project-1-role': { es: 'Desarrollo full stack Django con integración multimedia, carrito de compra y asistente IA', en: 'Full stack Django development with multimedia integration, shopping cart and AI assistant' },
  'project-1-outcome': { es: 'Plataforma educativa y comercial lista para prototipado, con clases en vivo, IA conversacional y gestión de contenido.', en: 'Educational and commercial platform ready for prototyping, with live classes, conversational AI and content management.' },
  'project-1-link': { es: 'Ver proyecto', en: 'View project' },
  'project-2-title': { es: 'Aplicación Casino', en: 'Casino App' },
  'project-2-text': { es: 'Plataforma web de casino desarrollada con Django y PostgreSQL dockerizado. Incluye autenticación personalizada, paneles CRUD, tienda virtual y minijuegos integrados (slots, blackjack, ruleta) con economía de chips. Trabajo grupal completado en 3 semanas con arquitectura modular, middlewares reutilizables y metodología ágil.', en: 'Casino web platform built with Django and dockerized PostgreSQL. Features custom authentication, CRUD panels, virtual store, and integrated mini-games (slots, blackjack, roulette) with chip economy. Collaborative work completed in 3 weeks with modular architecture, reusable middlewares and agile methodology.' },
  'project-2-tech': { es: 'Django, PostgreSQL, Docker, Python, HTML/CSS y JavaScript', en: 'Django, PostgreSQL, Docker, Python, HTML/CSS and JavaScript' },
  'project-2-role': { es: 'Trabajo grupal: Sergio Lechuga Márquez, Rubén Valdés Ruiz y Francisco Naranjo Narváez. Desarrollo full stack con arquitectura modular y flujo basado en ramas de características.', en: 'Team work: Sergio Lechuga Márquez, Rubén Valdés Ruiz and Francisco Naranjo Narváez. Full stack development with modular architecture and feature-branch workflow.' },
  'project-2-outcome': { es: 'Plataforma funcional con minijuegos interactivos, sistema de economía virtual, paneles CRUD, middlewares de auditoría y arquitectura escalable lista para producción.', en: 'Functional platform with interactive mini-games, virtual economy system, CRUD panels, audit middlewares and production-ready scalable architecture.' },
  'project-2-link': { es: 'Ver repositorio', en: 'View repository' },
  'project-3-title': { es: 'Proyecto Final SRCAV', en: 'SRCAV Final Project' },
  'project-3-text': { es: 'Proyecto final backend de gestión académica con Node.js/Express y MongoDB. Gestiona usuarios, actividades y entregas, soporta subida de archivos, mensajería interna y administración de recursos. Incluye JWT para seguridad, cifrado de contraseñas, validación de datos y despliegue con Docker Compose y Nginx.', en: 'Final backend project for academic management with Node.js/Express and MongoDB. Manages users, activities and submissions, supports file uploads, internal messaging and resource administration. Includes JWT security, password hashing, data validation and deployment with Docker Compose and Nginx.' },
  'project-3-tech': { es: 'Node.js, Express, MongoDB, JWT, Docker y Nginx', en: 'Node.js, Express, MongoDB, JWT, Docker and Nginx' },
  'project-3-role': { es: 'Desarrollo backend y arquitectura de API para plataforma académica', en: 'Backend development and API architecture for an academic platform' },
  'project-3-outcome': { es: 'Sistema completo de actividades, archivo de entregas y administración de usuarios.', en: 'Complete activities system, submission storage and user administration.' },
  'project-3-link': { es: 'Ver repositorio', en: 'View repository' },
  'about-github-link': { es: 'Perfil GitHub', en: 'GitHub profile' },
  'experience-card-1-title': { es: 'Prácticas de Desarrollo Web', en: 'Web Development Internship' },
  'experience-card-1-text': {
    es: 'Evolf, a Merkle Solution. Participación en proyectos Salesforce con desarrollo en Apex y LWC, automatización de procesos, configuración avanzada de plataforma y resolución proactiva de incidencias en CRM para clientes. Colaboración con equipos técnicos para depurar flujos, optimizar formularios y entregar soluciones fiables.',
    en: 'Evolf, a Merkle Solution. Participation in Salesforce projects with Apex and LWC development, process automation, advanced platform configuration and proactive CRM incident resolution for clients. Collaborated with technical teams to debug workflows, optimize forms and deliver reliable solutions.'
  },
  'experience-card-1-date': { es: 'Febrero 2026 a Junio 2026', en: 'February 2026 to June 2026' },
  'experience-card-1-tech': { es: 'Salesforce, Apex y LWC', en: 'Salesforce, Apex and LWC' },
  'experience-card-1-summary': { es: 'Automatización y soporte técnico', en: 'Automation and technical support' },
  'experience-card-2-title': { es: 'Asistente en Eventos Comunitarios', en: 'Community Events Assistant' },
  'experience-card-2-text': {
    es: 'Empresa familiar. Coordinación de eventos, gestión de tareas y comunicación con participantes, desarrollando habilidades en organización y atención al cliente.',
    en: 'Family business. Event coordination, task management and communication with attendees, developing skills in organization and customer care.'
  },
  'experience-card-2-date': { es: '2023 a presente', en: '2023 to present' },
  'experience-card-2-skill': { es: 'Organización', en: 'Organization' },
  'experience-card-2-summary': { es: 'Comunicación y planificación', en: 'Communication and planning' },
  'experience-card-3-title': { es: 'Soporte Técnico y Operativo', en: 'Technical and Operational Support' },
  'experience-card-3-text': {
    es: 'Empresa familiar. Gestión operativa de proyectos, supervisión de tareas, resolución de incidencias y cumplimiento de normas de seguridad.',
    en: 'Family business. Operational project management, task supervision, incident resolution and compliance with safety standards.'
  },
  'experience-card-3-date': { es: '2024 a 2025', en: '2024 to 2025' },
  'experience-card-3-skill': { es: 'Gestión operativa', en: 'Operational management' },
  'experience-card-3-summary': { es: 'Resultados y cumplimiento', en: 'Results and compliance' },
  'education-eyebrow': { es: 'Educación', en: 'Education' },
  'education-heading': { es: 'Formación académica', en: 'Academic background' },
  'education-description': { es: 'Formación orientada a desarrollo, bases de programación, análisis y resolución de problemas.', en: 'Training focused on development, programming fundamentals, analysis and problem solving.' },
  'education-item-1-title': { es: 'I.E.S. Francisco Romero Vargas', en: 'I.E.S. Francisco Romero Vargas' },
  'education-item-1-degree': { es: 'Técnico Superior en Desarrollo de Aplicaciones Web. 2024-2026.', en: 'Higher Technician in Web Application Development. 2024-2026.' },
  'education-item-1-1': { es: 'Desarrollo de aplicaciones web de principio a fin.', en: 'End-to-end web application development.' },
  'education-item-1-2': { es: 'Diseño y gestión de bases de datos.', en: 'Design and management of databases.' },
  'education-item-1-3': { es: 'Desarrollo Front-End y Back-End.', en: 'Front-End and Back-End development.' },
  'education-item-1-4': { es: 'Gestión de servidores y despliegue de aplicaciones.', en: 'Server management and application deployment.' },
  'education-item-1-5': { es: 'Control de versiones y trabajo colaborativo.', en: 'Version control and collaborative work.' },
  'education-item-2-title': { es: 'I.E.S. Salmedina', en: 'I.E.S. Salmedina' },
  'education-item-2-degree': { es: 'Bachillerato Tecnológico. 2022-2024.', en: 'Technological Baccalaureate. 2022-2024.' },
  'education-item-2-1': { es: 'Formación sólida en tecnología, matemáticas y ciencias aplicadas.', en: 'Solid training in technology, mathematics and applied sciences.' },
  'education-item-2-2': { es: 'Desarrollo del pensamiento analítico y resolución de problemas.', en: 'Development of analytical thinking and problem solving.' },
  'education-item-2-3': { es: 'Fundamentos de programación y sistemas.', en: 'Fundamentals of programming and systems.' },
  'skills-eyebrow': { es: 'Competencias', en: 'Skills' },
  'skills-heading': { es: 'Habilidades técnicas y personales', en: 'Technical and personal skills' },
  'skills-description': { es: 'Bloque orientado a mostrar tanto herramientas como capacidades transversales.', en: 'Section designed to show both tools and transferable skills.' },
  'skill-track-items': {
    es: `
      <span class="skill-item">Java</span>
      <span class="skill-item">JavaScript</span>
      <span class="skill-item">Python</span>
      <span class="skill-item">PHP</span>
      <span class="skill-item">HTML5</span>
      <span class="skill-item">CSS3</span>
      <span class="skill-item">Bootstrap</span>
      <span class="skill-item">Apex</span>
      <span class="skill-item">Flask</span>
      <span class="skill-item">Django</span>
      <span class="skill-item">Salesforce LWC</span>
      <span class="skill-item">REST APIs</span>
      <span class="skill-item">Git / GitHub / Bitbucket</span>
      <span class="skill-item">Jira</span>
      <span class="skill-item">MySQL / SQL / SOQL</span>
      <span class="skill-item">Docker</span>
      <span class="skill-item">AWS EC2</span>
      <span class="skill-item">Agile / Scrum</span>
      <span class="skill-item">Responsabilidad</span>
      <span class="skill-item">Trabajo en equipo</span>
      <span class="skill-item">Resolución de problemas</span>
      <span class="skill-item">Atención al detalle</span>
      <span class="skill-item">Java</span>
      <span class="skill-item">JavaScript</span>
      <span class="skill-item">Python</span>
      <span class="skill-item">PHP</span>
      <span class="skill-item">HTML5</span>
      <span class="skill-item">CSS3</span>
      <span class="skill-item">Bootstrap</span>
      <span class="skill-item">Apex</span>
      <span class="skill-item">Flask</span>
      <span class="skill-item">Django</span>
      <span class="skill-item">Salesforce LWC</span>
      <span class="skill-item">REST APIs</span>
      <span class="skill-item">Git / GitHub / Bitbucket</span>
      <span class="skill-item">Jira</span>
      <span class="skill-item">MySQL / SQL / SOQL</span>
      <span class="skill-item">Docker</span>
      <span class="skill-item">AWS EC2</span>
      <span class="skill-item">Agile / Scrum</span>
      <span class="skill-item">Responsabilidad</span>
      <span class="skill-item">Trabajo en equipo</span>
      <span class="skill-item">Resolución de problemas</span>
      <span class="skill-item">Atención al detalle</span>
    `,
    en: `
      <span class="skill-item">Java</span>
      <span class="skill-item">JavaScript</span>
      <span class="skill-item">Python</span>
      <span class="skill-item">PHP</span>
      <span class="skill-item">HTML5</span>
      <span class="skill-item">CSS3</span>
      <span class="skill-item">Bootstrap</span>
      <span class="skill-item">Apex</span>
      <span class="skill-item">Flask</span>
      <span class="skill-item">Django</span>
      <span class="skill-item">Salesforce LWC</span>
      <span class="skill-item">REST APIs</span>
      <span class="skill-item">Git / GitHub / Bitbucket</span>
      <span class="skill-item">Jira</span>
      <span class="skill-item">MySQL / SQL / SOQL</span>
      <span class="skill-item">Docker</span>
      <span class="skill-item">AWS EC2</span>
      <span class="skill-item">Agile / Scrum</span>
      <span class="skill-item">Responsibility</span>
      <span class="skill-item">Teamwork</span>
      <span class="skill-item">Problem solving</span>
      <span class="skill-item">Attention to detail</span>
      <span class="skill-item">Java</span>
      <span class="skill-item">JavaScript</span>
      <span class="skill-item">Python</span>
      <span class="skill-item">PHP</span>
      <span class="skill-item">HTML5</span>
      <span class="skill-item">CSS3</span>
      <span class="skill-item">Bootstrap</span>
      <span class="skill-item">Apex</span>
      <span class="skill-item">Flask</span>
      <span class="skill-item">Django</span>
      <span class="skill-item">Salesforce LWC</span>
      <span class="skill-item">REST APIs</span>
      <span class="skill-item">Git / GitHub / Bitbucket</span>
      <span class="skill-item">Jira</span>
      <span class="skill-item">MySQL / SQL / SOQL</span>
      <span class="skill-item">Docker</span>
      <span class="skill-item">AWS EC2</span>
      <span class="skill-item">Agile / Scrum</span>
      <span class="skill-item">Responsibility</span>
      <span class="skill-item">Teamwork</span>
      <span class="skill-item">Problem solving</span>
      <span class="skill-item">Attention to detail</span>
    `
  },
  'about-eyebrow': { es: 'Sobre mí', en: 'About me' },
  'about-heading': { es: 'Me especializo en programación, soporte técnico y trabajo en equipo con un enfoque profesional.', en: 'I specialize in programming, technical support and teamwork with a professional approach.' },
  'about-text': {
    es: 'Soy responsable, organizado y comprometido con el aprendizaje continuo. Me adapto rápido, trabajo de forma metódica y aporto una actitud proactiva para asumir nuevas tecnologías y retos del proyecto.',
    en: 'I am responsible, organized and committed to continuous learning. I adapt quickly, work methodically and bring a proactive attitude to adopt new technologies and project challenges.'
  },
  'metric-1': { es: 'Español nativo', en: 'Native Spanish' },
  'metric-2': { es: 'Inglés Cambridge, nivel comunicativo alto', en: 'Cambridge English, high communication level' },
  'metric-3': { es: 'Permiso de conducción y vehículo propio', en: 'Driving license and own vehicle' },
  'contact-eyebrow': { es: 'Contacto', en: 'Contact' },
  'contact-heading': { es: 'Listo para colaborar en proyectos técnicos y aportar compromiso en equipos profesionales.', en: 'Ready to collaborate on technical projects and contribute commitment to professional teams.' },
  'contact-text': {
    es: 'Basado en Chipiona, Cádiz. Disponible para desplazamientos y preparado para integrarme en equipos técnicos. CV completo disponible a petición.',
    en: 'Based in Chipiona, Cádiz. Available to travel and ready to integrate into technical teams. Full résumé available upon request.'
  },
  'contact-cv': { es: 'Solicitar CV', en: 'Request CV' },  'contact-github': { es: 'GitHub', en: 'GitHub' },  'contact-top': { es: 'Volver arriba', en: 'Back to top' },
  'footer-text': { es: 'Portafolio profesional de Rubén Valdés Ruiz. Técnico Superior en Desarrollo de Aplicaciones Web.', en: 'Professional portfolio of Rubén Valdés Ruiz. Higher Technician in Web Application Development.' }
};

function applyTranslations(language) {
  document.querySelectorAll('[data-translate]').forEach((element) => {
    const key = element.dataset.translate;
    const translation = translations[key];

    if (!translation) {
      return;
    }

    const text = translation[language];
    if (text == null) {
      return;
    }

    const tagName = element.tagName.toLowerCase();
    if (tagName === 'input' || tagName === 'textarea') {
      element.value = text;
    } else if (tagName === 'meta') {
      element.setAttribute('content', text);
    } else {
      element.innerHTML = text;
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === 'es' ? translations['languageSwitcher'].es : translations['languageSwitcher'].en;
  }
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
  applyTranslations(currentLanguage);
}

function revealFullProfile(event) {
  event.preventDefault();
  document.body.classList.add('profile-open');
  const firstSection = document.querySelector('main > section:not(.hero)');
  if (firstSection) {
    firstSection.scrollIntoView({ behavior: 'smooth' });
  }
}

async function sharePortfolio() {
  const shareData = {
    title: document.title,
    text: 'Portfolio profesional de Rubén Valdés Ruiz',
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(shareData.url);
    const originalText = sharePortfolioButton.textContent;
    sharePortfolioButton.textContent = translations['share-copied'][currentLanguage];
    window.setTimeout(() => {
      sharePortfolioButton.textContent = originalText;
    }, 1800);
  } catch (error) {
    if (error.name !== 'AbortError') {
      window.prompt('Copia este enlace para compartir el portfolio:', shareData.url);
    }
  }
}

if (languageToggle) {
  languageToggle.addEventListener('click', toggleLanguage);
}

if (showProfileButton) {
  showProfileButton.addEventListener('click', revealFullProfile);
}

if (sharePortfolioButton) {
  sharePortfolioButton.addEventListener('click', sharePortfolio);
}

if (yearElement) {
  yearElement.textContent = String(currentYear);
}

applyTranslations(defaultLanguage);
