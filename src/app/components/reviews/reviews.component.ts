import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Shawn',
      rating: 5,
      text: 'Excellent transaction. Good Seller.'
    },
    {
      name: 'Alan',
      rating: 5,
      text: 'Great experience with Mike. Honest, straightforward, clear communication, picks up the phone to talk, easy to deal with.'
    },
    {
      name: 'Jay',
      rating: 5,
      text: 'Made this account months ago JUST to buy a car. Honestly couldn\'t have asked for a better seller as a 1st time car buyer.'
    },
    {
      name: 'Evelyn',
      rating: 5,
      text: 'Very Respectful and helpful ! I love the car !'
    }
  ];
}
