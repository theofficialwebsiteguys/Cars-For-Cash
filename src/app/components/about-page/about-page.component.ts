import { Component } from '@angular/core';
import { SubheroComponent } from '../subhero/subhero.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-about-page',
  imports: [SubheroComponent, AboutComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss'
})
export class AboutPageComponent {

}
