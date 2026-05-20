/**
 * Copy y datos del sitio APADMSI.
 * Fuentes verificables:
 *  - Web institucional vigente: https://apadmsi.com.ar/
 *  - La Nación (2014): https://www.lanacion.com.ar/sociedad/un-hogar-terapeutico-y-con-mucho-verde-nid1689728/
 *  - La Noticia Web (oct 2016): https://www.lanoticiaweb.com.ar/galmarini-visito-el-centro-de-dia-a-p-a-d-m-s-i/
 *
 * Todo lo marcado "A completar" lo confirma el cliente antes de publicar.
 */

export const FOUNDED_YEAR = 1982;
const yearsActive = new Date().getFullYear() - FOUNDED_YEAR;

export const site = {
  name: "APADMSI",
  brandShort: "A.P.A.D.M.S.I.",
  tagline: "Centro de Día · San Isidro",
  // Versión del nombre completo elegida por el cliente.
  // Aparece sólo en footer y datos institucionales — no como headline.
  longName:
    "Asociación de Padres y Amigos de Discapacitados Mentales de San Isidro",
  cuit: "30-64736769-7",
  foundedYear: FOUNDED_YEAR,
  yearsActiveLabel: `${yearsActive}+ años`,
  address: "Billinghurst 1260, Beccar, San Isidro, Buenos Aires (1642)",
  addressShort: "Billinghurst 1260, Beccar · San Isidro",
  geo: { lat: -34.4735, lng: -58.538446 },
  hours: "Lunes a viernes · 8:30 a 16:30 hs",
  phone: "(011) 4723 8951",
  phoneTel: "01147238951",
  email: "apadmsi@fibertel.com.ar",
  facebook: {
    url: "https://www.facebook.com/apadmsi.sanisidro",
  },
  instagram: {
    handle: "@apadmsisan",
    url: "https://www.instagram.com/apadmsisan",
  },
  // Sello institucional: la institución cuenta con habilitación pública
  // para operar como Centro de Día con capacidad para 40 concurrentes.
  approval: {
    short: "Habilitada para 40 concurrentes",
    long:
      "Habilitación nacional, provincial y municipal para operar como Centro de Día con capacidad para 40 concurrentes.",
  },
  // Distritos de origen de los concurrentes (publicado por la
  // vicepresidencia en La Noticia Web, oct 2016).
  originAreas: ["San Isidro", "Garín", "Tigre", "San Fernando"],
  // Organismos del Estado que financian el funcionamiento del Centro.
  fundingSources: [
    { abbr: "PAMI", name: "Programa de Atención Médica Integral" },
    { abbr: "Incluir Salud", name: "Programa Federal Incluir Salud" },
    { abbr: "PNC", name: "Pensiones No Contributivas" },
  ],
} as const;

export const navLinks = [
  { href: "/#nosotros", label: "Quiénes somos", icon: "people" },
  { href: "/#actividades", label: "Actividades", icon: "heart-hands" },
  { href: "/#equipo", label: "Equipo", icon: "team" },
  { href: "/#donar", label: "Donar", icon: "target" },
  { href: "/contacto", label: "Contacto", icon: "mail" },
] as const;

export const hero = {
  eyebrow: "donde cada vida importa",
  // <em> recibe subrayado peach
  headlineHtml:
    "Una casa donde cada persona puede <em>ser cuidada</em> como merece.",
  lede: "APADMSI es un Centro de Día en San Isidro. Hace más de cuatro décadas acompañamos a jóvenes y adultos con discapacidad mental severa — y a sus familias. Con tres comidas diarias, un equipo profesional vocacional, y la convicción de que cada vida importa hasta el final.",
  ctaPrimary: { label: "Quiero ayudar", href: "/donar" },
  ctaSecondary: { label: "Conocé la casa", href: "#nosotros" },
  badge: {
    text: "Una casa con historia.",
    subtext: "Más de cuarenta años cuidando.",
  },
} as const;

// Mini-banda institucional debajo del hero.
// Datos clave presentados como sello editorial.
export const credentials = {
  legalName: site.longName,
  legalKicker: "Asociación de Padres y Amigos",
  legalRest: "de Discapacitados Mentales de San Isidro",
  items: [
    {
      kicker: "desde",
      value: `${FOUNDED_YEAR}`,
      label: "año de fundación",
    },
    {
      kicker: "hasta",
      value: "40",
      label: "concurrentes habilitados",
    },
    {
      kicker: "en",
      value: "Beccar",
      label: "San Isidro · Buenos Aires",
    },
    {
      kicker: "como",
      value: "ONG",
      label: "asociación civil sin fines de lucro",
    },
  ],
} as const;

export const stats = {
  eyebrow: "esto somos hoy",
  heading: "El Centro, en números.",
  items: [
    {
      number: "40",
      suffix: "+",
      label: "años acompañando familias en San Isidro",
    },
    {
      number: "30",
      suffix: "+",
      label: "jóvenes y adultos asisten cada día",
    },
    {
      number: "3",
      label: "comidas diarias: desayuno, almuerzo y merienda",
    },
    {
      number: "20",
      suffix: "+",
      label: "profesionales y trabajadores en el equipo",
    },
  ],
} as const;

export const about = {
  eyebrow: "quiénes somos",
  // <em> recibe highlight peach
  headlineHtml: "Una <em>casa</em>, no una institución.",
  paragraphsHtml: [
    "Somos la <strong>Asociación de Padres y Amigos de Discapacitados Mentales de San Isidro</strong> — una asociación civil sin fines de lucro fundada en 1982 por un grupo de padres y amigos que necesitaban un lugar donde sus hijos pudieran ser cuidados con dignidad. Cuatro décadas después, seguimos siendo lo que fuimos en el origen: una casa pensada para personas que el sistema dejaba sin respuesta.",
    "Atendemos a jóvenes y adultos con discapacidad mental, ofreciéndoles un espacio para el desarrollo de sus habilidades en un <strong>ambiente creativo, alegre y contenido</strong>. Nos definimos como una estructura que brinda una estancia favorable para la integración social, garantizando la contención, protección y asistencia integral de cada concurrente.",
    "Lo que nos distingue no es lo que enseñamos sino <strong>cómo cuidamos</strong>. Miramos lo que cada persona <strong>puede hacer</strong>, no lo que no puede. Cada día, un equipo profesional acompaña a los concurrentes con vocación, paciencia y conocimiento técnico. Sostenemos las tres comidas, las actividades, las salidas, y la posibilidad de que cada persona conserve su autonomía dentro de lo posible.",
    "Trabajamos especialmente con familias que el sistema deja afuera — concurrentes con <strong>PAMI, Incluir Salud o Pensiones No Contributivas</strong> — porque sabemos que otras instituciones no los toman al depender de obras sociales del Estado. Hoy acompañamos a concurrentes de <strong>San Isidro, Garín, Tigre y San Fernando</strong>, y orientamos a sus familias para que puedan defender los derechos de sus hijos.",
    "APADMSI es una <strong>institución de puertas abiertas en serio</strong>. Cualquier familiar puede venir sin avisar a ver a su concurrente trabajando — sin función armada, sin performance. Esa transparencia es uno de los pilares fundacionales.",
  ],
  // Bloque destacado con la misión institucional declarada.
  mission: {
    label: "Nuestra misión",
    statements: [
      "Brindar un espacio donde jóvenes y adultos con discapacidad puedan afianzar, desarrollar y enriquecer sus habilidades para que obtengan la mayor independencia.",
      "Acompañar y orientar a las familias para que puedan defender los derechos de sus hijos.",
    ],
  },
  cta: { label: "Conocé nuestras actividades", href: "/#actividades" },
} as const;

export const objectives = {
  eyebrow: "nuestros objetivos",
  heading: "Tres compromisos que no negociamos.",
  intro:
    "Estos son los pilares fundacionales declarados desde el origen de la institución. Cada actividad, cada decisión, cada profesional que se suma al equipo se mide por su contribución a estos tres compromisos.",
  items: [
    {
      number: "01",
      title: "Vida cotidiana",
      headline: "Lograr en los jóvenes el desenvolvimiento activo en la vida cotidiana.",
      desc: "Trabajamos con cada concurrente para que pueda realizar las acciones del día a día con la mayor autonomía posible — alimentarse, moverse, comunicarse, decidir. Cada pequeño avance es una conquista.",
    },
    {
      number: "02",
      title: "Calidad de vida",
      headline: "Atender y asistir las necesidades básicas para una mejor calidad de vida.",
      desc: "Garantizamos las tres comidas diarias, el espacio físico cuidado, el seguimiento profesional, y un entorno donde cada concurrente se sienta respetado y querido. La calidad de vida no es solo salud: es también dignidad y pertenencia.",
    },
    {
      number: "03",
      title: "Integración social",
      headline: "Implementar actividades que favorezcan la integración al medio social.",
      desc: "Las actividades terapéuticas, ocupacionales y recreativas no son un fin en sí mismas — son herramientas para que los concurrentes participen activamente del mundo. Las salidas, los encuentros con otras instituciones, el viaje anual: todo apunta a lo mismo.",
    },
  ],
  // Frase de cierre institucional, declarada por la propia organización.
  closing: "Somos tu mejor alternativa en todo lo relacionado con integración social.",
} as const;

export const activities = {
  eyebrow: "qué hacemos",
  heading: "Un programa completo. Una sola intención: cuidar.",
  intro:
    "Más allá de las tres comidas diarias, sostenemos un programa de actividades pensadas para que cada persona mantenga sus capacidades, se exprese y se divierta. Cada actividad tiene su tiempo, su ritmo, y un equipo profesional que la acompaña — porque acá la prioridad no es lo que se logra sino el camino que se hace.",
  // Frase institucional declarada en la web vigente.
  officialIntro: {
    label: "Actividades de todo tipo",
    text: "En A.P.A.D.M.S.I. desarrollamos un programa amplio con el objetivo de enriquecer las diversas habilidades de cada concurrente.",
  },
  // Lista oficial extraída de la web vigente.
  items: [
    { icon: "i", title: "Integración en la vida diaria", desc: "Acompañamiento en hábitos y rutinas que sostienen la autonomía cotidiana.", image: "/images/recreativas/recreativas-6.jpg" },
    { icon: "l", title: "Actividades laborales no productivas", desc: "Tareas con sentido y rutina que fortalecen la organización personal.", image: "/images/cocina/cocina-9.jpg" },
    { icon: "e", title: "Expresión y lenguaje corporal", desc: "Trabajo sobre la comunicación no verbal y la expresividad del cuerpo.", image: "/images/recreativas/recreativas-8.jpg" },
    { icon: "f", title: "Educación física y kinesiología", desc: "Movimiento adaptado y abordaje kinesiológico individualizado.", image: "/images/huerta/huerta-6.jpg" },
    { icon: "t", title: "Terapia asistida con animales", desc: "El vínculo con el animal como puente terapéutico — confianza, ternura, respuesta.", image: "/images/viaje-institucional/viaje-institucional-3.jpg" },
    {
      icon: "a",
      title: "Arte Terapia",
      desc: "El efecto sanador de la expresión artística. Un puente entre lo terapéutico y las artes visuales.",
      href: "/actividades/arte-terapia",
    },
    {
      icon: "r",
      title: "Actividades recreativas",
      desc: "Espectáculos, festejos, salidas culturales, encuentros. La recreación como derecho y como puente.",
      href: "/actividades/recreativas",
    },
    {
      icon: "m",
      title: "Musicoterapia",
      desc: "La música como puente. Tocar, escuchar, moverse. Un canal directo cuando las palabras no alcanzan.",
      href: "/actividades/musicoterapia",
    },
    { icon: "p", title: "Apoyo psicológico individual y familiar", desc: "Espacios de escucha y orientación tanto para los concurrentes como para sus familias.", image: "/images/recreativas/recreativas-7.jpg" },
    { icon: "fo", title: "Fonoaudiología", desc: "Trabajo profesional sobre la comunicación, el lenguaje y la deglución.", image: "/images/recreativas/recreativas-9.jpg" },
    { icon: "co", title: "Computación", desc: "Acercamiento gradual a herramientas digitales y rutinas de uso.", image: "/images/recreativas/recreativas-10.jpg" },
    {
      icon: "h",
      title: "Taller de Huerta",
      desc: "Sembrar, regar, ver crecer. El contacto con la tierra calma, ordena y conecta.",
      href: "/actividades/huerta",
    },
    {
      icon: "c",
      title: "Taller de Cocina",
      desc: "Manipular, oler, mezclar, esperar. La cocina como ejercicio de autonomía y rutina.",
      href: "/actividades/cocina",
    },
    {
      icon: "ma",
      title: "Taller de Manualidades",
      desc: "Trabajo fino y creativo con materiales diversos. Pintar, recortar, ensamblar, transformar.",
      href: "/actividades/manualidades",
    },
    { icon: "n", title: "Natación", desc: "Actividad acuática terapéutica y recreativa.", image: "/images/recreativas/recreativas-14.jpg" },
  ],
  cta: {
    title: "¿Querés conocernos?",
    desc: "Te invitamos a visitar el Centro y conocer cómo trabajamos día a día.",
    button: { label: "Coordinar visita", href: "/contacto" },
  },
} as const;

// El proyecto institucional a largo plazo: un Hogar permanente para los
// concurrentes. Lo declaró públicamente la presidenta en La Nación (2014).
export const vision = {
  eyebrow: "nuestro próximo paso",
  // <em> recibe highlight peach
  headlineHtml: "Que el <em>cuidado</em> no se termine.",
  paragraphsHtml: [
    "El Centro de Día acompaña a los concurrentes durante la jornada — entran a la mañana, almuerzan, hacen actividades, vuelven a sus hogares al final del día. Pero hay una pregunta que no descansa: <strong>¿qué pasa cuando los padres ya no están?</strong>",
    "Para muchas de las familias que conocemos, esa pregunta es el peso silencioso que cargan todos los días. El proyecto institucional a largo plazo es construir un Hogar que continúe la tarea del Centro — un espacio donde quienes hoy concurren puedan seguir siendo cuidados con la misma calidad cuando sus familias ya no puedan hacerlo.",
    "Es un sueño que sostiene el trabajo de APADMSI desde su fundación. Avanzamos paso a paso — primero el Centro de Día, después el Hogar — con la convicción de que cada vida importa hasta el final.",
  ],
  pullQuote: {
    text: "Queremos quedarnos tranquilos de que nuestros hijos van a tener un lugar cuando nosotros ya no estemos.",
    attrName: "Nélida Sastre de Ehrhardt",
    attrRole: "Presidenta · Fundadora",
    source: {
      label: "La Nación · 2014",
      href: "https://www.lanacion.com.ar/sociedad/un-hogar-terapeutico-y-con-mucho-verde-nid1689728/",
    },
  },
} as const;

// Cita publicada en La Nación (2014, Micaela Urdinez) — atribuida a la
// presidenta Nélida Sastre de Ehrhardt. Es una declaración pública, no
// material de una llamada privada.
export const quote = {
  textHtml:
    "Esta es <em>una institución a puertas abiertas</em>. Acá cualquier padre puede venir a ver a su hijo.",
  attrName: "Nélida Sastre de Ehrhardt",
  attrRole: "Presidenta · Fundadora",
  source: {
    label: "La Nación · 2014",
    href: "https://www.lanacion.com.ar/sociedad/un-hogar-terapeutico-y-con-mucho-verde-nid1689728/",
  },
} as const;

export const history = {
  eyebrow: "nuestra historia",
  heading: "Cuarenta y tantos años. Sin pausa, sin ruido.",
  intro:
    "APADMSI nació en 1982 como respuesta a una necesidad que el sistema dejaba sin atender. Un grupo de padres y amigos que veían a sus hijos quedar afuera del trabajo protegido, sin escuela posible y sin un lugar adonde ir, decidió crear esa casa que no existía. Cuatro décadas después, la misma casa sigue de pie en Billinghurst 1260, ampliada y mejorada — pero idéntica en espíritu. Cambió la comisión, cambiaron las generaciones de concurrentes, cambiaron las directoras, cambiaron los gobiernos. No cambió la premisa: trabajar para los que menos tienen, con un equipo profesional que cuida con amor.",
  timeline: [
    {
      year: "1982",
      title: "Fundación.",
      desc: "Un grupo de padres y amigos del partido de San Isidro crea la asociación para responder a una necesidad que el sistema dejaba sin atender: jóvenes y adultos con discapacidad mental severa, sin acceso al trabajo protegido ni a la educación tradicional. El Centro nace en Billinghurst 1260, donde sigue funcionando hoy.",
    },
    {
      year: "Década del '90",
      title: "Nueva comisión, nuevo impulso.",
      desc: "A lo largo de los '90, los hijos de los fundadores fueron creciendo y muchas familias originales se retiraron a buscar otras opciones. Llegaron padres nuevos, entre ellos la actual presidenta, y se reactivó la comisión de trabajo. Se amplió el programa de actividades, se profesionalizó el equipo, y APADMSI empezó a recibir derivaciones de PAMI, Incluir Salud y PNC — convirtiéndose en uno de los pocos centros de la zona que toma esos casos.",
    },
    {
      year: "Años 2000",
      title: "Crecimiento y visibilidad.",
      desc: "El Centro recibe en estos años visitas institucionales de figuras nacionales — funcionarios de Desarrollo Social, autoridades municipales, donantes privados. La Municipalidad de San Isidro consolida su acompañamiento permanente, una relación que ya lleva más de cuatro décadas.",
    },
    {
      year: "2016",
      title: "Bailando por un Sueño.",
      desc: "Por iniciativa de la Municipalidad de San Isidro, la institución participa en el programa de televisión con la bailarina María del Cerro, que tiene un hermano con síndrome de Down. Llegan a la final. En la última gala, María le pide en vivo a Gustavo Posse que les haga el techo, y el intendente cumple: poco después, los arquitectos de la Municipalidad construyen el techo de chapa que tienen hoy. La exposición trae nuevos donantes — entre ellos el Sindicato del Caucho, que aporta mobiliario y pintura.",
    },
    {
      year: "Hoy",
      title: "Una casa con cuarenta años en pie.",
      desc: "Más de 30 jóvenes y adultos asisten diariamente al Centro. El equipo profesional alcanzó su mayor profesionalización histórica. La Fundación Banco Provincia visitó la institución y la reconoció como referencia por la alegría y el amor del equipo de trabajo. El proyecto continúa: sostener lo construido y abrir, algún día, un hogar permanente para quienes ya no tengan familia que los cuide.",
    },
  ],
  pendingNote: "Más hitos institucionales en proceso de carga.",
} as const;

export const team = {
  eyebrow: "el equipo",
  // <em> recibe highlight peach
  headlineHtml: "Cuidar <em>no se improvisa</em>.",
  intro:
    "Detrás de cada actividad hay alguien que la sostiene. La conducción la lleva un grupo de cuatro pilares — Lala, Zulma y las dos Marías Fernandas — con décadas de experiencia. El cuidado diario lo hacen las orientadoras y auxiliares. Y el seguimiento profesional especializado lo aportan psicólogos, médicos, fonoaudiólogos y terapeutas que vienen por horas a lo largo de la semana.",
  // Autoridades y dirección actuales de la institución.
  // imageSlug: si existe `public/images/equipo/{slug}.jpg|png|webp` se usa
  // como avatar; si no, se muestra placeholder con iniciales.
  members: [
    {
      role: "Presidenta",
      name: "Nélida Sastre de Ehrhardt",
      desc: "Conocida como Lala. Ingresó en 1992 después de haber fundado la primera escuela especial de mentales profundos de San Fernando. Lidera la institución desde entonces con una premisa firme: trabajar para los que menos tienen.",
      imageSlug: "nelida-sastre",
    },
    {
      role: "Vicepresidenta",
      name: "Zulma Azuaga",
      desc: "Acompaña la dirección institucional desde hace más de dos décadas. Representa a la institución ante la comunidad y articula los apoyos legales.",
      imageSlug: "zulma-azuaga",
    },
    {
      role: "Directora",
      name: "María Fernanda Castrillo",
      desc: "Coordinación profesional del Centro. Junto a Aguyaro lidera el equipo técnico y la operación diaria.",
      imageSlug: "maria-fernanda-castrillo",
    },
    {
      role: "Directora",
      name: "María Fernanda Aguyaro",
      desc: "Coordinación pedagógica del Centro. Acompaña al equipo de orientadoras y supervisa el seguimiento de cada concurrente.",
      imageSlug: "maria-fernanda-aguyaro",
    },
  ],
  // Equipo profesional especializado (sin foto individual).
  professionals: [
    { name: "Judith Bellizzia", role: "Psicóloga" },
    { name: "Maxi Baioni", role: "Médico Psiquiatra" },
    { name: "Liliana Touceda", role: "Fonoaudióloga" },
    { name: "Lucila Avila Ritta", role: "Terapista Ocupacional" },
    { name: "Daniela Cabassi", role: "Trabajadora Social" },
    { name: "Claudia Guedes", role: "Nutricionista" },
    { name: "Sofia Sosa", role: "Profesora de Educación Física" },
  ],
  // Equipo docente y de cuidado diario — las que están de 8:30 a 16:30
  // todos los días. Multifunción.
  daily: {
    label: "equipo docente y de cuidado diario",
    intro:
      "Las que están todos los días, de 8:30 a 16:30. Hacen los talleres, asisten en los problemas de salud, acompañan a cada concurrente — y cuando hace falta también arreglan el jardín, hacen rifas para comprar materiales o cortan el pasto. Un equipo formidable.",
    members: [
      { name: "Carla Ximena León", role: "Orientadora" },
      { name: "Roxana Andrea Santoro", role: "Orientadora" },
      { name: "María Belén Roldán", role: "Orientadora" },
      { name: "Diana Mariel Chávez", role: "Orientadora" },
      { name: "Gladys Sarotti", role: "Auxiliar orientadora" },
      { name: "María Eva Peirone", role: "Auxiliar orientadora" },
      { name: "Beatriz Juárez", role: "Auxiliar orientadora" },
      { name: "Ludmila Lencina", role: "Auxiliar orientadora" },
    ],
  },
  // Cocina y limpieza.
  kitchen: {
    label: "cocina y limpieza",
    members: [
      { name: "Isabel Enrique", role: "Cocinera" },
      { name: "Ramona Enrique", role: "Ayudante de cocina y limpieza" },
    ],
  },
  closing:
    "Comen carne todos los días. Tres comidas, atención profesional y un equipo que trabaja con alegría — eso es lo que destacaron los periodistas de Fundación Banco Provincia cuando nos visitaron.",
} as const;

export const donate = {
  eyebrow: "sumate",
  // <em> recibe highlight gold sobre fondo dark
  headlineHtml: "Tu aporte <em>sostiene</em> esta casa.",
  punch: "Cada aporte se traduce en jornadas reales.",
  lede: "APADMSI no cuenta con colaboración fija de ninguna entidad. Necesitamos personas, empresas o instituciones que ayuden de forma permanente. Tu colaboración fortalece la estabilidad del equipo profesional, permite proyectar el crecimiento de la institución y se traduce en jornadas reales — meriendas, almuerzos, salidas, talleres — para los concurrentes que vienen todos los días.",
  ways: {
    label: "Otras formas de sumarte",
    items: [
      {
        title: "Como socio",
        desc: "Sumate con un aporte mensual estable que sostiene la operación del Centro.",
      },
      {
        title: "Como voluntario",
        desc: "No hace falta tener formación específica — solo ganas de participar y un poco de tiempo.",
      },
      {
        title: "Como empresa",
        desc: "Aportes en bienes, servicios o convenios institucionales. Hablemos de cómo podemos articular.",
      },
    ],
  },
  bankTransfer: {
    eyebrow: "Por transferencia bancaria",
    intro:
      "Aceptamos donaciones por transferencia bancaria en pesos o dólares. Una vez hecha la transferencia, escribinos con el comprobante para emitir el recibo.",
    accounts: [
      {
        currency: "ARS",
        label: "Cuenta en pesos",
        bank: "Banco Provincia",
        cbu: "0140149901506500913853",
        alias: "PUPILA.MANTA.CHITA",
        holder: "APADMSI",
        cuitHolder: "30-64736769-7",
      },
      {
        currency: "USD",
        label: "Cuenta en dólares",
        bank: "Banco Provincia",
        cbu: "0140149904506550339507",
        alias: "JUNIO.GRAMALES.TELAS",
        holder: "APADMSI",
        cuitHolder: "30-64736769-7",
      },
    ],
  },
  cash: {
    title: "También aceptamos donaciones en efectivo",
    desc: "Coordinamos un encuentro en el Centro o donde te quede cómodo. Escribinos para combinar día y horario.",
    cta: { label: "Coordinar entrega", href: "/contacto" },
  },
  companyLink: {
    text: "¿Empresa que aporta bienes o servicios?",
    label: "Hablemos",
    href: "/contacto",
  },
} as const;

// Reseñas reales de Google Maps. Cargadas manualmente a partir de capturas
// del cliente (la Places API de Google requiere key paga para automatizar).
export const reviews = {
  eyebrow: "lo que dicen",
  heading: "Testimonios de familias y reseñas de visitantes.",
  intro:
    "Combinamos dos voces: los testimonios que nos comparten las familias de los concurrentes y las reseñas publicadas en Google Maps por vecinos, profesionales y quienes pasaron por el Centro.",
  googleMapsUrl:
    "https://www.google.com/maps/place/Apadmsi/@-34.4735,-58.538446,17z/",
  summary: { average: 4.6, count: 29 } as { average: number; count: number } | null,
  items: [
    {
      author: "Roberto Sánchez",
      rating: 5,
      date: "Padre de un concurrente",
      text: "APADMSI es un espacio de contención para nuestros hijos y para nosotros, donde sobra la cordialidad y el cariño. El personal brinda un gran cariño a los concurrentes, que tienen distintas patologías y problemáticas. En resumen, es un lugar que nos da mucha seguridad y tranquilidad.",
    },
    {
      author: "Familia de Natalia",
      rating: 5,
      date: "Familia de una concurrente",
      text: "Después de mucho tiempo en la búsqueda de un lugar para mi hija Natalia llegué a APADMSI. Solo tengo palabras de agradecimiento hacia todos los que trabajan allí. Profesionales de primera que se esfuerzan cada día en lograr lo mejor para nuestros hijos.",
    },
    {
      author: "Gabriel Horacio Laborde",
      rating: 5,
      date: "Hace un año",
      text: "Es un lugar realmente por el cual se ocupan de verdad de las personas discapacitadas, con muchas actividades, están supervisados por un equipo de profesionales permanente que se ocupan de cada integrante del centro de Día. Mi reconocimiento.",
    },
    {
      author: "Cristina Cruz Lara",
      rating: 5,
      date: "Hace 3 años",
      text: "Maravilloso lugar, mí hermano lo ama, mucho cariño, paciencia y empatía caracterizan muy bien este espacio.",
    },
    {
      author: "raulcesar serrat",
      rating: 5,
      date: "Hace un año",
      text: "Solo el amor salvará al mundo. APADMSI es una institución que lo demuestra. Es importante conocer la obra que realiza.",
    },
    {
      author: "Walter Saglimeni",
      rating: 5,
      date: "Hace 2 años",
      text: "Humanos!!",
    },
    {
      author: "Damiana Palau",
      rating: 5,
      date: "Hace 3 años",
      text: "Atienden con mucho amor a cada una de las personas que asisten.",
    },
    {
      author: "Roxana Silvero",
      rating: 5,
      date: "Hace 6 años",
      text: "Me pareció un lindo lugar! Cálido y bien cuidado.",
    },
  ] as Array<{
    author: string;
    rating: number;
    date: string;
    text: string;
  }>,
} as const;

export const press = {
  label: "Hablaron de nosotros",
  eyebrow: "en los medios",
  heading: "Cobertura periodística.",
  intro:
    "Notas publicadas que dan cuenta del trabajo institucional del Centro a lo largo de los años.",
  outlets: [
    {
      name: "La Nación",
      title: "Un hogar terapéutico y con mucho verde",
      year: "Nota · 2014",
      author: "Micaela Urdinez",
      cta: "Leer nota",
      pullQuote:
        "Esta es una institución a puertas abiertas. Acá cualquier padre puede venir a ver a su hijo.",
      href: "https://www.lanacion.com.ar/sociedad/un-hogar-terapeutico-y-con-mucho-verde-nid1689728/",
    },
    {
      name: "El Trece",
      title: "Bailando por un Sueño — APADMSI con María del Cerro",
      year: "Video · 2016",
      author: "Programa Showmatch",
      cta: "Ver video",
      pullQuote:
        "Yo quiero que Gustavo Posse haga el techo a APADMSI, la institución que represento — aunque yo no llegue a la final.",
      href: "https://www.youtube.com/watch?v=mGSbVenNvW0",
    },
    {
      name: "Municipalidad de San Isidro",
      title: "Video institucional del Centro de Día",
      year: "Video",
      author: "Producción Municipal",
      cta: "Ver video",
      pullQuote:
        "Una institución que apoyamos desde sus orígenes — hace más de 40 años acompañamos a APADMSI en su tarea.",
      href: "https://www.youtube.com/watch?v=WIbKXRDkDck",
    },
  ],
} as const;

// Reconocimiento institucional: organismos del Estado que habilitan o
// financian al Centro. Información factual de fuente pública (web vigente
// y notas de prensa).
export const recognition = {
  eyebrow: "reconocimiento institucional",
  heading: "No estamos solos en esta tarea.",
  intro:
    "Operar como Centro de Día para personas con discapacidad mental severa exige cumplir requisitos exigentes en infraestructura, equipo profesional y protocolos de atención. APADMSI cuenta con la habilitación oficial en los tres niveles del Estado y es prestadora reconocida por los principales organismos públicos del sistema.",
  // logoSlug: si existe `public/images/orgs/{slug}.png|svg|jpg|webp` se
  // muestra el logo real; si no, se usa un sello tipográfico estilizado
  // con los colores institucionales del organismo.
  items: [
    {
      kind: "habilitacion",
      abbr: "Habilitación oficial",
      name: "Nacional, provincial y municipal",
      desc: "Capacidad aprobada para 40 concurrentes.",
      color: "#7A1620",
      logoSlug: "nacional",
    },
    {
      kind: "pami",
      abbr: "PAMI",
      name: "Programa de Atención Médica Integral",
      desc: "Cobertura para concurrentes jubilados o pensionados.",
      color: "#0066B3",
      logoSlug: "pami",
    },
    {
      kind: "incluir-salud",
      abbr: "Incluir Salud",
      name: "Programa Federal Incluir Salud",
      desc: "Cobertura para personas con pensiones no contributivas.",
      color: "#00A551",
      logoSlug: "incluir-salud",
    },
    {
      kind: "pnc",
      abbr: "PNC",
      name: "Pensiones No Contributivas",
      desc: "Sistema de pensiones por discapacidad del Estado nacional.",
      color: "#C8102E",
      logoSlug: "pnc",
    },
    {
      kind: "msi",
      abbr: "Municipalidad de San Isidro",
      name: "Más de 40 años de apoyo",
      desc: "Relación íntima y continua. Delfín Beccar Varela, actual director de discapacidad, mantiene contacto permanente con el Centro.",
      color: "#0E7C5A",
      logoSlug: "msi",
    },
    {
      kind: "fbp",
      abbr: "Fundación Banco Provincia",
      name: "Donante reconocido",
      desc: "Periodistas de la Fundación visitaron el Centro y destacaron la alegría y el amor del equipo de trabajo, único entre las instituciones recorridas.",
      color: "#B91C2C",
      logoSlug: "fbp",
    },
  ],
} as const;

// Galería: previsualización del trabajo cotidiano. Hasta tener Instagram
// Graph API conectada, se cargan fotos manualmente o se muestran placeholders.
// Video institucional. Cuando esté el video real (YouTube/Vimeo), reemplazar
// `embedUrl` con la URL de embed (ej. "https://www.youtube.com/embed/VIDEO_ID").
// Mientras tanto, la sección muestra un placeholder con CTA para visitar.
export const videoTour = {
  eyebrow: "vení a recorrer la casa",
  heading: "Una mirada al Centro, en video.",
  intro:
    "Si las palabras no alcanzan, las imágenes en movimiento sí. Mirá un recorrido corto por nuestro día a día — los talleres, las comidas, las salidas y la gente que hace que esto pase.",
  // TODO: pegar acá la URL de embed cuando el video esté subido a YouTube/Vimeo.
  // Ejemplo YouTube: "https://www.youtube.com/embed/VIDEO_ID?rel=0"
  // Ejemplo Vimeo:   "https://player.vimeo.com/video/VIDEO_ID"
  embedUrl: null as string | null,
  posterImage: "/images/about-centro.jpg",
  duration: "1:30",
  cta: {
    label: "Coordinar una visita",
    href: "/contacto",
  },
} as const;

export const gallery = {
  eyebrow: "el día a día",
  heading: "Las palabras alcanzan hasta acá.",
  intro:
    "El día a día del Centro se cuenta mejor en imágenes. Compartimos en Instagram fotos de las actividades, las salidas, los talleres y los momentos cotidianos. Acá una muestra; en la cuenta vas a encontrar más.",
  items: [
    { src: "/images/recreativas/recreativas-6.jpg", alt: "Mate compartido en el comedor del Centro" },
    { src: "/images/cocina/cocina-9.jpg", alt: 'Bolsas del taller productivo "Estamos en el Horno"' },
    { src: "/images/huerta/huerta-7.jpg", alt: "Trabajando con plantines en el invernadero" },
    { src: "/images/arte-terapia/arte-terapia-1.jpg", alt: "Taller de arte terapia" },
    { src: "/images/musicoterapia/musicoterapia-1.jpg", alt: "Encuentro de musicoterapia" },
    { src: "/images/manualidades/manualidades-1.jpg", alt: "Taller de manualidades" },
    { src: "/images/recreativas/recreativas-8.jpg", alt: "Festejo de cumpleaños en APADMSI" },
    { src: "/images/cocina/cocina-7.jpg", alt: "Concurrentes preparando ingredientes en la cocina" },
    { src: "/images/huerta/huerta-6.jpg", alt: "Equipo de la huerta al aire libre" },
    { src: "/images/recreativas/recreativas-10.jpg", alt: "Salida grupal al Instituto Román Rosell" },
    { src: "/images/arte-terapia/arte-terapia-3.jpg", alt: "Trabajos del taller de arte terapia" },
    { src: "/images/musicoterapia/musicoterapia-3.jpg", alt: "Ronda de música en el Centro" },
    { src: "/images/recreativas/recreativas-7.jpg", alt: "Merienda compartida con todos" },
    { src: "/images/manualidades/manualidades-3.jpg", alt: "Producciones del taller de manualidades" },
    { src: "/images/cocina/cocina-3.jpg", alt: "Manos en la masa: cocina compartida" },
    { src: "/images/huerta/huerta-3.jpg", alt: "Verduras y aromáticas de la huerta del Centro" },
  ] as Array<{ src: string; alt: string }>,
  ctaLabel: `Ver más en Instagram · ${site.instagram.handle}`,
  ctaHref: site.instagram.url,
} as const;

export const contact = {
  eyebrow: "visitanos",
  heading: "Te invitamos a conocer el Centro.",
  lede: "Si querés saber más, ver cómo trabajamos o sumarte como socio, voluntario o donante, escribinos o llamanos. Coordinamos una visita en el horario que te convenga.",
} as const;

export const share = {
  label: "Compartí esta página",
  message:
    "Conocé APADMSI — un Centro de Día para personas con discapacidad mental en San Isidro, sostenido con donaciones.",
} as const;

export const newsletter = {
  label: "Sumate al boletín",
  intro:
    "Una vez por mes te contamos qué pasó en la casa: el viaje, los talleres, los avances. Sin spam.",
  placeholder: "Tu email",
  cta: "Suscribirme",
  successTitle: "¡Gracias!",
  successText: "Te vamos a escribir cuando publiquemos el próximo boletín.",
} as const;

export const footerNav = {
  navegar: [
    { href: "/#nosotros", label: "Quiénes somos" },
    { href: "/#actividades", label: "Actividades" },
    { href: "/#equipo", label: "Equipo" },
    { href: "/galeria", label: "Galería" },
    { href: "/contacto", label: "Contacto" },
  ],
  sumate: [
    { href: "/donar", label: "Donar mensualmente" },
    { href: "/donar", label: "Transferencia bancaria" },
    { href: "/contacto", label: "Voluntariado" },
    { href: "/contacto", label: "Asociarse" },
  ],
  seguinos: [
    { href: site.instagram.url, label: "Instagram" },
    { href: site.facebook.url, label: "Facebook" },
  ],
} as const;

// ============================================================
//  Páginas dedicadas de actividades
// ============================================================

export type ActivityImage = {
  src: string;
  alt: string;
};

export type ActivityDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  // <em> recibe highlight peach
  headlineHtml: string;
  paragraphsHtml: string[];
  galleryEyebrow: string;
  galleryHeading: string;
  galleryIntro: string;
  imagesDir: string;
  imageCount: number;
};

export const arteTerapiaPage: ActivityDetail = {
  slug: "arte-terapia",
  eyebrow: "actividades · APADMSI",
  title: "Arte Terapia",
  headlineHtml:
    "El efecto sanador de la <em>expresión artística</em>.",
  paragraphsHtml: [
    "El concepto de Arte Terapia se sostiene entre dos espacios a priori distanciados entre sí. Por un lado el <strong>terapéutico</strong>, proveniente del desarrollo histórico del campo de la salud mental. Por otro, lo relacionado a la <strong>producción de las artes visuales</strong>.",
    "Es aplicable en todo ámbito de bienestar humano — tanto para prevenir, promover, desarrollar o fortalecer, sea a las personas como a las interacciones grupales. Esta disciplina busca rescatar el efecto sanador de la expresión artística en sí misma.",
    "En APADMSI, el Arte Terapia es uno de los pilares del programa cotidiano. La hora del taller es un espacio en el que cada concurrente encuentra su propio modo de expresar — con tiza, con pintura, con dibujo o con fotografía — lo que las palabras no siempre alcanzan a decir.",
  ],
  galleryEyebrow: "exposición fotográfica",
  galleryHeading: "Lo que vieron los concurrentes.",
  galleryIntro:
    "Dentro de esta propuesta, los concurrentes de APADMSI fotografiaron de manera libre y optativa a sus compañeros y al personal de la institución. Estas son algunas de esas miradas.",
  imagesDir: "/images/arte-terapia",
  imageCount: 5,
};

export const recreativasPage: ActivityDetail = {
  slug: "recreativas",
  eyebrow: "actividades · APADMSI",
  title: "Actividades recreativas",
  headlineHtml:
    "La recreación es <em>un derecho</em>, no un extra.",
  paragraphsHtml: [
    "Las actividades recreativas no son un complemento del programa — son una parte central. Espectáculos en el Centro, salidas culturales, festejos, encuentros con la comunidad, mate compartido, jornadas de verano. Cada propuesta es una oportunidad para que los concurrentes salgan de la rutina, se vinculen entre sí y con personas de afuera, y vivan la experiencia de pertenecer.",
    "A lo largo del año recibimos visitas de artistas, payasos terapéuticos y compañías de teatro que vienen al Centro a trabajar con los concurrentes. También salimos: visitas a museos, paseos, encuentros con otras instituciones de zona norte. Y cada verano organizamos una serie de jornadas con pileta, música, baile y actividades al aire libre.",
    "En todas estas actividades, lo importante no es el resultado — es el momento compartido. La risa colectiva, la canción que sale espontánea, la foto grupal al final del día. Eso queda.",
  ],
  galleryEyebrow: "momentos del año",
  galleryHeading: "Cuando reír también es una forma de cuidar.",
  galleryIntro:
    "Una selección de momentos recreativos del Centro: payasos, salidas culturales, encuentros, mate compartido, verano en APADMSI.",
  imagesDir: "/images/recreativas",
  imageCount: 14,
};

export const musicoterapiaPage: ActivityDetail = {
  slug: "musicoterapia",
  eyebrow: "actividades · APADMSI",
  title: "Musicoterapia",
  headlineHtml:
    "Cuando las palabras no alcanzan, <em>está la música</em>.",
  paragraphsHtml: [
    "La Musicoterapia es una disciplina profesional que utiliza la música y los elementos sonoros — sonido, ritmo, melodía, armonía — para abrir canales de comunicación, estimular el desarrollo y favorecer el bienestar emocional. No requiere conocimientos previos ni habilidades musicales: cada concurrente participa desde donde puede.",
    "En APADMSI, la musicoterapia es uno de los espacios más esperados de la semana. Tocar la guitarra, hacer percusión con tambores, sacudir maracas, soplar instrumentos de viento, cantar canciones conocidas, improvisar melodías. Trabajamos en grupo, en ronda, escuchándonos.",
    "Lo que ocurre durante una sesión es difícil de poner en palabras — porque justamente, donde las palabras no alcanzan, está la música. Vemos a personas que apenas hablan empezar a tararear. A otras que cuesta movilizarlas, levantarse a bailar. A cumpleañeros sonriendo de oreja a oreja cuando todos los compañeros les cantan.",
  ],
  galleryEyebrow: "talleres y encuentros",
  galleryHeading: "Una ronda de música, todas las semanas.",
  galleryIntro:
    "Algunos momentos de los talleres de musicoterapia en el Centro: instrumentos compartidos, guitarra en vivo, percusión, festejos.",
  imagesDir: "/images/musicoterapia",
  imageCount: 4,
};

export const cocinaPage: ActivityDetail = {
  slug: "cocina",
  eyebrow: "actividades · APADMSI",
  title: "Taller de Cocina",
  headlineHtml:
    "La cocina como un acto de <em>autonomía</em>.",
  paragraphsHtml: [
    "El taller de cocina es uno de los espacios más concretos del programa. Manipular ingredientes, oler especias, mezclar harina y agua, esperar que la masa leve. Cada acción tiene un sentido y un resultado tangible — y eso, para una persona con discapacidad mental severa, es una conquista enorme.",
    "Trabajamos con todas las medidas de higiene: cofia, barbijo, delantal. No son solo medidas sanitarias — son un ritual que ordena la actividad y le da seriedad. Cada concurrente entiende que el taller de cocina es algo importante, y se prepara como tal.",
    "Hacemos pan, tartas, masa de pizza, galletitas. Lo que se cocina se comparte: a veces es la merienda del día, otras veces se lleva a casa. Pocas cosas resumen mejor el espíritu del Centro que un grupo de concurrentes amasando juntos alrededor de una mesa.",
  ],
  galleryEyebrow: "amasar, mezclar, compartir",
  galleryHeading: "Una mesa, una receta, todos alrededor.",
  galleryIntro:
    "Algunos momentos del taller de cocina: preparativos, manos en la masa, el equipo trabajando con todas las medidas de higiene.",
  imagesDir: "/images/cocina",
  imageCount: 10,
};

export const huertaPage: ActivityDetail = {
  slug: "huerta",
  eyebrow: "actividades · APADMSI",
  title: "Taller de Huerta",
  headlineHtml:
    "El contacto con la tierra <em>calma, ordena y conecta</em>.",
  paragraphsHtml: [
    "El taller de huerta es uno de los espacios más nobles del programa. Sembrar una semilla, regar todos los días, ver crecer la planta a lo largo de las semanas, cosechar un morrón, una albahaca, un tomate. Es un proceso largo, paciente, que tiene su propio ritmo — y eso, justamente, es parte del valor terapéutico.",
    "Trabajamos con plantas aromáticas (orégano, albahaca, romero, tomillo), hortalizas de estación (morrón, lechuga, tomate, cebolla de verdeo) y flores. Lo que se cosecha pasa después al taller de cocina o se reparte entre los concurrentes y sus familias. Cada cosecha es una pequeña fiesta colectiva.",
    "El contacto con la tierra es algo que muchas personas con discapacidad mental no tuvieron oportunidad de experimentar. Tocar la tierra húmeda, oler las hojas frescas, ver una flor abrirse al sol. Son experiencias sensoriales completas, que ordenan internamente y conectan con algo más grande.",
  ],
  galleryEyebrow: "del jardín al plato",
  galleryHeading: "Cosechar lo que sembramos juntos.",
  galleryIntro:
    "Algunos momentos del taller de huerta: plantas aromáticas, morrones del año, manos en la tierra, albahaca al sol.",
  imagesDir: "/images/huerta",
  imageCount: 10,
};

export const manualidadesPage: ActivityDetail = {
  slug: "manualidades",
  eyebrow: "actividades · APADMSI",
  title: "Taller de Manualidades",
  headlineHtml:
    "Pintar, recortar, ensamblar — <em>transformar</em>.",
  paragraphsHtml: [
    "El taller de manualidades es uno de los espacios donde más se libera la creatividad. Frascos pintados, marcos decorados, cuadros con témpera, collages con papel de revista, objetos hechos con materiales reciclados. Cada concurrente trabaja a su ritmo, con sus colores favoritos, en su propio proyecto.",
    "Lo importante en este taller no es la técnica — es el proceso. Mojar el pincel, sentir la pintura sobre el cartón, mezclar dos colores y descubrir el tercero. Equivocarse, corregir, volver a empezar. Cada producción es única, propia y profundamente valorada.",
    "Los trabajos terminados decoran el Centro, se llevan a las casas, se regalan a los compañeros. Algunos se exponen en muestras anuales abiertas a la comunidad. La manualidad es también un puente: con la familia, con la comunidad, con uno mismo.",
  ],
  galleryEyebrow: "color, papel, pincel",
  galleryHeading: "El taller en plena producción.",
  galleryIntro:
    "Algunos momentos del taller de manualidades: frascos pintados, marcos en proceso, témpera y pinceles, manos creativas trabajando.",
  imagesDir: "/images/manualidades",
  imageCount: 5,
};

// Mapa central de páginas de actividad. Permite que la ruta dinámica
// /actividades/[slug] resuelva el contenido por slug.
export const activityDetailPages: Record<string, ActivityDetail> = {
  "arte-terapia": arteTerapiaPage,
  "recreativas": recreativasPage,
  "musicoterapia": musicoterapiaPage,
  "cocina": cocinaPage,
  "huerta": huertaPage,
  "manualidades": manualidadesPage,
};
