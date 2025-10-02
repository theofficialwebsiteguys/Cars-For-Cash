import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
 faqs = [
    {
      question: 'How fast will I receive my offer?',
      answer: 'You will receive a cash offer instantly after submitting your vehicle details.',
      open: false
    },
    {
      question: 'Is there any obligation to accept?',
      answer: 'No, the offer is completely free and comes with no obligations.',
      open: false
    },
    {
      question: 'Can I sell my car even if it has issues?',
      answer: 'Yes! We evaluate vehicles in any condition and provide a fair offer.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
