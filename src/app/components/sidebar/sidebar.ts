import { Component, signal } from '@angular/core';

export interface NavItem {
  label: string;
  icon: 'home' | 'chart' | 'cart' | 'box' | 'users' | 'doc' | 'settings';
  badge?: number;
}

/**
 * Componente 1/5: Navegación lateral.
 * Logo, menú principal con iconos y tarjeta de usuario al pie.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  /** Índice del elemento de menú activo (gestión visual simple). */
  readonly activeIndex = signal(0);

  readonly mainNav = signal<NavItem[]>([
    { label: 'Dashboard', icon: 'home' },
    { label: 'Analíticas', icon: 'chart' },
    { label: 'Pedidos', icon: 'cart', badge: 8 },
    { label: 'Productos', icon: 'box' },
    { label: 'Clientes', icon: 'users' },
    { label: 'Informes', icon: 'doc' },
  ]);

  readonly secondaryNav = signal<NavItem[]>([{ label: 'Configuración', icon: 'settings' }]);

  select(index: number): void {
    this.activeIndex.set(index);
  }
}
