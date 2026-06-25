import { Component, signal } from '@angular/core';

export interface Stat {
  label: string;
  value: string;
  delta: number; // variación porcentual respecto al periodo anterior
  trendUp: boolean;
  icon: 'revenue' | 'orders' | 'customers' | 'conversion';
  /** Clases Tailwind del recuadro del icono (literales para que las detecte el JIT). */
  iconClasses: string;
}

/**
 * Componente 3/5: Tarjetas de métricas (KPIs).
 * Cuatro indicadores clave con su variación respecto al periodo anterior.
 */
@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.html',
})
export class StatsCards {
  readonly stats = signal<Stat[]>([
    {
      label: 'Ingresos totales',
      value: '€48.250',
      delta: 12.5,
      trendUp: true,
      icon: 'revenue',
      iconClasses: 'bg-brand-50 text-brand-600',
    },
    {
      label: 'Pedidos',
      value: '1.329',
      delta: 8.2,
      trendUp: true,
      icon: 'orders',
      iconClasses: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Nuevos clientes',
      value: '312',
      delta: 5.1,
      trendUp: true,
      icon: 'customers',
      iconClasses: 'bg-sky-50 text-sky-600',
    },
    {
      label: 'Tasa de conversión',
      value: '3,6 %',
      delta: -0.4,
      trendUp: false,
      icon: 'conversion',
      iconClasses: 'bg-amber-50 text-amber-600',
    },
  ]);
}
