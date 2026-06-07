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
  email: "apadmsisanisidro@gmail.com",
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
  lede: "APADMSI es un Centro de Día en San Isidro. Hace más de cuatro décadas acompañamos a jóvenes y adultos con discapacidad intelectual — y a sus familias. Con un equipo profesional comprometido y la convicción de que cada vida importa.",
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
    "Somos la <strong>Asociación de Padres y Amigos de Discapacitados Mentales de San Isidro</strong> — una Asociación Civil sin fines de lucro fundada el 14 de julio de 1982 por un grupo de padres y amigos de personas con discapacidad intelectual. En febrero de 1990, con un subsidio de la Municipalidad de San Isidro, adquirimos nuestra propia sede en Billinghurst 1260, donde seguimos funcionando.",
    "El Centro de Día surge como respuesta a la necesidad de ofrecer un espacio integral destinado a personas jóvenes y adultas con discapacidad intelectual que finalizaron su trayecto en la Educación Especial y que no se insertan en el ámbito laboral protegido. Es una alternativa a la institucionalización, promoviendo la permanencia en sus entornos familiares y comunitarios.",
    "Recibimos concurrentes a través de <strong>obras sociales y prepagas</strong> — incluyendo <strong>PAMI, Incluir Salud y Pensiones No Contributivas</strong> — y trabajamos con todas las coberturas. Acompañamos a personas de <strong>San Isidro, Garín, Tigre y San Fernando</strong>.",
    "APADMSI es una Institución de puertas abiertas. Cualquier familiar puede venir a ver cómo trabajamos, sin necesidad de avisar.",
  ],
  // Bloque destacado con la misión institucional declarada.
  mission: {
    label: "Nuestra misión",
    statements: [
      "Brindar un espacio de acompañamiento integral que promueva el desarrollo personal, emocional y social de las personas con discapacidad intelectual.",
      "Fomentar la participación activa, la inclusión social y el ejercicio pleno de los derechos de los concurrentes.",
      "Contribuir a la mejora de la calidad de vida de los concurrentes y sus familias mediante propuestas terapéuticas, recreativas y educativas adecuadas a sus necesidades.",
    ],
  },
  cta: { label: "Conocé nuestras actividades", href: "/#actividades" },
} as const;

export const objectives = {
  eyebrow: "nuestros objetivos",
  heading: "Tres compromisos que no negociamos.",
  intro:
    "Estos son los pilares fundacionales de la Institución. Cada actividad, cada decisión, cada profesional que se suma al equipo se mide por su contribución a estos compromisos.",
  items: [
    {
      number: "01",
      title: "Desarrollo personal",
      headline: "Promover el desarrollo personal, emocional y social.",
      desc: "Estimulamos las capacidades cognitivas, motrices, comunicacionales y socioemocionales a través de actividades planificadas e interdisciplinarias.",
    },
    {
      number: "02",
      title: "Autonomía",
      headline: "Fortalecer habilidades de la vida diaria y autonomía personal.",
      desc: "Trabajamos con cada concurrente para que pueda realizar las acciones del día a día con la mayor independencia posible.",
    },
    {
      number: "03",
      title: "Inclusión",
      headline: "Fomentar la participación activa y la inclusión en la comunidad.",
      desc: "Salidas, talleres compartidos e integración con otras instituciones. La participación activa en la comunidad es parte central del programa.",
    },
  ],
  // Frase de cierre institucional, declarada por la propia organización.
  closing: "Somos tu mejor alternativa en integración social.",
} as const;

export const activities = {
  eyebrow: "qué hacemos",
  heading: "Un programa completo. Una sola intención: cuidar.",
  intro:
    "Desarrollamos un programa amplio de actividades terapéuticas, recreativas y ocupacionales con el objetivo de enriquecer las diversas habilidades de cada concurrente.",
  // Frase institucional declarada en la web vigente.
  officialIntro: {
    label: "Actividades de todo tipo",
    text: "En A.P.A.D.M.S.I. desarrollamos un programa amplio con el objetivo de enriquecer las diversas habilidades de cada concurrente.",
  },
  // Lista oficial de actividades.
  items: [
    { icon: "v", title: "Actividades de la vida diaria", desc: "", image: "/images/recreativas/recreativas-6.jpg" },
    { icon: "o", title: "Actividades ocupacionales", desc: "", image: "/images/cocina/cocina-9.jpg" },
    { icon: "s", title: "Socialización", desc: "", image: "/images/recreativas/recreativas-8.jpg" },
    {
      icon: "a",
      title: "Arte Terapia",
      desc: "",
      href: "/actividades/arte-terapia",
    },
    {
      icon: "r",
      title: "Actividades recreativas y deportivas",
      desc: "",
      href: "/actividades/recreativas",
    },
    {
      icon: "m",
      title: "Musicoterapia",
      desc: "",
      href: "/actividades/musicoterapia",
    },
    { icon: "p", title: "Taller de padres y clases abiertas", desc: "", image: "/images/recreativas/recreativas-7.jpg" },
    { icon: "fo", title: "Fonoaudiología", desc: "", image: "/images/recreativas/recreativas-9.jpg" },
    {
      icon: "h",
      title: "Taller de Huerta y Jardinería",
      desc: "",
      href: "/actividades/huerta",
    },
    {
      icon: "c",
      title: "Taller de Cocina",
      desc: "",
      href: "/actividades/cocina",
    },
    {
      icon: "ma",
      title: "Taller de Manualidades",
      desc: "",
      href: "/actividades/manualidades",
    },
    { icon: "ef", title: "Educación Física", desc: "", image: "/images/huerta/huerta-6.jpg" },
    { icon: "hs", title: "Taller de habilidades sociales e integración", desc: "", image: "/images/recreativas/recreativas-10.jpg" },
    { icon: "sc", title: "Salidas a la comunidad", desc: "", image: "/images/viaje-institucional/viaje-institucional-3.jpg" },
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
    "APADMSI nació el 14 de julio de 1982 como respuesta a la necesidad de ofrecer un espacio integral para personas con discapacidad intelectual. Un grupo de padres y amigos que veían a sus hijos sin un lugar adonde ir decidió crear esa casa que no existía. Cuatro décadas después, la misma casa sigue de pie en Billinghurst 1260, ampliada y mejorada — pero idéntica en espíritu.",
  timeline: [
    {
      year: "1982",
      title: "Fundación.",
      desc: "Un grupo de padres y amigos del partido de San Isidro crea la Asociación el 14 de julio de 1982, con el objetivo de brindar un espacio integral para jóvenes y adultos con discapacidad intelectual que finalizaron la Educación Especial y no se insertan en el ámbito laboral protegido.",
    },
    {
      year: "Década del '90",
      title: "Nueva comisión, nuevo impulso.",
      desc: "Llegan padres nuevos y se renueva la Comisión de trabajo. Se amplía el programa de actividades y APADMSI comienza a recibir concurrentes a través de PAMI, Incluir Salud y PNC. En esta década, Nélida Sastre de Ehrhardt — conocida como Lala — ingresa a la Institución después de haber fundado la primera escuela especial para personas con discapacidad intelectual de San Fernando. Desde entonces lidera la Comisión Directiva con una premisa firme: trabajar para los que menos tienen.",
    },
    {
      year: "Años 2000",
      title: "Crecimiento y visibilidad.",
      desc: "El Centro recibe en estos años visitas institucionales de figuras nacionales — funcionarios de Desarrollo Social, autoridades municipales, donantes privados. La Municipalidad de San Isidro consolida su acompañamiento permanente, una relación que ya lleva más de cuatro décadas.",
    },
    {
      year: "2016",
      title: "Bailando por un Sueño.",
      desc: "Por iniciativa de la Municipalidad de San Isidro, la Institución participa en el programa de televisión Bailando por un Sueño. La experiencia le da una visibilidad sin precedentes al Centro, atrae nuevos donantes y fortalece el vínculo con la comunidad.",
    },
    {
      year: "Hoy",
      title: "Una casa con cuarenta años en pie.",
      desc: "Más de 30 jóvenes y adultos asisten diariamente al Centro. La Fundación Banco Provincia visitó la Institución y la reconoció como referencia por la alegría y el amor del equipo de trabajo. El proyecto continúa: sostener lo construido y abrir, algún día, un hogar permanente para quienes ya no tengan familia que los cuide.",
    },
  ],
  pendingNote: "Más hitos institucionales en proceso de carga.",
} as const;

export const team = {
  eyebrow: "el equipo",
  // <em> recibe highlight peach
  headlineHtml: "Cuidar <em>no se improvisa</em>.",
  intro:
    "La Institución está conformada por una Comisión Directiva que conduce la Asociación Civil, y un equipo profesional interdisciplinario que lleva adelante el trabajo diario del Centro.",
  // Autoridades y dirección actuales de la institución.
  // imageSlug: si existe `public/images/equipo/{slug}.jpg|png|webp` se usa
  // como avatar; si no, se muestra placeholder con iniciales.
  members: [
    {
      role: "Presidenta · Fundadora",
      name: "Nélida Sastre de Ehrhardt",
      desc: "Conocida como Lala. Ingresó en los años 90 después de haber fundado la primera escuela especial para personas con discapacidad intelectual de San Fernando. Lidera la Institución con una premisa firme: trabajar para los que menos tienen.",
      imageSlug: "nelida-sastre",
    },
  ],
  // Equipo profesional especializado (sin foto individual).
  professionals: [
    { name: "", role: "Directoras" },
    { name: "", role: "Orientadoras" },
    { name: "", role: "Psicóloga" },
    { name: "", role: "Auxiliares" },
    { name: "", role: "Médico Psiquiatra" },
    { name: "", role: "Terapista Ocupacional" },
    { name: "", role: "Nutricionista" },
    { name: "", role: "Fonoaudióloga" },
    { name: "", role: "Profesora de Educación Física" },
    { name: "", role: "Musicoterapeuta" },
    { name: "", role: "Arteterapeuta" },
  ],
  // Equipo docente y de cuidado diario — las que están de 8:30 a 16:30
  // todos los días. Multifunción.
  daily: {
    label: "Comisión Directiva",
    intro: "",
    members: [
      { name: "", role: "Presidente" },
      { name: "", role: "Vicepresidente" },
      { name: "", role: "Tesorero" },
      { name: "", role: "Secretario" },
      { name: "", role: "Prosecretario" },
      { name: "", role: "Protesorero" },
      { name: "", role: "Vocales" },
      { name: "", role: "Tutores" },
      { name: "", role: "Suplente" },
      { name: "", role: "Revisores de Cuenta" },
    ],
  },
  // Cocina y limpieza.
  kitchen: {
    label: "",
    members: [],
  },
  closing:
    "Un equipo interdisciplinario que trabaja con compromiso, vocación y alegría.",
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
    title: "",
    desc: "",
    cta: { label: "", href: "" },
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
  summary: { average: 4.6, count: 30 } as { average: number; count: number } | null,
  items: [
    {
      author: "Roberto Sánchez",
      rating: 5,
      date: "Padre de un concurrente",
      text: "APADMSI es un espacio de contención para nuestros hijos y para nosotros, donde sobra la cordialidad y el cariño. El personal brinda un gran cariño a los concurrentes, que tienen distintas patologías y problemáticas. En resumen, es un lugar que nos da mucha seguridad y tranquilidad.",
    },
    {
      author: "Roxana Sanchiz",
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
      author: "Raúl César Serrat",
      rating: 5,
      date: "Hace un año",
      text: "Solo el amor salvará al mundo. APADMSI es una institución que lo demuestra. Es importante conocer la obra que realiza.",
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
    {
      author: "Cecilia Lanusse",
      rating: 5,
      date: "Hermana de una concurrente",
      text: "Quiero agradecer la existencia de APADMSI. Para Deborah es su segundo HOGAR, así con mayúscula, donde recibe cada día todo el amor, los cuidados y la atención que necesita. Es donde comparte lo cotidiano con sus pares, es el lugar donde puedo dejarla con la total tranquilidad de que va a estar tan bien atendida, o mejor, que en casa. Para mí significa descanso físico y mental y la seguridad de que no estoy sola con el cuidado de Deborah de cada día. Gracias.",
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
    "Operar como Centro de Día para personas con discapacidad intelectual exige cumplir requisitos exigentes en infraestructura, equipo profesional y protocolos de atención. APADMSI cuenta con la habilitación oficial en los tres niveles del Estado y es prestadora reconocida por los principales organismos públicos del sistema.",
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
      desc: "Subsidió la compra de la sede en 1990. Compromiso estable y continuo. Participó del colectivo de discapacidad y mantiene contacto permanente con el Centro.",
      color: "#0E7C5A",
      logoSlug: "msi",
    },
    {
      kind: "fbp",
      abbr: "Fundación Banco Provincia",
      name: "Colaborador",
      desc: "Periodistas de la Fundación visitaron el Centro y lo reconocieron como referencia por la alegría y el amor del equipo de trabajo.",
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
    "Conocé APADMSI — un Centro de Día para personas con discapacidad intelectual en San Isidro, sostenido con donaciones.",
} as const;

export const newsletter = {
  label: "",
  intro: "",
  placeholder: "",
  cta: "",
  successTitle: "",
  successText: "",
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
    "El taller de cocina es uno de los espacios más concretos del programa. Manipular ingredientes, oler especias, mezclar harina y agua, esperar que la masa leve. Cada acción tiene un sentido y un resultado tangible — y eso, para una persona con discapacidad intelectual, es una conquista enorme.",
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
    "El contacto con la tierra es algo que muchas personas con discapacidad intelectual no tuvieron oportunidad de experimentar. Tocar la tierra húmeda, oler las hojas frescas, ver una flor abrirse al sol. Son experiencias sensoriales completas, que ordenan internamente y conectan con algo más grande.",
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
