(function () {
  const commitments = [
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Comisiones Sectoriales",
        "benefit": "Crear <strong>grupos de trabajo para sectores específicos</strong> donde las socias puedan <strong>detectar necesidades propias y proponer iniciativas</strong>, lideradas por una asociada.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Primera Red de Mentoras",
        "benefit": "<strong>Experiencia compartida para escalar tu negocio</strong>. Tanto si necesitas impulso como si quieres aportar tu trayectoria, crearemos un <strong>sistema real de apoyo</strong> entre nosotras.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Programa de Madrinas",
        "benefit": "Facilitar que las asociadas inviten y acompañen a otras empresarias en su incorporación con un <strong>trato más cercano y apoyo directo</strong>.",
        "horizon": "Consolidación",
        "highlight": true
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Sevilla tiene nombre de empresaria",
        "benefit": "Campaña continuada para visibilizar a <strong>empresarias reales, sus trayectorias y su contribución económica</strong> mediante colaboraciones y soportes.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Welcome Pack: Tu primer paso en la Red",
        "benefit": "Creación de un 'Welcome Pack' estructurado que incluya foto institucional, entrevista en Instagram, plan de bienvenida y un <strong>kit digital con el distintivo de la asociación</strong> para que la nueva socia pueda lucirlo en sus propias redes sociales y web corporativa.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "6. Información útil y una asociación más fácil",
        "title": "Empresarias al Día",
        "benefit": "Boletín mensual breve con <strong>nuevas incorporaciones, próximas actividades, logros de las socias</strong> y oportunidades destacadas.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Radar de Oportunidades",
        "benefit": "Filtrar y compartir <strong>convocatorias, subvenciones y ayudas de interés real</strong> para empresarias y pymes.",
        "horizon": "Primeros 100 días",
        "highlight": true
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Hackatón de Impacto Social Local",
        "benefit": "Crear equipos de trabajo multidisciplinares entre las socias para resolver un reto real planteado por ONGs locales o emprendedoras sociales. Una iniciativa para <strong>fomentar el trabajo en equipo, visibilizar el liderazgo femenino y generar un impacto positivo directo</strong> en nuestra comunidad.",
        "horizon": "Primer año",
        "highlight": true
    },
    {
        "axis": "1. Representación e influencia",
        "title": "Tu voz, donde se decide",
        "benefit": "Explicar qué se defiende, qué se consigue y cómo afecta a las socias cada vez que la asociación <strong>participa en un espacio institucional relevante</strong>.",
        "horizon": "Primeros 100 días",
        "highlight": false
    },
    {
        "axis": "1. Representación e influencia",
        "title": "Conocimiento para influir",
        "benefit": "Reforzar la difusión de la Cátedra de la Mujer Empresaria e impulsar <strong>estudios sobre sectores y oportunidades</strong> para orientar la representación pública con datos.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Agenda de Formación Empresaria",
        "benefit": "Calendario práctico sobre gestión, finanzas, crecimiento y digitalización, apoyado en convenios existentes y organizado <strong>según las demandas reales</strong>.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Expertas Empresarias Sevillanas",
        "benefit": "Dar espacio a las <strong>propias asociadas como formadoras y referentes</strong>, con criterios abiertos para seleccionar intervenciones que aporten valor.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "2. Formación y crecimiento empresarial",
        "title": "Empresarias de hoy, empresarias de mañana",
        "benefit": "Conectar a empresarias con estudiantes universitarias a través de <strong>proyectos, prácticas y acercamiento de referentes</strong>.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Círculos Empresarias",
        "benefit": "Encuentros reducidos y bimestrales para <strong>facilitar conexiones entre socias</strong> y acercarlas a personas relevantes del ámbito político, social y empresarial.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Directorio Empresarial Vivo",
        "benefit": "Mejorar el directorio con perfiles completos y actualizados para que las socias puedan <strong>encontrar fácilmente proveedoras, clientas y colaboradoras</strong>.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Un año, una agenda de encuentros",
        "benefit": "Publicar anualmente las fechas clave para <strong>evitar saturación</strong> y permitir que las empresarias puedan planificar su participación.",
        "horizon": "Primeros 100 días",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Citas anuales de la Red",
        "benefit": "Consolidar la Comida de Navidad y Preferia, y añadir un <strong>nuevo Encuentro de Verano sostenible</strong> para fomentar la red empresarial.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Marca Empresaria Sevillana",
        "benefit": "Definir el relato de marca y crear un <strong>distintivo de pertenencia reconocible</strong> para web y redes, reforzando la reputación de ser socia.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Reconocimiento de las asociadas",
        "benefit": "Ampliar la variedad de empresarias protagonistas en la comunicación para <strong>evitar concentrar la visibilidad siempre en los mismos perfiles</strong>.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "6. Información útil y una asociación más fácil",
        "title": "Empresarias Sevillanas, más fácil",
        "benefit": "Revisar web, altas y procesos administrativos para <strong>reducir fricciones y modernizar la experiencia</strong>.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Alianzas para crecer",
        "benefit": "Impulsar colaboraciones transparentes con otras entidades basadas en el <strong>beneficio concreto para las socias</strong>, sin prometer convenios cerrados antes de tiempo.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Empresarias sin Fronteras",
        "benefit": "Línea de conexión internacional mediante <strong>encuentros con consulados y embajadas</strong> para explorar oportunidades de mercado.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Recursos para avanzar",
        "benefit": "Plan de financiación diversificado (cuotas, patrocinios, subvenciones) para sostener actividades <strong>sin depender de cuotas exclusivamente</strong>.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "7. Alianzas, sostenibilidad y gobernanza",
        "title": "Gobernanza clara",
        "benefit": "Revisión de estatutos para <strong>clarificar reglas de participación, incompatibilidades, contrataciones y transición de cargos</strong>.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Gala Conmemorativa del 15º Aniversario",
        "benefit": "Gran Gala conmemorativa para recuperar y celebrar la memoria institucional y a <strong>las protagonistas de la asociación</strong>.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Las empresarias que abrieron camino",
        "benefit": "Proyecto de investigación histórico para 2029 que visibilice a <strong>empresarias sevillanas de generaciones anteriores</strong>.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Feria Empresarial de Empresarias Sevillanas",
        "benefit": "Muestra comercial en <strong>espacios emblemáticos (como el Casino de la Exposición)</strong> donde las asociadas puedan exponer sus servicios y productos.",
        "horizon": "Legado",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Ruta Provincial de Empresarias Sevillanas",
        "benefit": "Mantener nuestro firme compromiso con las iniciativas que ya funcionan con éxito en Empresarias Sevillanas. Seguiremos desarrollando este proyecto itinerante en colaboración con Prodetur para <strong>visibilizar el emprendimiento femenino y generar networking</strong> en todos los municipios de la provincia.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Foro Prodetur Mujer y Empresa",
        "benefit": "Garantizar la continuidad de los grandes hitos anuales que ya lideramos. Seguiremos consolidando el Foro Prodetur Mujer y Empresa como el <strong>congreso de referencia del liderazgo empresarial femenino</strong> en Sevilla.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "4. Visibilidad y prestigio",
        "title": "Presencia y Base de Datos de Medios",
        "benefit": "Ampliar nuestra base de contactos y <strong>presencia activa en medios de comunicación</strong> (radio, prensa y televisión) para elevar el nivel de visibilidad e influencia institucional.",
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
        "image": "_C4A2038.jpg",




        "focus": "Abogada y empresaria con más de 20 años de trayectoria. Su labor durante casi una década en la directiva le permite <strong>conocer a fondo las necesidades reales de las socias</strong>. Su actual presencia en la CES, la Cámara de Comercio y la CEA no es un fin en sí mismo, sino la herramienta clave para que <strong>Empresarias Sevillanas tenga voz donde se toman las decisiones</strong> y pueda conseguir mejores oportunidades para tu negocio.",
        "lead": true
    },
    {
        "name": "Mercedes Núñez Arcos",
        "role": "Vicepresidencia de Relaciones Institucionales",
        "initials": "MN",
        "image": "_C4A2071.jpg",
        "focus": "Abogada y Secretaria General de APROCOM. Aporta una sólida trayectoria institucional y comercial. Su participación activa en comisiones de la Cámara, la CES y el Ayuntamiento tiene un objetivo claro: <strong>abrir puertas, construir alianzas estratégicas</strong> y garantizar que los intereses de nuestras asociadas estén defendidos en las <strong>mesas de negociación más importantes de Sevilla</strong>."
    },
    {
        "name": "Rocío Cano Fernández-Piedra",
        "role": "Vicepresidencia de Comunicación",
        "initials": "RC",
        "image": "_C4A1973.jpg",
        "focus": "Fundadora de SeviAI, especializada en Inteligencia Artificial para PYMES. Combina 15 años de experiencia en gestión de equipos con visión tecnológica y estratégica. Como Vicepresidenta de Comunicación, su meta es cambiar el foco: <strong>dejar de hablar tanto del comité</strong> y usar los canales de la Asociación para <strong>visibilizar el talento, los servicios y los logros de cada una de las socias</strong>.",
        "lead": false
    },
    {
        "name": "Macarena Pérez Ocaña",
        "role": "Secretaría General",
        "initials": "MP",
        "image": "_C4A1964.jpg",
        "focus": "Abogada y fundadora de su propia firma. Como actual Tesorera, conoce perfectamente el engranaje interno de la Asociación. Asume la Secretaría General con el propósito de transformar la gestión diaria: <strong>hacerla más ágil, cercana y transparente</strong>. Su objetivo es que cualquier socia, desde el primer día, sepa <strong>a quién acudir y cómo sacar el máximo provecho a la red</strong>.",
        "lead": false
    },
    {
        "name": "Victoria Luna Ortiz",
        "role": "Tesorería",
        "initials": "VL",
        "image": "_C4A2014.jpg",
        "focus": "Experta en asesoramiento y planificación financiera. Aporta a la candidatura una visión empresarial de los recursos: no se trata solo de controlar el gasto, sino de <strong>optimizar la financiación, buscar nuevas ayudas y diversificar los ingresos</strong>. El objetivo es ofrecer más formación y mejores proyectos a las socias, <strong>garantizando un crecimiento sostenible</strong>.",
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
