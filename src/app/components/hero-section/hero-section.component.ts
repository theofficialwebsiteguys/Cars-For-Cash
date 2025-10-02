import { Component } from '@angular/core';
import { QuickOfferFormComponent } from '../quick-offer-form/quick-offer-form.component';
import { CtaButtonComponent } from '../cta-button/cta-button.component';

@Component({
  selector: 'app-hero-section',
  imports: [QuickOfferFormComponent, CtaButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
