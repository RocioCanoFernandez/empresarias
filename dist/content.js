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
        "focus": "Abogada y empresaria sevillana, especializada en Derecho Civil, Penal e Internacional, con más de 20 años de trayectoria jurídica y una amplia experiencia en asesoramiento, representación y participación en mesas de expertos.<br><br>Socia de Empresarias Sevillanas desde 2016, ha ejercido durante 11 años como Secretaria General de la asociación, desarrollando una intensa labor de representación y defensa del tejido empresarial femenino.<br><br>Actualmente es Presidenta de la Comisión de Régimen Interno de la CES, miembro del Pleno de la Cámara de Comercio de Sevilla y vocal del Consejo Económico y Social de Sevilla. Forma parte también de la Junta Directiva de la Asociación de Comerciantes de Triana y de la Junta Directiva de la CEA, participando en sus comisiones de Energía y Aeroespacial.<br><br>En el ámbito de la CES, participa en las comisiones de Energía, Economía, RSC, Asociaciones Territoriales y Turismo, además de formar parte de la Comision internacional vinculada a las Cámaras de Comercio.<br><br>Actualmente desarrolla también una labor docente y de acompañamiento a empresarias en los programas Desafío Consolida Woman y Activa Woman de la Cámara de Comercio de Sevilla, ayudando a mujeres empresarias a hacer crecer sus negocios, afrontar nuevos retos y desarrollar una visión propia de liderazgo y crecimiento empresarial.<br><br>Una trayectoria que combina experiencia jurídica, liderazgo empresarial, representación institucional y conocimiento directo del tejido empresarial sevillano y andaluz.",
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
        "focus": "Empresaria sevillana y fundadora de SeviAI - Asesoría y Formación, especializada en acercar la Inteligencia Artificial a PYMES, equipos y profesionales de una forma práctica, comprensible y adaptada a la realidad de cada organización.<br><br>Cuenta con más de 15 años de trayectoria profesional vinculada a la hostelería y los eventos, donde ha desarrollado funciones de gestión, producción, coordinación de equipos y atención al cliente. Una experiencia que le ha permitido conocer de primera mano la importancia de la comunicación, la organización y las relaciones humanas dentro de cualquier proyecto empresarial.<br><br>Tras una reconversión profesional hacia el ámbito tecnológico, se especializó en Inteligencia Artificial aplicada a los negocios y puso en marcha SeviAI, desde donde trabaja en consultoría, formación, automatización de procesos y adopción responsable de la IA para empresas. Su actividad combina tecnología, estrategia y divulgación, con especial atención a las pequeñas y medianas empresas y a los perfiles no técnicos.<br><br>Es miembro activo de diferentes redes y organizaciones empresariales de Sevilla, entre ellas Empresarias Sevillanas y BNI, participando de forma habitual en encuentros, formaciones, acciones de divulgación y espacios de colaboración entre empresas.<br><br>Su experiencia profesional une dos ámbitos que hoy resultan especialmente relevantes para la comunicación empresarial: el conocimiento directo del tejido empresarial y el uso práctico de las nuevas herramientas digitales. A ello suma una trayectoria vinculada a la organización de eventos, la creación de contenidos, la comunicación en redes sociales y el desarrollo de proyectos propios de marca y posicionamiento.<br><br>Su candidatura a la Vicepresidencia de Comunicación de Empresarias Sevillanas parte de una idea clara: hacer más visible el trabajo que ya realiza la asociación, mejorar la comunicación con las socias y conseguir que la actividad, el conocimiento y el talento de las empresarias sevillanas tengan una mayor presencia dentro y fuera de la organización.",
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
        "focus": "Victoria Luna desarrolla su trayectoria profesional en el sector financiero desde 2008, especializada en asesoramiento y planificación financiera. A lo largo de estos años ha compaginado su actividad profesional con labores de formación, lo que le ha permitido unir conocimiento técnico, capacidad de análisis y una forma cercana y clara de acompañar en la toma de decisiones.<br><br>Es asesora financiera certificada EFA – European Financial Advisor por EFPA, y cuenta además con las certificaciones LCCI, en materia de crédito inmobiliario, y EFPA ESG Advisor™, especializada en finanzas sostenibles y criterios ESG.<br><br>Actualmente desarrolla su actividad en el ámbito de la banca privada como agente representante de Andbank España, acompañando a particulares, familias y empresarios en la planificación, organización y gestión de su patrimonio con una visión global y de largo plazo.<br><br>Socia de la Asociación de Empresarias Sevillanas desde 2024, quiere aportar a esta nueva etapa su experiencia en planificación, gestión y análisis financiero, incorporando una visión renovada de las finanzas de la Asociación: no solo desde el control y la organización de los recursos, sino también desde la planificación, la transparencia y la búsqueda de nuevas oportunidades que contribuyan a construir una asociación más sólida, profesional y sostenible en el tiempo.",
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
