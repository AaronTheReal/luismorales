import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  /** Título de la página (se le añade el nombre del sitio automáticamente). */
  title?: string;
  description?: string;
  keywords?: string;
  /** URL absoluta de la imagen para Open Graph / Twitter. */
  image?: string;
  /** URL canónica de la página. */
  url?: string;
  /** Tipo Open Graph: website, article, etc. */
  type?: string;
  /** Directiva robots, p.ej. "index, follow" o "noindex, nofollow". */
  robots?: string;
}

/**
 * Servicio centralizado de SEO.
 *
 * Gestiona <title>, las metaetiquetas estándar, Open Graph, Twitter Cards,
 * el enlace canónico y los datos estructurados (JSON-LD). Como la aplicación
 * usa SSR, todas estas etiquetas se renderizan en el servidor y son visibles
 * para los rastreadores de los buscadores.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteName = 'Luis Morales Jr.';
  private readonly defaultDescription =
    'Sitio oficial de Luis Morales Jr. Escucha el nuevo single, disponible ahora.';

  /** Actualiza todas las metaetiquetas SEO de la página actual. */
  update(data: SeoData = {}): void {
    const pageTitle = data.title ? `${data.title} | ${this.siteName}` : this.siteName;
    const description = data.description ?? this.defaultDescription;
    const url = data.url ?? this.document.URL;
    const type = data.type ?? 'website';
    const robots = data.robots ?? 'index, follow';

    this.titleService.setTitle(pageTitle);

    // Metaetiquetas estándar.
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: robots });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph (Facebook, LinkedIn, WhatsApp...).
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:url', content: url });
    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    }

    // Twitter Cards.
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    }

    this.setCanonical(url);
  }

  /** Define o actualiza el enlace canónico de la página. */
  setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  /** Inyecta datos estructurados JSON-LD (schema.org) en el <head>. */
  setJsonLd(schema: Record<string, unknown>, id = 'app-jsonld'): void {
    let script = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = this.document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      this.document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }
}
