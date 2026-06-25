import { Component } from '@angular/core';

/**
 * Sección 1: Hero de lanzamiento del nuevo single.
 * Réplica del diseño de Luis Morales Jr.
 * El host ocupa el alto restante de la página (flex-1).
 */
@Component({
  selector: 'app-hero',
  host: {
    class:
      'flex flex-1 flex-col items-center justify-center px-5 pt-12 pb-24 text-center',
  },
  templateUrl: './hero.html',
})
export class Hero {}
