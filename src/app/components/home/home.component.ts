import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { AboutComponent } from '../about/about.component';
import { FaqComponent } from '../faq/faq.component';
import { SubmissionBannerComponent } from '../submission-banner/submission-banner.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroSectionComponent, HowItWorksComponent, AboutComponent, FaqComponent, SubmissionBannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
