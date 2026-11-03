# Ruta de Convalidación: Abogado(a) UNELLEZ → Colombia

Sitio **Astro + Tailwind CSS v4** que presenta, paso a paso, la hoja de ruta para convalidar el título
de Abogado(a) venezolano (UNELLEZ) en Colombia y obtener la Tarjeta Profesional que habilita para litigar.

El eje académico del plan es el **Programa de Actualización en Derecho Colombiano** de la Universidad
Jorge Tadeo Lozano (UTadeo), usado como estudio de complementación para sustentar la solicitud ante el
Ministerio de Educación Nacional (MEN):
https://www.utadeo.edu.co/es/continuada/educacion-continua/53376/programa-de-actualizacion-en-derecho-colombiano

## Estructura del contenido

| Fase | Contenido | Pasos |
|---|---|---|
| 1 | Preparación y documentos en Venezuela (legalización, apostilla, traducción) | 1–4 |
| 2 | Programa de Actualización en Derecho Colombiano (UTadeo) | 5–7 |
| 3 | Convalidación ante el MEN | 8–10 |
| 4 | Tarjeta Profesional (Consejo Superior de la Judicatura) | 11–12 |
| Transversal | Estatus migratorio y Cédula de Extranjería | 13 |

Incluye además: resumen de fases, cronograma referencial (9–20 meses), secciones de riesgo,
preguntas frecuentes, fuentes oficiales y un checklist interactivo con barra de progreso
persistida en `localStorage`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/ (sitio estático)
npm run preview
```

## Archivos

```
src/data/roadmap.js            # toda la información editable (fases, pasos, riesgos, FAQ, fuentes)
src/components/Roadmap.astro   # acordeón de pasos + checklist + progreso
src/layouts/Layout.astro       # header/nav/footer
src/pages/index.astro          # hero, fases, programa UTadeo, cronograma, riesgos, FAQ, fuentes
src/styles/global.css          # Tailwind v4 + utilidades propias (.card, .badge, .progress-*)
```

> Aviso: guía informativa, no asesoría legal. Requisitos, tarifas y plazos cambian; verifica siempre
> en las fuentes oficiales antes de radicar o pagar.
