import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-button',
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-button.component.html',
  styleUrl: './cta-button.component.scss'
})
export class CtaButtonComponent {
  // Sets the button text (e.g., "Get Offer")
  @Input({ required: true }) text: string = 'Button';

  // Sets the destination link (e.g., "/offer" or "tel:12345")
  // Use 'link' for router navigation, 'href' for external/tel links
  @Input() link: string = '#';

  /**
   * Defines the button's style.
   * 'primary' for the orange button, 'secondary' for the outlined button.
   */
  @Input() type: 'primary' | 'secondary' = 'primary';

  // Check if the link is an external or special URL (like 'tel:')
  isExternalLink(): boolean {
    return this.link.startsWith('http') || this.link.startsWith('tel:') || this.link.startsWith('mailto:');
  }
}
