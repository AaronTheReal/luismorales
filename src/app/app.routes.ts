import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
    title: 'Panel de control · LuisMJR',
  },
  // Rutas adicionales del panel (placeholder para crecer):
  // { path: 'analiticas', loadComponent: () => import('./pages/...').then(m => m...) },

  // Cualquier ruta desconocida vuelve al dashboard.
  { path: '**', redirectTo: '' },
];
