import { Component } from '@angular/core';
import { SubheroComponent } from '../subhero/subhero.component';
import { LeaseComponent } from '../lease/lease.component';
import { SubmissionBannerComponent } from '../submission-banner/submission-banner.component';

@Component({
  selector: 'app-lease-page',
  imports: [SubheroComponent, LeaseComponent, SubmissionBannerComponent],
  templateUrl: './lease-page.component.html',
  styleUrl: './lease-page.component.scss'
})
export class LeasePageComponent {

}
