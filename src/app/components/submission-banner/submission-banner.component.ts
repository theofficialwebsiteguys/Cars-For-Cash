import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-submission-banner',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './submission-banner.component.html',
  styleUrl: './submission-banner.component.scss'
})
export class SubmissionBannerComponent {
// Define the form structure
  offerForm!: FormGroup;

  // Event emitter to send the form data up to the parent component or a service
  @Output() formSubmit = new EventEmitter<any>();

  // Inject FormBuilder for easy form creation
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the reactive form controls and their validation rules
    this.offerForm = this.fb.group({
      model: ['', [Validators.required, Validators.maxLength(100)]], // Year, Make, Model
      condition: ['', Validators.required],                         // Vehicle Condition
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]] // 5-digit US ZIP code pattern
    });
  }

  /**
   * Handles the form submission event.
   */
  onSubmit(): void {
    if (this.offerForm.valid) {
      // Emit the form data to the parent component (e.g., HeroSection)
      this.formSubmit.emit(this.offerForm.value);

      // In a real application, you would typically call a data service here:
      // this.carService.submitOfferRequest(this.offerForm.value).subscribe(response => { ... });

      console.log('Form Submitted:', this.offerForm.value);
      alert('Offer request sent! We will contact you shortly.');

      // Reset the form after successful submission
      this.offerForm.reset();
    } else {
      // Mark all fields as touched to display validation errors
      this.offerForm.markAllAsTouched();
      alert('Please fill out all required fields correctly.');
    }
  }
}
