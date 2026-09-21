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
        "focus": "Abogada y empresaria sevillana, especializada en Derecho Civil, Penal e Internacional, con más de 20 años de trayectoria jurídica y una amplia experiencia en asesoramiento, representación institucional y participación en mesas de expertos.<br><br>Forma parte de Empresarias Sevillanas desde sus primeros años y ha ejercido durante prácticamente nueve años como Secretaria General, participando de manera continuada en la gestión, representación y evolución de la Asociación. Ese recorrido le ha permitido conocer de primera mano su funcionamiento, sus relaciones institucionales y las necesidades de sus socias.<br><br>Actualmente es Presidenta de la Comisión de Régimen Interno de la Confederación de Empresarios de Sevilla, miembro del Pleno de la Cámara de Comercio de Sevilla y vocal del Consejo Económico y Social de Sevilla. Forma parte también de la Junta Directiva de la Asociación de Comerciantes de Triana y de la Junta Directiva de la Confederación de Empresarios de Andalucía, donde participa en comisiones vinculadas a Energía y Aeroespacial. En la CES participa además en distintas áreas de trabajo relacionadas con economía, responsabilidad social, asociaciones territoriales y turismo.<br><br>Compagina esta labor con la docencia y el acompañamiento a empresarias en los programas Desafío Consolida Woman y Activa Woman de la Cámara de Comercio de Sevilla.<br><br>Su candidatura a la Presidencia reúne experiencia jurídica, casi una década de conocimiento directo de Empresarias Sevillanas, representación institucional y una trayectoria estrechamente vinculada al tejido empresarial sevillano y andaluz.",
        "lead": true
    },
    {
        "name": "Mercedes Núñez Arcos",
        "role": "Vicepresidencia de Relaciones Institucionales",
        "initials": "MN",
        "focus": "Abogada en ejercicio desde 1997, empresaria y profesional con una amplia trayectoria en el ámbito jurídico, comercial e institucional. Es Secretaria General de APROCOM desde 2018 y vocal de la Junta Directiva de Empresarias Sevillanas desde 2019.<br><br>Participa en la Comisión "Empresa y Mujer" de la Cámara de Comercio de Sevilla y en distintas comisiones de la Confederación de Empresarios de Sevilla, entre ellas Igualdad, Responsabilidad Social, Negociación de Convenios y Territorial. Forma parte además de la Comisión Negociadora del Convenio de Comercio de la provincia, del Consejo de la Empresa Familiar de la CEA y de órganos vinculados al comercio del Ayuntamiento de Sevilla.<br><br>También ejerce como Agente de la Propiedad Inmobiliaria desde 2006 y ha recibido un reconocimiento del Ilustre Colegio de Abogados de Sevilla por 25 años de dedicación ininterrumpida como abogada de oficio.<br><br>Su perfil combina experiencia jurídica, conocimiento del comercio, negociación, representación empresarial y una intensa trayectoria asociativa.",
        "lead": false
    },
    {
        "name": "Rocío Cano Fernández-Piedra",
        "role": "Vicepresidencia de Comunicación",
        "initials": "RC",
        "focus": "Empresaria sevillana y fundadora de SeviAI - Asesoría y Formación, especializada en acercar la Inteligencia Artificial a PYMES, equipos y profesionales de forma práctica, comprensible y adaptada a la realidad de cada organización.<br><br>Cuenta con más de 15 años de trayectoria vinculada a la hostelería y los eventos, con experiencia en gestión, producción y coordinación de equipos. Tras una reconversión profesional hacia el ámbito tecnológico, se especializó en Inteligencia Artificial aplicada a los negocios y puso en marcha SeviAI, desde donde trabaja en consultoría, formación, automatización de procesos y adopción responsable de la IA.<br><br>Participa activamente en redes empresariales de Sevilla, entre ellas Empresarias Sevillanas y BNI, y cuenta además con experiencia en organización de eventos, creación de contenidos, redes sociales y desarrollo de proyectos de marca.<br><br>Como candidata a la Vicepresidencia de Comunicación, quiere contribuir a hacer más visible el trabajo de la Asociación y, especialmente, el talento, la actividad y el conocimiento de sus empresarias.",
        "lead": false
    },
    {
        "name": "Macarena Pérez Ocaña",
        "role": "Secretaría General",
        "initials": "MP",
        "focus": "Abogada y empresaria con más de 20 años de trayectoria profesional, especializada en Derecho Laboral y Extranjería. Es fundadora de su propia firma, con sedes en Sevilla y Algeciras, desde donde asesora y acompaña a empresas, profesionales y particulares.<br><br>Forma parte de Empresarias Sevillanas desde 2018 y desde 2021 ejerce como Tesorera, además de formar parte de su Junta Directiva. Esta experiencia le ha permitido conocer de cerca la gestión de la Asociación y el valor que puede generar una red empresarial cuando convierte las relaciones entre sus socias en colaboración, oportunidades y representación.<br><br>En esta nueva candidatura da un paso más para asumir la Secretaría, poniendo al servicio de Empresarias Sevillanas su experiencia jurídica, empresarial y asociativa, y su conocimiento directo de la organización. Su objetivo es contribuir a una asociación sólida, cercana, bien gestionada y útil para sus socias.",
        "lead": false
    },
    {
        "name": "Victoria Luna Ortiz",
        "role": "Tesorería",
        "initials": "VL",
        "focus": "Profesional del sector financiero desde 2008, especializada en asesoramiento y planificación financiera. A lo largo de su trayectoria ha combinado la actividad profesional con la formación, uniendo conocimiento técnico, capacidad de análisis y una forma cercana y clara de acompañar en la toma de decisiones.<br><br>Es asesora financiera certificada EFA - European Financial Advisor por EFPA y cuenta también con las certificaciones LCCI, en crédito inmobiliario, y EFPA ESG Advisor™, especializada en finanzas sostenibles y criterios ESG.<br><br>Actualmente desarrolla su actividad en banca privada como agente representante de Andbank España, acompañando a particulares, familias y empresarios en la planificación, organización y gestión de su patrimonio con una visión global y de largo plazo.<br><br>Socia de Empresarias Sevillanas desde 2024, aporta a esta candidatura una mirada financiera orientada no solo al control de los recursos, sino también a la planificación, la transparencia, la sostenibilidad económica y la búsqueda de nuevas oportunidades para la Asociación.",
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
