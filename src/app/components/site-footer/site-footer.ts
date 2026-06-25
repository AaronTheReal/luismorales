import { Component } from '@angular/core';

/**
 * Footer del sitio: "FOLLOW US", redes sociales y enlaces legales.
 * Réplica del diseño de Luis Morales Jr.
 */
@Component({
  selector: 'app-site-footer',
  host: { class: 'block' },
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  // TODO: pon aquí tus URLs reales.
  readonly spotifyUrl = '#';
  readonly youtubeUrl = '#';
}
