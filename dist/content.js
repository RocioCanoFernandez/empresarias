(function () {
  const commitments = [
    {
        "axis": "1. Representación e influencia",
        "title": "Tu voz, donde se decide",
        "benefit": "Explicar qué se defiende, qué se consigue y cómo afecta a las socias cada vez que la asociación participa en un espacio institucional relevante.",
        "horizon": "Primeros 100 días",
        "highlight": true
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
        "title": "Bolsa de Mentoras",
        "benefit": "Red voluntaria de empresarias dispuestas a orientar a otras socias en decisiones concretas, empezando con un grupo piloto de alcance controlado.",
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
        "title": "Comisiones Sectoriales",
        "benefit": "Crear grupos de trabajo para sectores específicos donde las socias puedan detectar necesidades propias y proponer iniciativas, lideradas por una asociada.",
        "horizon": "Primer año",
        "highlight": false
    },
    {
        "axis": "3. Relaciones, participación y pertenencia",
        "title": "Círculos Empresarias",
        "benefit": "Encuentros reducidos y bimestrales para facilitar conexiones entre socias y acercarlas a personas relevantes del ámbito político, social y empresarial.",
        "horizon": "Primer año",
        "highlight": true
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
        "title": "Sevilla tiene nombre de empresaria",
        "benefit": "Campaña continuada para visibilizar a empresarias reales, sus trayectorias y su contribución económica mediante colaboraciones y soportes.",
        "horizon": "Primer año",
        "highlight": true
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
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Una más en la Red",
        "benefit": "Facilitar que las asociadas inviten y acompañen a otras empresarias en su incorporación con materiales claros de presentación.",
        "horizon": "Consolidación",
        "highlight": false
    },
    {
        "axis": "5. Crecimiento, captación y acogida",
        "title": "Welcome Pack: Tu primer paso en la Red",
        "benefit": "Creación de un 'Welcome Pack' estructurado que incluya foto institucional, entrevista en Instagram y un plan de bienvenida para orientar a la nueva socia sobre canales y participación desde el primer día.",
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
        "axis": "6. Información útil y una asociación más fácil",
        "title": "Radar de Oportunidades",
        "benefit": "Filtrar y compartir convocatorias, subvenciones y ayudas de interés real para empresarias y pymes.",
        "horizon": "Primeros 100 días",
        "highlight": true
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
    },
    {
        "axis": "8. Proyectos de legado y futuro",
        "title": "Las empresarias que abrieron camino",
        "benefit": "Proyecto de investigación histórico para 2029 que visibilice a empresarias sevillanas de generaciones anteriores.",
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
        "focus": "Abogada y empresaria sevillana especializada en Derecho Civil, Penal e Internacional, con más de 20 años de trayectoria. Secretaria General de la asociación durante 11 años. Actualmente es Presidenta de la Comisión de Régimen Interno de la CES, miembro del Pleno de la Cámara de Comercio de Sevilla y vocal del Consejo Económico y Social de Sevilla, entre otros cargos institucionales. Una trayectoria que combina experiencia jurídica, liderazgo empresarial, representación institucional y conocimiento directo del tejido empresarial andaluz.",
        "lead": true
    },
    {
        "name": "Mercedes Núñez Arcos",
        "role": "Vicepresidencia de Relaciones Institucionales",
        "initials": "MN",
        "focus": "Secretaria General de APROCOM. Aporta una sólida trayectoria asociativa en el sector comercio, un profundo conocimiento del entorno institucional y capacidad para abrir puertas y representar públicamente a Empresarias Sevillanas. (Pendiente de ampliación personal).",
        "lead": false
    },
    {
        "name": "Rocío Cano Fernández-Piedra",
        "role": "Vicepresidencia de Comunicación",
        "initials": "RC",
        "focus": "Empresaria sevillana y fundadora de SeviAI, especializada en consultoría, formación e IA aplicada a negocios. Cuenta con más de 15 años de experiencia previa vinculada a la gestión de eventos, coordinación de equipos y comunicación corporativa. Es miembro activo de Empresarias Sevillanas y BNI. Su perfil aúna el conocimiento directo del tejido empresarial local con el uso práctico de herramientas tecnológicas avanzadas. Aporta a la candidatura renovación, creatividad y capacidad estratégica para mejorar la comunicación interna y convertir las ideas en campañas que hagan más visible y cercana la asociación.",
        "lead": false
    },
    {
        "name": "Macarena Pérez Ocaña",
        "role": "Secretaría General",
        "initials": "MP",
        "focus": "Aporta experiencia asociativa, criterio jurídico, carisma y cercanía para escuchar a las socias, fortalecer la organización y mantener al equipo conectado con la realidad de la asociación. (Pendiente de ampliación personal).",
        "lead": false
    },
    {
        "name": "Victoria Luna Ortiz",
        "role": "Tesorería",
        "initials": "VL",
        "focus": "Aporta una sólida trayectoria financiera, visión empresarial y capacidad para gestionar y optimizar los recursos con rigor, responsabilidad y sentido estratégico. (Pendiente de ampliación personal).",
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
