// Datos centralizados de la página. Fuentes fechadas entre abril y octubre de 2026.
export const META = {
  updated: "3 de noviembre de 2026",
  gapRatio: 2.4,
  gdpCol: 8562,
  gdpVen: 3600,
};

export const GDP_2025 = [
  {
    label: "PIB por persona 2025 · Colombia",
    value: "≈ US$ 8.562",
    source: "Banco Mundial",
    tone: "teal",
    note: "Dato nominal verificado.",
  },
  {
    label: "PIB por persona 2025 · Venezuela",
    value: "≈ US$ 3.600",
    source: "Estimación propia: PIB FMI US$101.500 M ÷ ~28 M hab.",
    tone: "amber",
    note: "Orden de magnitud: tipo de cambio y población son inciertos.",
  },
  {
    label: "Brecha de ingreso por persona",
    value: "≈ 2,4×",
    source: "Cálculo propio sobre las dos cifras anteriores",
    tone: "rose",
    note: "Colombia produce 2,4 veces más por persona que Venezuela.",
  },
];

export const GROWTH_2026 = [
  { org: "FMI (abril)", col: null, ven: 4.0 },
  { org: "FMI (octubre)", col: null, ven: 5.0, venNote: "7% en 2027" },
  { org: "PNUD", col: null, ven: 7.4 },
  { org: "UCAB", col: null, ven: 10.4 },
  { org: "Ecoanalítica", col: null, ven: 11.0, venNote: "rango 10–12%" },
  { org: "FMI", col: 2.2, ven: null },
  { org: "Comité Regla Fiscal (Colombia)", col: 2.5, ven: null },
  { org: "Gobierno de Colombia", col: 2.6, ven: null },
];

export const INFLATION_2026 = [
  { org: "FMI abril", country: "Venezuela", value: 387 },
  { org: "FMI octubre", country: "Venezuela", value: 468 },
  { org: "PNUD", country: "Venezuela", value: 272 },
  { org: "FMI", country: "Colombia", value: 6 },
];

export const COMPARISON = [
  {
    indicator: "Gobierno",
    col: "Abelardo de la Espriella (posesión 7 ago 2026; <3 meses, aún sin estadísticas propias)",
    ven: "Delcy Rodríguez (presidenta encargada) tras el cambio de enero; relaciones con EE. UU. y FMI restablecidas",
  },
  {
    indicator: "Crecimiento 2026 (proy.)",
    col: "2,2–2,6%",
    ven: "4–11% según fuente",
  },
  {
    indicator: "Inflación 2026 (proy.)",
    col: "≈6%",
    ven: "272–468%",
  },
  {
    indicator: "Situación fiscal",
    col: "Déficit 2025: 6,4% del PIB; 2026 entre 7,2% y 8,2%. Deuda ≈60% del PIB y subiendo. El FMI la llama “no sostenible”.",
    ven: "Deuda externa en mora (~US$150.000 M reportada; no verificada en esta ronda)",
  },
  {
    indicator: "Petróleo",
    col: "Fuente importante de divisas, con riesgo de precio",
    ven: "~1,05–1,13 M b/d (2026); EE. UU. prevé >1,5 M b/d en 2027; el pico histórico superó los 3 M b/d",
  },
  {
    indicator: "Pobreza",
    col: "Dato pendiente de verificar",
    ven: "68,5% de hogares en pobreza; 31,7% en pobreza extrema (ENCOVI 2025)",
  },
  {
    indicator: "Desigualdad (Gini)",
    col: "0,51",
    ven: "0,45 (más baja, pero por nivelar hacia abajo)",
  },
  {
    indicator: "Ingreso mínimo",
    col: "—",
    ven: "“Ingreso mínimo integral” de US$240/mes; salario base congelado en 130 Bs",
  },
  {
    indicator: "Vivienda, salud, empleo, seguridad en Bogotá",
    col: "Pendiente de segunda ronda con DANE, Banco de la República y Camacol",
    ven: "",
  },
];

export const RECONSTRUCTION = [
  {
    value: "39%",
    label: "de hogares con cortes de luz diarios en 2025",
    note: "Peor registro de ENCOVI",
  },
  {
    value: "1,2 M",
    label: "de niños y adolescentes fuera del sistema educativo",
    note: "Solo 64% de 3 a 24 años escolarizado",
  },
  {
    value: "55%",
    label: "de la población en pobreza multidimensional",
    note: "ENCOVI 2025",
  },
  {
    value: "39%",
    label: "de las mujeres participan en el mercado laboral",
    note: "ENCOVI 2025",
  },
];

export const SCENARIOS = [
  {
    id: "A",
    name: "A. Statu quo",
    desc: "Sin cambios de fondo.",
    venPhases: [[4.0, 3], [2.5, 97]],
    venVol: 1.5,
    colRate: 2.2,
    colVol: 0.5,
    color: "#94a3b8",
  },
  {
    id: "B",
    name: "B. Cambio político + apertura petrolera",
    desc: "Reactivación sostenida del crudo y entrada de inversión.",
    venPhases: [[7.0, 5], [4.0, 95]],
    venVol: 2.0,
    colRate: 2.5,
    colVol: 0.5,
    color: "#fbbf24",
  },
  {
    id: "C",
    name: "C. Hipotético “estado 51”",
    desc: "Sin precedente; análogos: Alemania Oriental y Puerto Rico.",
    venPhases: [[8.0, 10], [4.5, 90]],
    venVol: 2.0,
    colRate: 2.5,
    colVol: 0.5,
    color: "#2dd4bf",
  },
  {
    id: "D",
    name: "D. Adverso",
    desc: "Caída del crudo e inestabilidad.",
    venPhases: [[1.25, 100]],
    venVol: 5.0,
    colRate: 2.2,
    colVol: 0.5,
    color: "#fb7185",
  },
];

export const CONCLUSIONS = [
  "Con el crecimiento actual y sin cambios de fondo, alcanzar a Colombia es cuestión de muchas décadas, o no ocurre.",
  "Con apertura sostenida y reformas, el rango es de décadas, no de años, y sube mucho si la fricción institucional es alta.",
  "El “estado 51” es el más rápido en el papel, pero es hipotético y depende de supuestos que nadie puede verificar hoy.",
  "Las cifras de Venezuela divergen entre fuentes, así que todo resultado es un rango condicional, no una predicción.",
];

export const FAQ = [
  {
    q: "¿Cuántos años para que Venezuela alcance el ingreso por persona de Colombia?",
    a: "Sin fricción institucional: apertura petrolera ≈ 50 años (rango 34–73); “estado 51” hipotético ≈ 28 años (19–41); statu quo y escenario adverso: no llega. Con 1 punto de fricción: apertura petrolera no llega en 80 años en 87% de las simulaciones; “estado 51” ≈ 53 años (32 a más de 80). Corrida de referencia: 20.000 simulaciones; los números varían en cada carga.",
  },
  {
    q: "¿Y el bienestar en todo sentido (servicios, seguridad, instituciones, salud, educación)?",
    a: "Este modelo no puede calcularlo. Lectura cualitativa, sin cálculo detrás: va rezagado respecto al ingreso, porque reconstruir instituciones y capital humano es más lento que recuperar producción. Un horizonte realista es de dos generaciones o más, y en el caso base puede que no ocurra.",
  },
  {
    q: "Entonces, ¿esperar o no esperar?",
    a: "Para una persona que quiere ese nivel de vida durante su vida laboral, el modelo no respalda planificar en torno a una espera. Incluso en el escenario más rápido (hipotético y no verificable), la convergencia de ingreso toma unos 30 años. Esperar no es una estrategia con respaldo en estos números.",
  },
];

export const NUANCES = [
  "Algunas mejoras concretas pueden llegar mucho antes que la convergencia total: electricidad, ingresos reales, empleo formal. Pueden medirse en años, no en décadas, si la inflación se controla y entra inversión.",
  "“El bienestar de Bogotá” también se mueve: el FMI califica la situación fiscal de Colombia como no sostenible, con déficit de 7 a 8% del PIB. Mantener ese nivel dependerá de cómo se corrija.",
  "Los datos de Bogotá en vivienda, salud, empleo y seguridad aún están pendientes. Antes de decidir algo grande, conviene compararlos uno por uno con tu caso.",
  "Esta es una lectura de datos y supuestos, no asesoría personal, legal ni financiera para decidir dónde vivir.",
];

export const LIMITATIONS = [
  "PIB nominal en lugar de PPA.",
  "Los promedios de cada escenario son supuestos propios, no datos.",
  "Bogotá (costo de vida, vivienda, empleo, seguridad) pendiente de datos.",
  "Población venezolana incierta.",
  "El modelo no captura instituciones, estado de derecho ni capital humano perdido.",
];

export const SOURCES =
  "Colombia: FMI, Banco Mundial, Comité Autónomo de la Regla Fiscal y medios económicos (abril–octubre 2026). Venezuela: FMI, PNUD, UCAB (ENCOVI 2025), Ecoanalítica, OPEP y BCV.";
