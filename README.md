# LuisMJR · Panel de control

Aplicación **Angular 21** con **Tailwind CSS v4**, **SSR** (renderizado en servidor) y **SEO**.
La página de inicio es un **dashboard** compuesto por 5 componentes.

## Stack

- **Angular 21** (standalone components, control flow `@if`/`@for`/`@switch`, signals)
- **Tailwind CSS v4** (configuración CSS-first vía `@tailwindcss/postcss`)
- **SSR** con Express (`@angular/ssr`) → HTML y metaetiquetas renderizados en servidor
- **SEO**: `SeoService` (title, description, Open Graph, Twitter Cards, canonical, JSON-LD), `robots.txt` y `sitemap.xml`

## Estructura

```
src/
├─ index.html                     # metaetiquetas base + lang="es" + fuente Inter
├─ styles.css                     # Tailwind + tema (color "brand")
└─ app/
   ├─ core/seo.service.ts         # servicio SEO centralizado
   ├─ pages/dashboard/            # página de inicio (compone los 5 componentes)
   └─ components/
      ├─ sidebar/                 # 1) navegación lateral
      ├─ topbar/                  # 2) barra superior (buscador, perfil)
      ├─ stats-cards/             # 3) tarjetas de métricas (KPIs)
      ├─ sales-chart/             # 4) gráfico de ventas
      └─ recent-activity/         # 5) feed de actividad reciente
```

## Comandos

```bash
npm start                       # servidor de desarrollo → http://localhost:4200
npm run build                   # build de producción (browser + servidor SSR)
npm run serve:ssr:luis-mjr      # arranca el servidor SSR (build) → http://localhost:4000
npm test                        # tests unitarios
```

## Notas

- **Hosts permitidos (SSR)**: configurados en `angular.json` → `architect.build.options.security.allowedHosts`.
  Añade tu dominio de producción ahí (si no, el servidor SSR rechaza la petición y cae a render de cliente).
- Actualiza el dominio en `public/robots.txt` y `public/sitemap.xml` antes de publicar.
