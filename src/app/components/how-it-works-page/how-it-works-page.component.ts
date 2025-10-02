import { Component } from '@angular/core';
import { SubheroComponent } from '../subhero/subhero.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';

@Component({
  selector: 'app-how-it-works-page',
  imports: [SubheroComponent, HowItWorksComponent],
  templateUrl: './how-it-works-page.component.html',
  styleUrl: './how-it-works-page.component.scss'
})
export class HowItWorksPageComponent {

}
