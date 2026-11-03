// =============================================================
// Hoja de ruta: convalidación del título de Abogado(a) UNELLEZ
// (Venezuela) en Colombia + licencia para ejercer.
// Datos centralizados. Última revisión: 3 de noviembre de 2026.
// -------------------------------------------------------------
// IMPORTANTE: los trámites oficiales cambian. Antes de invertir
// dinero, verifica cada requisito en las fuentes oficiales que
// aparecen en SOURCES y en el programa de la UTadeo:
// https://www.utadeo.edu.co/es/continuada/educacion-continua/53376/programa-de-actualizacion-en-derecho-colombiano
// =============================================================

export const META = {
  title: 'De la UNELLEZ al ejercicio profesional en Colombia',
  subtitle:
    'Hoja de ruta paso a paso para convalidar tu título de Abogado(a) venezolano(a) en Colombia y obtener tu Tarjeta Profesional de Abogado.',
  updated: '3 de noviembre de 2026',
  school: 'Universidad Nacional Experimental de los Llanos Occidentales "Rómulo Gallego" (UNELLEZ)',
  program: {
    name: 'Programa de Actualización en Derecho Colombiano',
    institution: 'Universidad Jorge E. Tadeo Lozano (UTadeo) (UTadeo) — Educación Continua',
    url: 'https://www.utadeo.edu.co/es/continuada/educacion-continua/53376/programa-de-actualizacion-en-derecho-colombiano',
    role: 'Estudio de complementación / nivelación académica exigido como sustento previo a la convalidación ante el Ministerio de Educación Nacional de Colombia (MEN).',
  },
};

// ---------- Resumen de fases ----------
export const PHASES = [
  {
    id: 'preparacion',
    short: 'Fase 1',
    title: 'Preparación y documentos en Venezuela',
    goal: 'Tener el expediente legalizado, apostillado y respaldado antes de iniciar cualquier trámite en Colombia.',
    color: 'sky',
    duration: '1 – 3 meses',
  },
  {
    id: 'estudio',
    short: 'Fase 2',
    title: 'Programa de Actualización en Derecho Colombiano (UTadeo)',
    goal: 'Cursar y aprobar el estudio de complementación académica que sustenta la solicitud ante el MEN.',
    color: 'violet',
    duration: '4 – 8 meses',
  },
  {
    id: 'convalidacion',
    short: 'Fase 3',
    title: 'Convalidación ante el Ministerio de Educación Nacional',
    goal: 'Obtener la Resolución de convalidación del título de Abogado(a).',
    color: 'emerald',
    duration: '2 – 6 meses',
  },
  {
    id: 'licencia',
    short: 'Fase 4',
    title: 'Tarjeta Profesional y permiso de ejercicio',
    goal: 'Inscribirte ante el Consejo Superior de la Judicatura y quedar habilitado(a) para litigar.',
    color: 'amber',
    duration: '1 – 2 meses',
  },
  {
    id: 'migratorio',
    short: 'Transversal',
    title: 'Estatus migratorio y Cédula de Extranjería',
    goal: 'Regularizar tu permanencia para poder firmar, pagar y ejercer legalmente.',
    color: 'rose',
    duration: 'Permanente',
  },
];

// ---------- Pasos detallados ----------
export const STEPS = [
  {
    n: 1,
    phaseId: 'preparacion',
    title: 'Recuperar y autenticar tus títulos en Venezuela',
    detail:
      'Necesitas el Título de Bachiller, el Certificado de Estudios Universitarios y el Título de Abogado(a) (o constancia de grado) emitidos por la UNELLEZ. Si no los tienes físicos, solicita duplicados/certificaciones ante la Facultad de Ciencias Jurídicas y Políticas y la Dirección de Registro y Control de Estudios de la UNELLEZ.',
    tasks: [
      'Solicitar certificado de contenido curricular (mallas, créditos, horas y régimen de estudio).',
      'Pedir constancia de culminación de estudios y/o título registrado en el sistema de registro de títulos de Venezuela.',
      'Legalizar cada documento: firma de la universidad → Ministerio del Poder Popular para la Educación → Ministerio del Poder Popular para Relaciones Exteriores (MRRI).',
      'Si perdiste el título: iniciar reposición ante la UNELLEZ con el acta de grado.',
    ],
    tip: 'Guarda copias escaneadas en PDF en la nube; las usarás en todos los pasos siguientes.',
    cost: '$0 – 80 USD (tasas universitarias y legalizaciones, según aranceles vigentes)',
    time: '2 – 8 semanas',
    risk: 'medium',
  },
  {
    n: 2,
    phaseId: 'preparacion',
    title: 'Apostilla de La Haya de todos los documentos',
    detail:
      'Venezuela y Colombia son Estados Parte del Convenio de La Haya de 1961, así que NO se requiere legalización consular: basta la Apostilla emitida por el MRRI venezolano sobre los documentos ya legalizados internamente.',
    tasks: [
      'Crear usuario en el sistema de Apostilla del MRRI de Venezuela.',
      'Programar cita y pagar la tasa de apostilla por documento.',
      'Verificar que el código de cada apostilla sea válido en el portal de consulta.',
      'Documentos a apostillar: título de bachiller, título de abogado/a, certificados de estudio, calificaciones, contenido curricular, acta de nacimiento.',
    ],
    tip: 'La apostilla va SOBRE documentos ya legalizados; si el orden es incorrecto, el documento será rechazado.',
    cost: '~20 – 50 USD por documento',
    time: '1 – 4 semanas',
    risk: 'high',
  },
  {
    n: 3,
    phaseId: 'preparacion',
    title: 'Traducción oficial (solo si aplica)',
    detail:
      'Al ser Venezuela un país hispanohablante, normalmente NO necesitas traducción. Solo aplica si algún documento llega en otro idioma o si una entidad exige traducción certificada por intérprete comercial en Colombia.',
    tasks: [
      'Revisar que el contenido curricular use términos estándar.',
      'Si se requiere, contratar traductor/intérprete comercial matriculado en Colombia.',
    ],
    tip: 'No gastes en traducciones innecesarias: pregunta primero a la UTadeo y al MEN.',
    cost: '$0 usualmente / 25–60 USD por página si aplica',
    time: '1 semana',
    risk: 'low',
  },
  {
    n: 4,
    phaseId: 'preparacion',
    title: 'Abrir tu presencia legal y digital en Colombia',
    detail:
      'Muchos trámites posteriores requieren correo estable, número colombiano, identificación válida y a veces cuenta bancaria. Anticiparlo evita rechazos por notificaciones no recibidas.',
    tasks: [
      'Crear un correo electrónico profesional exclusivo para el trámite.',
      'Obtener número celular colombiano (prepago sirve para iniciar).',
      'Consultar en Migración Colombia qué visa o permiso te corresponde (visas, EVTTP/PPM u otros mecanismos vigentes en 2026).',
      'Guardar el registro de entradas/salidas para demostrar estadía regular.',
    ],
    tip: 'El curso de la UTadeo puede servir de soporte para una visa de estudiante si es presencial: verifica la modalidad antes de inscribirte.',
    cost: '$0 – 230 USD (según tipo de visa/trámite migratorio)',
    time: '2 – 10 semanas',
    risk: 'medium',
  },
  {
    n: 5,
    phaseId: 'estudio',
    title: 'Admisión al Programa de Actualización en Derecho Colombiano (UTadeo)',
    detail:
      'Este es el estudio de complementación que usarás como sustento académico para solicitar la convalidación ante el Ministerio de Educación Nacional de Colombia. La UTadeo lo ofrece a través de su División de Educación Continua.',
    url: META.program.url,
    tasks: [
      'Entrar al enlace oficial del programa y descargar la ficha técnica (duración, intensidad horaria, modalidad, calendario).',
      'Postular en línea con: hoja de vida, título apostillado, certificado de estudios apostillado, documento de identidad (cédula de extranjería/pasaporte).',
      'Pagar derechos de inscripción/matrícula y conservar recibo y carné estudiantil.',
      'Confirmar que el certificado final indique código, folio, resolución interna de educación continua e intensidad horaria.',
    ],
    tip: 'Exige que el certificado final detalle horas, asignaturas aprobadas y resolución de aprobación: eso revisará el MEN.',
    cost: 'Consulta el valor vigente en la ficha del programa (Educación Continua UTadeo)',
    time: 'Admisión: 1 – 3 semanas',
    risk: 'low',
  },
  {
    n: 6,
    phaseId: 'estudio',
    title: 'Cursar y aprobar el Programa (nivelación jurídica colombiana)',
    detail:
      'El propósito es dominar las ramas del derecho que rigen el ejercicio profesional en Colombia y evidenciar ante el MEN que subsanaste la diferencia entre el plan de estudios venezolano y el colombiano.',
    tasks: [
      'Derecho Constitucional y bloque de constitucionalidad colombiano.',
      'Derecho Administrativo, contratación estatal y contencioso administrativo (CPACA, Ley 80).',
      'Procedimiento Civil (CGP) y Penal acusatorio (CPP).',
      'Derecho Laboral y Seguridad Social (CST, Ley 100).',
      'Ética profesional, Estatuto Disciplinario Judicial y régimen de la abogacía (Ley 1123 de 2007).',
      'Acción de tutela, acciones populares y mecanismos alternativos de solución de conflictos.',
      'Jurisprudencia de la Corte Constitucional y del Consejo de Estado.',
    ],
    tip: 'Lleva un portafolio de evidencias (trabajos, evaluaciones, asistencia): respalda tu esfuerzo si el MEN pide aclaraciones.',
    cost: 'Incluido en la matrícula',
    time: '4 – 8 meses (según modalidad)',
    risk: 'medium',
  },
  {
    n: 7,
    phaseId: 'estudio',
    title: 'Obtener el certificado del programa de actualización',
    detail:
      'Es el documento bisagra de toda la ruta: sin él, el MEN no admite la solicitud de convalidación apoyada en estudio complementario.',
    tasks: [
      'Solicitar certificado original de aprobación con sello, firma y número de radicado.',
      'Pedir copia digital auténtica y carta de la institución con la intensidad horaria total.',
      'Verificar que tu nombre y documento coincidan EXACTAMENTE con el título venezolano apostillado.',
    ],
    tip: 'Un error de digitación en tu nombre puede costarte meses: valida ortografía y número de identificación antes de retirar el certificado.',
    cost: '$0 – 30 USD (derechos de expedición)',
    time: '2 – 6 semanas tras finalizar',
    risk: 'high',
  },
  {
    n: 8,
    phaseId: 'convalidacion',
    title: 'Radicar la solicitud de convalidación ante el MEN',
    detail:
      'La convalidación de títulos extranjeros de educación superior se tramita ante el Ministerio de Educación Nacional de Colombia, en la línea de “Convalidación de títulos obtenidos en el exterior”, con el estudio de complementación aprobado como sustento.',
    tasks: [
      'Diligenciar el formulario/radicación virtual en men.gov.co (guía de trámites) y generar número de radicado.',
      'Adjuntar: título de Abogado(a) UNELLEZ apostillado, certificado de estudios y contenido curricular apostillado, documento de identidad, certificado del Programa de Actualización en Derecho Colombiano (UTadeo).',
      'Anexar poder si un tercero presenta el trámite.',
      'Quedar atento a requerimientos: el MEN puede pedir documentos adicionales dentro de sus términos legales.',
    ],
    tip: 'Responde cualquier requerimiento dentro del plazo fijado; si vence, el trámite puede archivarse.',
    cost: 'Según tarifa vigente del MEN (verifica en la guía de trámites)',
    time: 'Radicación: 1 semana',
    risk: 'medium',
  },
  {
    n: 9,
    phaseId: 'convalidacion',
    title: 'Seguimiento y Resolución de convalidación',
    detail:
      'El MEN estudia la equivalencia entre el plan venezolano y el colombiano. Al existir un programa de actualización aprobado, la decisión se materializa en una Resolución que convalida el título y ordena su registro.',
    tasks: [
      'Consultar el estado del trámite con el número de radicado.',
      'Subsanar observaciones si son solicitadas.',
      'Al recibir la Resolución: verificar datos, número, fecha y contenido.',
      'Solicitar copia auténtica y cumplir lo que el acto administrativo ordene.',
    ],
    tip: 'Guarda la Resolución en físico y PDF: la necesitarás para la tarjeta profesional y eventuales controversias.',
    cost: '$0',
    time: '2 – 6 meses (plazo legal + posibles suspensiones)',
    risk: 'high',
  },
  {
    n: 10,
    phaseId: 'convalidacion',
    title: 'Verificar el registro del título convalidado',
    detail:
      'Una vez convalidado, confirma que el título quede registrado como equivalente ante el MEN, para efectos de credibilidad pública, convocatorias y futuros trámites.',
    tasks: [
      'Comprobar en los registros públicos del MEN que aparece tu convalidación.',
      'Solicitar corrección inmediata si hay inconsistencias.',
    ],
    tip: 'Captura de pantalla + radicado de la solicitud de corrección: deja siempre rastro escrito.',
    cost: '$0',
    time: '1 – 4 semanas',
    risk: 'low',
  },
  {
    n: 11,
    phaseId: 'licencia',
    title: 'Solicitar la Tarjeta Profesional de Abogado(a)',
    detail:
      'Para ejercer la abogacía en Colombia necesitas la Tarjeta Profesional expedida por el Consejo Superior de la Judicatura (Sala Administrativa), conforme al Decreto 196 de 1987 y la Ley 1123 de 2007 (Estatuto de la Abogacía). Con el título convalidado cumples el requisito académico.',
    tasks: [
      'Reunir: copia del título convalidado + Resolución del MEN, cédula de ciudadanía o de extranjería, foto, certificación de práctica si exigen.',
      'Presentar la solicitud ante la Sala Administrativa del Consejo Superior de la Judicatura.',
      'Pagar los derechos de expedición de la tarjeta.',
      'Recibir la Tarjeta Profesional con número y fecha de expedición.',
    ],
    tip: 'Sin identificación válida en Colombia es muy difícil obtener la tarjeta: adelanta tu trámite migratorio desde la Fase 1.',
    cost: 'Según tarifas del CSJ vigentes (~50–120 USD equivalentes)',
    time: '2 – 8 semanas',
    risk: 'medium',
  },
  {
    n: 12,
    phaseId: 'licencia',
    title: 'Habilitación para litigar y deberes éticos',
    detail:
      'Con la Tarjeta Profesional puedes actuar como abogado(a) en procesos judiciales y administrativos; quedas sujeto(a) al régimen disciplinario de la abogacía colombiana y a los deberes del Código Deontológico.',
    tasks: [
      'Actualizar tus datos de contacto ante el CSJ.',
      'Revisar la Ley 1123 de 2007 y las circulares sobre deberes del abogado.',
      'Complementar con cursos prácticos del área donde ejercerás (laboral, penal, contencioso…).'
      ,'Considerar afiliación a asociaciones de abogados y seguro de responsabilidad civil.',
    ],
    tip: 'El número de tarjeta profesional va en cada escrito judicial: ten siempre copia digital disponible.',
    cost: '$0 (formación continua recomendada)',
    time: 'Inmediato tras la tarjeta',
    risk: 'low',
  },
  {
    n: 13,
    phaseId: 'migratorio',
    title: 'Mantener estatus migratorio regular y Cédula de Extranjería',
    detail:
      'En paralelo a todo lo anterior necesitas estar en Colombia de forma regular. La Cédula de Extranjería se obtiene tras el registro en Migración Colombia y la concesión de un permiso o visa; permite estudiar, contratar y abrir cuentas.',
    tasks: [
      'Acogerse al mecanismo vigente para ciudadanos venezolanos (permisos/visas de 2026).',
      'Registro biométrico y solicitud de Cédula de Extranjería ante Migración Colombia / Registraduría.',
      'Renovar permisos antes del vencimiento.',
      'Conservar constancias de permanencia regular durante toda la convalidación.',
    ],
    tip: 'Guarda recibos y sellos de entrada/salida: demuestran permanencia continua cuando el MEN o el CSJ lo pidan.',
    cost: 'Según tasas de Migración Colombia y la Registraduría',
    time: 'Variable (1 – 6 meses)',
    risk: 'high',
  },
];

// ---------- Ramas típicas del programa UTadeo ----------
export const SYLLABUS = [
  { area: 'Derecho Público', items: ['Constitución Política de 1991 y bloque de constitucionalidad', 'Derecho Administrativo y contratación estatal', 'Acción de tutela y mecanismos constitucionales'] },
  { area: 'Procesal', items: ['Código General del Proceso', 'Proceso penal acusatorio', 'Jurisdicción contencioso administrativa'] },
  { area: 'Laboral y Seguridad Social', items: ['Código Sustantivo del Trabajo', 'Sistema de Seguridad Social Integral', 'Relaciones colectivas de trabajo'] },
  { area: 'Ética y Regulación', items: ['Ley 1123 de 2007 – Estatuto de la Abogacía', 'Régimen disciplinario judicial', 'Deberes con la administración de justicia'] },
];

// ---------- Riesgos y mitigación ----------
export const RISKS = [
  { risk: 'Documentos venezolanos sin apostilla o mal legalizados', impact: 'Rechazo inmediato de la solicitud', mitigation: 'Respeta el orden: legalización interna → apostilla MRRI → copias digitales.' },
  { risk: 'Certificado UTadeo sin detalle de horas/asignaturas', impact: 'El MEN no lo acepta como complementación', mitigation: 'Exige certificado con malla, intensidad horaria y resolución de educación continua.' },
  { risk: 'Nombre o documento inconsistentes entre títulos', impact: 'Suspensión del trámite por semanas', mitigation: 'Corrige en la universidad de origen antes de radicar y anexa el acta de corrección.' },
  { risk: 'Estatus migratorio irregular', impact: 'No puedes firmar ni obtener cédula/tarjeta', mitigation: 'Inicia visa/permiso y cédula de extranjería desde la Fase 1.' },
  { risk: 'Cambios normativos o de tarifas', impact: 'Costos y plazos inesperados', mitigation: 'Verifica men.gov.co, csj.gov.co y utadeo.edu.co antes de pagar.' },
];

// ---------- Preguntas frecuentes ----------
export const FAQ = [
  { q: '¿Existe convalidación automática para títulos venezolanos?', a: 'Colombia tiene acuerdos de convalidación con algunos países, pero para títulos venezolanos de educación superior el camino habitual es la convalidación ante el MEN demostrando equivalencia, apoyada en estudios de complementación como el Programa de Actualización en Derecho Colombiano de la UTadeo.' },
  { q: '¿El programa de la UTadeo me otorga un nuevo título?', a: 'No. Es educación no formal de actualización/nivelación. Su función es subsanar diferencias curriculares y sustentar la solicitud de convalidación ante el MEN.' },
  { q: '¿Puedo litigar sin Tarjeta Profesional?', a: 'No. Actuar como abogado(a) sin tarjeta profesional configura ejercicio ilegal de la profesión y falta disciplinaria.' },
  { q: '¿Necesito cédula colombiana?', a: 'Se requiere identificación válida en Colombia (cédula de extranjería o ciudadanía) para varios actos, incluida la tarjeta profesional y la presentación de demandas.' },
  { q: '¿Cuánto tarda todo el proceso?', a: 'Si nada es rechazado, entre 9 y 20 meses. Los cuellos de botella típicos son la apostilla/legalización y el tiempo de respuesta del MEN.' },
];

// ---------- Fuentes oficiales ----------
export const SOURCES = [
  { label: 'UTadeo · Programa de Actualización en Derecho Colombiano', href: META.program.url, note: 'Ficha del programa, modalidad y contacto de admisiones.' },
  { label: 'Ministerio de Educación Nacional de Colombia', href: 'https://www.mineducacion.gov.co/', note: 'Convalidación de títulos extranjeros de educación superior.' },
  { label: 'Consejo Superior de la Judicatura', href: 'http://www.csj.gov.co/', note: 'Tarjeta Profesional de Abogado y régimen disciplinario.' },
  { label: 'Migración Colombia', href: 'https://www.migracioncolombia.gov.co/', note: 'Visas, permisos y cédula de extranjería.' },
  { label: 'Cancillería de Venezuela · Apostilla', href: 'https://apostilla.mppre.gob.ve/', note: 'Emisión y verificación de apostillas.' },
];

export const TIMELINE = [
  { month: 'M1-M2', label: 'Legalización y apostilla en Venezuela' },
  { month: 'M2-M3', label: 'Visa / Cédula de Extranjería' },
  { month: 'M3-M8', label: 'Programa de Actualización UTadeo' },
  { month: 'M8-M9', label: 'Certificado de aprobación' },
  { month: 'M9-M15', label: 'Convalidación ante el MEN' },
  { month: 'M15-M17', label: 'Tarjeta Profesional (CSJ)' },
  { month: 'M17+', label: 'Ejercicio profesional habilitado' },
];
