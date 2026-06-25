import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // SSR en cada petición: ideal para un panel con datos que cambian.
    // Renderiza el HTML completo + metaetiquetas SEO en el servidor.
    path: '**',
    renderMode: RenderMode.Server,
  },
];
