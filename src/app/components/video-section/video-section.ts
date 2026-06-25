import { Component } from '@angular/core';

/**
 * Sección 2: "video music" sobre imagen de fondo full-bleed.
 * Réplica del diseño de Luis Morales Jr. (sin el muro de texto "SALVACIÓN").
 *
 * La imagen de fondo va detrás de la tarjeta de vídeo. Para ponerla, rellena
 * `backgroundImage` con una URL (o deja el archivo en `public/` y usa la ruta).
 * Mientras esté vacía se ve el degradado de marcador de posición.
 */
@Component({
  selector: 'app-video-section',
  host: { class: 'block' },
  templateUrl: './video-section.html',
})
export class VideoSection {
  // Imagen/foto de fondo (servida desde public/).
  readonly backgroundImage = '/images/video-section/luis.jpg';
}
