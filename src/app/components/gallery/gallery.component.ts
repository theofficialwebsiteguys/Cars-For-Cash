import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  cars = [
    { image: 'assets/for-sale/2.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/3.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/4.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/5.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/6.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/7.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/8.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/9.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/10.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/11.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/12.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/13.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/14.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/15.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/16.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/17.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/18.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/19.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/20.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/21.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/22.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/23.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/24.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/25.jpeg', status: 'For Sale' },
    { image: 'assets/for-sale/26.jpeg', status: 'For Sale' },
    { image: 'assets/towed-cars/1.png', status: 'Towed' },
    { image: 'assets/towed-cars/2.png', status: 'Towed' },
    { image: 'assets/towed-cars/3.png', status: 'Towed' },
    { image: 'assets/towed-cars/4.png', status: 'Towed' },
    { image: 'assets/towed-cars/5.png', status: 'Towed' },
    { image: 'assets/towed-cars/6.png', status: 'Towed' },
    { image: 'assets/towed-cars/8.png', status: 'Towed' },
    { image: 'assets/towed-cars/9.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/10.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/11.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/12.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/13.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/14.jpeg', status: 'Towed' },
    { image: 'assets/towed-cars/15.jpeg', status: 'Towed' },
  ];

  getCarsByStatus(status: string | string[]) {
    if (Array.isArray(status)) {
      return this.cars.filter((car) => status.includes(car.status));
    }
    return this.cars.filter((car) => car.status === status);
  }
}
