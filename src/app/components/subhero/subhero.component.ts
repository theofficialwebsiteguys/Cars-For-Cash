import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subhero',
  imports: [CommonModule],
  templateUrl: './subhero.component.html',
  styleUrl: './subhero.component.scss'
})
export class SubheroComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() backgroundImage: string = ''; // path to hero image
}
