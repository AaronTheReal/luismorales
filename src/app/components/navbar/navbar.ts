import { Component, signal } from '@angular/core';

/**
 * Navbar del sitio (cabecera): logo, navegación central y buscador.
 * En móvil colapsa en un menú hamburguesa; desde `md` muestra el nav horizontal.
 */
@Component({
  selector: 'app-navbar',
  host: { class: 'block w-full' },
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly links = signal<string[]>(['MUSIC', 'TOUR', 'RESOURCES']);

  /** Estado del menú móvil. */
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
