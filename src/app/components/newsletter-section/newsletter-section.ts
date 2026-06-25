import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Sección "NEWSLETTER": formulario de suscripción.
 * Réplica del diseño de Luis Morales Jr.
 */
@Component({
  selector: 'app-newsletter-section',
  host: { class: 'block' },
  imports: [FormsModule],
  templateUrl: './newsletter-section.html',
})
export class NewsletterSection {
  firstName = '';
  lastName = '';
  email = '';

  readonly submitted = signal(false);

  onSubmit(): void {
    if (!this.email.trim()) {
      return;
    }
    // TODO: conectar con tu servicio/API de newsletter (p.ej. Mailchimp).
    this.submitted.set(true);
  }
}
