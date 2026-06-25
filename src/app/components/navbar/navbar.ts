import { Component, signal } from '@angular/core';

/**
 * Navbar del sitio (cabecera): logo, navegación central y buscador.
 * Réplica del diseño de Luis Morales Jr.
 */
@Component({
  selector: 'app-navbar',
  host: { class: 'block w-full' },
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly links = signal<string[]>(['MUSIC', 'TOUR', 'RESOURCES']);
}
