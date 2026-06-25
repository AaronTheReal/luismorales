import { Component, signal } from '@angular/core';

export interface Release {
  /** Etiqueta superior, p.ej. "NEW" o "SINGLE". */
  tag: string;
  title: string;
  /** URL de la portada. Vacío ('') muestra el placeholder gris. */
  image: string;
}

/**
 * Sección "MUSIC": álbum destacado + grid de singles.
 * Réplica del diseño de Luis Morales Jr.
 *
 * Para poner una imagen: rellena `image` con una URL, o deja el archivo en
 * `public/` y usa la ruta (p.ej. '/aceite.jpg'). Si queda vacío, se ve el placeholder.
 */
@Component({
  selector: 'app-music-section',
  host: { class: 'block' },
  templateUrl: './music-section.html',
})
export class MusicSection {
  readonly featured = signal<Release>({
    tag: 'NEW',
    title: 'Aceite',
    image: '/images/video-section/music-section/aceite.png',
  });

  readonly singles = signal<Release[]>([
    { tag: 'SINGLE', title: 'TITULO', image: '' },
    { tag: 'SINGLE', title: 'TITULO', image: '' },
    { tag: 'SINGLE', title: 'TITULO', image: '' },
    { tag: 'SINGLE', title: 'TITULO', image: '' },
  ]);
}
