(function () {
  const commitments = [
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Comisiones Sectoriales",
        "benefit": "Crear grupos de trabajo para sectores específicos donde las socias puedan detectar necesidades propias y proponer iniciativas, lideradas por una asociada.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Primera Red de Mentoras",
        "benefit": "Experiencia compartida para escalar tu negocio. Tanto si necesitas impulso como si quieres aportar tu trayectoria, crearemos un sistema real de apoyo entre nosotras.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Programa de Madrinas",
        "benefit": "Facilitar que las asociadas inviten y acompañen a otras empresarias en su incorporación con un trato más cercano y apoyo directo.",
        "horizon": "Consolidación",
        "highlight": true
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Sevilla tiene nombre de empresaria",
        "benefit": "Campaña continuada para visibilizar a empresarias reales, sus trayectorias y su contribución económica mediante colaboraciones y soportes.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Welcome Pack: Tu primer paso en la Red",
        "benefit": "Creación de un 'Welcome Pack' estructurado que incluya foto institucional, entrevista en Instagram, plan de bienvenida y un kit digital con el distintivo de la asociación para que la nueva socia pueda lucirlo en sus propias redes sociales y web corporativa.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "6. Información útil y una asociación más fácil",
        "title": "Empresarias al Día",
        "benefit": "Boletín mensual breve con nuevas incorporaciones, próximas actividades, logros de las socias y oportunidades destacadas.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Radar de Oportunidades",
        "benefit": "Filtrar y compartir convocatorias, subvenciones y ayudas de interés real para empresarias y pymes.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Hackatón de Impacto Social Local",
        "benefit": "Crear equipos de trabajo multidisciplinares entre las socias para resolver un reto real planteado por ONGs locales o emprendedoras sociales. Una iniciativa para fomentar el trabajo en equipo, visibilizar el liderazgo femenino y generar un impacto positivo directo en nuestra comunidad.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "1. Representación e influencia",
        "title": "Tu voz, donde se decide",
        "benefit": "Explicar qué se defiende, qué se consigue y cómo afecta a las socias cada vez que la asociación participa en un espacio institucional relevante.",
        "horizon": "Primeros 100 días",
        "highlight": false
    },
    {
        "axis": "1. Representación e influencia",
        "title": "Conocimiento para influir",
        "benefit": "Reforzar la difusión de la Cátedra de la Mujer Empresaria e impulsar estudios sobre sectores y oportunidades para orientar la representación pública con datos.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Agenda de Formación Empresaria",
        "benefit": "Calendario práctico sobre gestión, finanzas, crecimiento y digitalización, apoyado en convenios existentes y organizado según las demandas reales.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Expertas Empresarias Sevillanas",
        "benefit": "Dar espacio a las propias asociadas como formadoras y referentes, con criterios abiertos para seleccionar intervenciones que aporten valor.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Empresarias de hoy, empresarias de mañana",
        "benefit": "Conectar a empresarias con estudiantes universitarias a través de proyectos, prácticas y acercamiento de referentes.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Círculos Empresarias",
        "benefit": "Encuentros reducidos y bimestrales para facilitar conexiones entre socias y acercarlas a personas relevantes del ámbito político, social y empresarial.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Directorio Empresarial Vivo",
        "benefit": "Mejorar el directorio con perfiles completos y actualizados para que las socias puedan encontrar fácilmente proveedoras, clientas y colaboradoras.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Un año, una agenda de encuentros",
        "benefit": "Publicar anualmente las fechas clave para evitar saturación y permitir que las empresarias puedan planificar su participación.",
        "horizon": "Primeros 100 días",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Citas anuales de la Red",
        "benefit": "Consolidar la Comida de Navidad y Preferia, y añadir un nuevo Encuentro de Verano sostenible para fomentar la red empresarial.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Marca Empresaria Sevillana",
        "benefit": "Definir el relato de marca y crear un distintivo de pertenencia reconocible para web y redes, reforzando la reputación de ser socia.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Reconocimiento de las asociadas",
        "benefit": "Ampliar la variedad de empresarias protagonistas en la comunicación para evitar concentrar la visibilidad siempre en los mismos perfiles.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "6. Información útil y una asociación más fácil",
        "title": "Empresarias Sevillanas, más fácil",
        "benefit": "Revisar web, altas y procesos administrativos para reducir fricciones y modernizar la experiencia.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Alianzas para crecer",
        "benefit": "Impulsar colaboraciones transparentes con otras entidades basadas en el beneficio concreto para las socias, sin prometer convenios cerrados antes de tiempo.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Empresarias sin Fronteras",
        "benefit": "Línea de conexión internacional mediante encuentros con consulados y embajadas para explorar oportunidades de mercado.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Recursos para avanzar",
        "benefit": "Plan de financiación diversificado (cuotas, patrocinios, subvenciones) para sostener actividades sin depender de cuotas exclusivamente.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Gobernanza clara",
        "benefit": "Revisión de estatutos para clarificar reglas de participación, incompatibilidades, contrataciones y transición de cargos.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Gala Conmemorativa del 15º Aniversario",
        "benefit": "Gran Gala conmemorativa para recuperar y celebrar la memoria institucional y a las protagonistas de la asociación.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Las empresarias que abrieron camino",
        "benefit": "Proyecto de investigación histórico para 2029 que visibilice a empresarias sevillanas de generaciones anteriores.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Feria Empresarial de Empresarias Sevillanas",
        "benefit": "Muestra comercial en espacios emblemáticos (como el Casino de la Exposición) donde las asociadas puedan exponer sus servicios y productos.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Ruta Provincial de Empresarias Sevillanas",
        "benefit": "Mantener nuestro firme compromiso con las iniciativas que ya funcionan con éxito en Empresarias Sevillanas. Seguiremos desarrollando este proyecto itinerante en colaboración con Prodetur para visibilizar el emprendimiento femenino y generar networking en todos los municipios de la provincia.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Foro Prodetur Mujer y Empresa",
        "benefit": "Garantizar la continuidad de los grandes hitos anuales que ya lideramos. Seguiremos consolidando el Foro Prodetur Mujer y Empresa como el congreso de referencia del liderazgo empresarial femenino en Sevilla.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Presencia y Base de Datos de Medios",
        "benefit": "Ampliar nuestra base de contactos y presencia activa en medios de comunicación (radio, prensa y televisión) para elevar el nivel de visibilidad e influencia institucional.",
        "horizon": "Primer año",
        "highlight": false
    }
];

  window.CAMPAIGN_CONTENT = {
    reviewMode: true,
    team: [
    {
        "name": "Mariló Caro Cals",
        "role": "Presidencia",
        "initials": "MC",
        "focus": "Abogada y empresaria con más de 20 años de trayectoria. Su labor durante casi una década en la directiva le permite conocer a fondo las necesidades reales de las socias. Su actual presencia en la CES, la Cámara de Comercio y la CEA no es un fin en sí mismo, sino la herramienta clave para que Empresarias Sevillanas tenga voz donde se toman las decisiones y pueda conseguir mejores oportunidades para tu negocio.",
        "lead": true
    },
    {
        "name": "Mercedes Núñez Arcos",
        "role": "Vicepresidencia de Relaciones Institucionales",
        "initials": "MN",
        "focus": "Abogada y Secretaria General de APROCOM. Aporta una sólida trayectoria institucional y comercial. Su participación activa en comisiones de la Cámara, la CES y el Ayuntamiento tiene un objetivo claro: abrir puertas, construir alianzas estratégicas y garantizar que los intereses de nuestras asociadas estén defendidos en las mesas de negociación más importantes de Sevilla."
    },
    {
        "name": "Rocío Cano Fernández-Piedra",
        "role": "Vicepresidencia de Comunicación",
        "initials": "RC",
        "focus": "Fundadora de SeviAI, especializada en Inteligencia Artificial para PYMES. Combina 15 años de experiencia en gestión de equipos con visión tecnológica y estratégica. Como Vicepresidenta de Comunicación, su meta es cambiar el foco: dejar de hablar tanto del comité y usar los canales de la Asociación para visibilizar el talento, los servicios y los logros de cada una de las socias.",
        "lead": false
    },
    {
        "name": "Macarena Pérez Ocaña",
        "role": "Secretaría General",
        "initials": "MP",
        "focus": "Abogada y fundadora de su propia firma. Como actual Tesorera, conoce perfectamente el engranaje interno de la Asociación. Asume la Secretaría General con el propósito de transformar la gestión diaria: hacerla más ágil, cercana y transparente. Su objetivo es que cualquier socia, desde el primer día, sepa a quién acudir y cómo sacar el máximo provecho a la red.",
        "lead": false
    },
    {
        "name": "Victoria Luna Ortiz",
        "role": "Tesorería",
        "initials": "VL",
        "focus": "Experta en asesoramiento y planificación financiera. Aporta a la candidatura una visión empresarial de los recursos: no se trata solo de controlar el gasto, sino de optimizar la financiación, buscar nuevas ayudas y diversificar los ingresos. El objetivo es ofrecer más formación y mejores proyectos a las socias, garantizando un crecimiento sostenible.",
        "lead": false
    }
],
    axes: [
    "1. Representación e influencia",
    "2. Formación y crecimiento empresarial",
    "3. Relaciones, participación y pertenencia",
    "4. Visibilidad y prestigio",
    "5. Crecimiento, captación y acogida",
    "6. Información útil y una asociación más fácil",
    "7. Alianzas, sostenibilidad y gobernanza",
    "8. Proyectos de legado y futuro"
],
    commitments,
  };
})();
