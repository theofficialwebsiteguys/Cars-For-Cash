import { Component } from '@angular/core';
import { SubheroComponent } from '../subhero/subhero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { SubmissionBannerComponent } from '../submission-banner/submission-banner.component';
import { GalleryComponent } from '../gallery/gallery.component';

@Component({
  selector: 'app-how-it-works-page',
  imports: [SubheroComponent, HowItWorksComponent, SubmissionBannerComponent, GalleryComponent],
  templateUrl: './how-it-works-page.component.html',
  styleUrl: './how-it-works-page.component.scss'
})
export class HowItWorksPageComponent {

}
