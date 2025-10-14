import { Component } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import { SubheroComponent } from '../subhero/subhero.component';

@Component({
  selector: 'app-gallery-page',
  imports: [GalleryComponent, SubheroComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.scss'
})
export class GalleryPageComponent {

}
