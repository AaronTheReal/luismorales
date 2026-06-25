import { Component, signal } from '@angular/core';

export interface Activity {
  initials: string;
  title: string;
  detail: string;
  time: string;
  status: string;
  /** Clases Tailwind de la insignia de estado (literales para el JIT). */
  statusClasses: string;
  /** Clases Tailwind del avatar (literales para el JIT). */
  avatarClasses: string;
}

/**
 * Componente 5/5: Actividad reciente.
 * Feed cronológico con los últimos eventos del negocio.
 */
@Component({
  selector: 'app-recent-activity',
  templateUrl: './recent-activity.html',
})
export class RecentActivity {
  readonly activities = signal<Activity[]>([
    {
      initials: 'AG',
      title: 'Ana García',
      detail: 'realizó el pedido #1042',
      time: 'Hace 5 min',
      status: 'Completado',
      statusClasses: 'bg-emerald-50 text-emerald-700',
      avatarClasses: 'bg-emerald-100 text-emerald-700',
    },
    {
      initials: 'CR',
      title: 'Carlos Ruiz',
      detail: 'se registró como nuevo cliente',
      time: 'Hace 22 min',
      status: 'Nuevo',
      statusClasses: 'bg-sky-50 text-sky-700',
      avatarClasses: 'bg-sky-100 text-sky-700',
    },
    {
      initials: 'MP',
      title: 'María Pérez',
      detail: 'realizó un pago de €1.250',
      time: 'Hace 1 h',
      status: 'Pago',
      statusClasses: 'bg-brand-50 text-brand-700',
      avatarClasses: 'bg-brand-100 text-brand-700',
    },
    {
      initials: 'JL',
      title: 'Pedido #1038',
      detail: 'fue reembolsado a Javier López',
      time: 'Hace 3 h',
      status: 'Reembolso',
      statusClasses: 'bg-amber-50 text-amber-700',
      avatarClasses: 'bg-amber-100 text-amber-700',
    },
    {
      initials: '!',
      title: 'Camiseta Premium',
      detail: 'tiene el stock por debajo del mínimo',
      time: 'Hace 5 h',
      status: 'Alerta',
      statusClasses: 'bg-rose-50 text-rose-700',
      avatarClasses: 'bg-rose-100 text-rose-700',
    },
  ]);
}
