import { Component, OnInit, inject } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { VideoSection } from '../../components/video-section/video-section';
import { MusicSection } from '../../components/music-section/music-section';
import { NewsletterSection } from '../../components/newsletter-section/newsletter-section';
import { SiteFooter } from '../../components/site-footer/site-footer';
import { SeoService } from '../../core/seo.service';

/**
 * Página de inicio del sitio de Luis Morales Jr.
 * Compone el navbar y las secciones de la home, y define el SEO de la página.
 */
@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Hero, VideoSection, MusicSection, NewsletterSection, SiteFooter],
  templateUrl: './dashboard.html',
})
export class Dashboard implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Nuevo single — Disponible ahora',
      description:
        'Sitio oficial de Luis Morales Jr. Escucha el nuevo single, disponible ahora. Música, giras y más.',
      keywords: 'Luis Morales Jr, música, nuevo single, tour, artista',
      type: 'website',
    });

    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'MusicGroup',
      name: 'Luis Morales Jr.',
      url: 'https://www.luismjr.com',
    });
  }
}
