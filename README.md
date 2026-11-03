# ¿Cuántos años tardaría Venezuela en alcanzar el nivel de vida de Colombia?

Web estadística interactiva construida con **Astro + Tailwind CSS** que visualiza, paso a paso, un análisis de convergencia económica entre Venezuela y Colombia, incluyendo una **simulación Monte Carlo** con perilla de "fricción institucional".

> Actualizado al 3 de noviembre de 2026. Los datos están fechados y con fuente; lo que es proyección o supuesto propio está marcado como tal. Aquí no se opina sobre gobiernos ni candidatos.

## La idea central

Que el PIB de Venezuela crezca rápido **no equivale** a que el país esté reconstruido. Rebotar tras un colapso es más fácil que reconstruir instituciones, electricidad, escuelas y confianza. Por eso el modelo incorpora una **"perilla de fricción institucional"** que resta puntos porcentuales al crecimiento venezolano cada año.

## Contenido de la página (guía paso a paso)

| Sección | Qué muestra |
| --- | --- |
| **Paso 1 — Punto de partida** | PIB por persona 2025: Colombia ≈ US$8.562 (Banco Mundial) vs. Venezuela ≈ US$3.600 (estimación propia: PIB FMI ÷ ~28 M hab.). Brecha ≈ **2,4×**. |
| **Paso 2 — Crecimiento e inflación** | Proyecciones 2026 con todas las fuentes: Colombia 2,2–2,6% (FMI, Comité Regla Fiscal, Gobierno); Venezuela 4–11% (FMI abr./oct., PNUD, UCAB, Ecoanalítica). Inflación 2026: Venezuela 272–468% vs. Colombia ≈6%. |
| **Paso 3 — Comparación cara a cara** | Tabla: gobierno, crecimiento, inflación, situación fiscal, petróleo, pobreza (ENCOVI 2025), Gini, ingreso mínimo. |
| **Paso 4 — Lo que el PIB no mide** | 39% de hogares con cortes diarios de luz · 1,2 M niños fuera del sistema educativo · 55% en pobreza multidimensional · 39% participación laboral femenina. |
| **Paso 5 — El modelo Monte Carlo** | 5.000 trayectorias simuladas por escenario (A statu quo, B apertura petrolera, C hipotético "estado 51", D adverso), con perilla interactiva de fricción institucional (−0 a −3 p.p./año). |
| **Paso 6 — Trayectoria en detalle** | Gráfico del PIB per cápita venezolano como % del colombiano, con banda P10–P90 (80% central de simulaciones). |
| **Paso 7 — Sensibilidad** | Mapa: años hasta alcanzar a Colombia según la tasa de Colombia. Cuanto más crece Colombia, más lejos queda la meta. |
| **Conclusión** | Respuesta directa a *"¿cuántos años, en el mejor de los casos?"* |

## La respuesta corta

- **Ingreso por persona:** en el mejor escenario verificable (apertura petrolera, sin fricción) ≈ **50 años** (rango 34–73); en el hipotético "estado 51" ≈ **28 años** (19–41). Con solo 1 punto de fricción institucional, el escenario B **no alcanza** a Colombia en 80 años en el 87% de las simulaciones. Statu quo y escenario adverso: **no llega**.
- **Bienestar social integral (salud, educación, seguridad, servicios, instituciones):** el modelo no puede calcularlo. La lectura honesta: va rezagado respecto al ingreso — reconstruir instituciones y capital humano es más lento que recuperar producción. Horizonte realista: **dos generaciones o más**, y en el caso base puede que no ocurra.

**Esperar no es una estrategia con respaldo en estos números.** Ni siquiera es una cuestión de "cuántos años", sino de *si ocurre*.

## Stack

- [Astro](https://astro.build) 5 — sitio estático, JS mínimo
- [Tailwind CSS](https://tailwindcss.com) 4 — diseño UX/UI oscuro, tarjetas, badges
- Simulación Monte Carlo nativa (Box–Muller + RNG con semilla xorshift32) en `src/lib/sim.js`
- Sin dependencias de gráficos: SVG dibujado a mano para máximo control y ligereza

## Estructura

```
src/
├── pages/index.astro      # Página única: pasos 1–7 + conclusión
├── layouts/Layout.astro   # Shell, navegación por anclas, footer con fuentes
├── components/Section.astro
├── data/data.js           # Todos los datos con fuente y fecha
├── lib/sim.js             # Motor Monte Carlo (escenarios, fricción, percentiles)
└── styles/global.css
```

## Uso local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (sitio estático)
```

## Fuentes de los datos

**Colombia:** FMI, Banco Mundial, Comité Autónomo de la Regla Fiscal (ARF) y medios económicos — abril a octubre de 2026.
**Venezuela:** FMI, PNUD, UCAB (ENCOVI 2025), Ecoanalítica, OPEP y BCV.

## Limitaciones declaradas

PIB nominal en lugar de PPA; promedios de escenario son supuestos propios; Bogotá (costo de vida, vivienda, empleo, seguridad) pendiente de datos; población venezolana incierta; el modelo no captura instituciones, estado de derecho ni capital humano perdido.

---

*Lectura de datos y supuestos, no asesoría personal, legal ni financiera para decidir dónde vivir.*
