// Simulación Monte Carlo de convergencia Venezuela -> Colombia.
// Módulo ES nativo: Astro lo sirve y bundlea para el navegador.

export const MAX_YEARS = 80;
export const N_SIMS = 5000;

// Generador normal (Box-Muller) con semilla xorshift32 para reproducibilidad inicial.
export function makeRng(seed) {
  let s = seed >>> 0 || 1;
  const uniform = () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
  return () => {
    let u = 0, v = 0;
    while (u === 0) u = uniform();
    while (v === 0) v = uniform();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };
}

export function venRateAt(scenario, year) {
  let acc = 0;
  for (const [rate, len] of scenario.venPhases) {
    if (year < acc + len) return rate;
    acc += len;
  }
  return scenario.venPhases[scenario.venPhases.length - 1][0];
}

// Una trayectoria: año en que VEN alcanza a COL (ratio >= 1) o null si no llega en MAX_YEARS.
export function simulateYears(scenario, friction, rng) {
  let ratio = 1 / 2.4; // brecha inicial 2,4x
  for (let y = 0; y < MAX_YEARS; y++) {
    const gVen = venRateAt(scenario, y) - friction + scenario.venVol * rng();
    const gCol = scenario.colRate + scenario.colVol * rng();
    ratio *= (1 + gVen / 100) / (1 + gCol / 100);
    if (ratio >= 1) return y + 1;
  }
  return null;
}

// Corre n simulaciones y devuelve estadísticas.
export function runScenario(scenario, friction, n = N_SIMS, seed = 12345) {
  const rng = makeRng(seed);
  const arrivals = [];
  for (let i = 0; i < n; i++) {
    const t = simulateYears(scenario, friction, rng);
    if (t !== null) arrivals.push(t);
  }
  arrivals.sort((a, b) => a - b);
  const pct = (p) => arrivals.length ? arrivals[Math.min(arrivals.length - 1, Math.floor(p * arrivals.length))] : null;
  return {
    n,
    reached: arrivals.length,
    reachPct: arrivals.length / n,
    median: pct(0.5),
    mean: arrivals.length ? arrivals.reduce((s2, x) => s2 + x, 0) / arrivals.length : null,
    p10: pct(0.1),
    p90: pct(0.9),
  };
}

// Trayectorias para el gráfico de banda P10-P90.
// Devuelve arrays por percentil con el ratio VEN/COL año a año.
export function runPaths(scenario, friction, nPaths = 400, years = MAX_YEARS, seed = 777) {
  const rng = makeRng(seed);
  const grid = [];
  for (let y = 0; y <= years; y++) grid.push([]);
  for (let i = 0; i < nPaths; i++) {
    grid[0].push(1 / 2.4);
    for (let y = 1; y <= years; y++) {
      const prev = grid[y - 1][i];
      const gVen = venRateAt(scenario, y - 1) - friction + scenario.venVol * rng();
      const gCol = scenario.colRate + scenario.colVol * rng();
      grid[y].push(Math.min(prev * (1 + gVen / 100) / (1 + gCol / 100), 1.6));
    }
  }
  const q = (arr, p) => {
    const a = Float64Array.from(arr).sort();
    return a[Math.min(a.length - 1, Math.floor(p * a.length))];
  };
  return grid.map((col) => ({
    p10: q(col, 0.1),
    p50: q(col, 0.5),
    p90: q(col, 0.9),
  }));
}

// Fórmula cerrada para la matriz de sensibilidad (tasas constantes, brecha 2,4x).
export function analyticCatchUp(gVen, gCol, friction, max = 200) {
  const gv = (gVen - friction) / 100;
  const gc = gCol / 100;
  if (gv <= gc) return null;
  const yrs = Math.ceil(Math.log(2.4) / Math.log((1 + gv) / (1 + gc)));
  return yrs > max ? null : yrs;
}
