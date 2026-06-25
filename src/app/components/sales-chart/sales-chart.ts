import { Component, computed, signal } from '@angular/core';

export interface MonthlySales {
  month: string;
  value: number; // en euros
}

/**
 * Componente 4/5: Resumen de ventas.
 * Gráfico de barras (CSS, responsivo y sin dependencias) de los últimos 12 meses.
 */
@Component({
  selector: 'app-sales-chart',
  templateUrl: './sales-chart.html',
})
export class SalesChart {
  readonly ranges = ['12M', '30D', '7D'] as const;
  readonly activeRange = signal<(typeof this.ranges)[number]>('12M');

  readonly data = signal<MonthlySales[]>([
    { month: 'Ene', value: 24000 },
    { month: 'Feb', value: 31000 },
    { month: 'Mar', value: 28500 },
    { month: 'Abr', value: 36000 },
    { month: 'May', value: 33500 },
    { month: 'Jun', value: 42000 },
    { month: 'Jul', value: 39500 },
    { month: 'Ago', value: 30000 },
    { month: 'Sep', value: 45500 },
    { month: 'Oct', value: 48250 },
    { month: 'Nov', value: 52000 },
    { month: 'Dic', value: 61000 },
  ]);

  private readonly maxValue = computed(() => Math.max(...this.data().map((d) => d.value)));

  /** Total acumulado del periodo, formateado en euros. */
  readonly total = computed(() =>
    this.formatEur(this.data().reduce((sum, d) => sum + d.value, 0)),
  );

  /** Altura de cada barra en porcentaje (8 % mínimo para que siempre se vea). */
  barHeight(value: number): number {
    return Math.max(8, Math.round((value / this.maxValue()) * 100));
  }

  tooltip(item: MonthlySales): string {
    return `${item.month}: ${this.formatEur(item.value)}`;
  }

  setRange(range: (typeof this.ranges)[number]): void {
    this.activeRange.set(range);
  }

  private formatEur(value: number): string {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
