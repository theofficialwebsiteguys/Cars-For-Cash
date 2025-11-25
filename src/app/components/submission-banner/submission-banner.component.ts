import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../email.service';

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
  constructor(private fb: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {
    // Initialize the reactive form controls and their validation rules
    this.offerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
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
        const formData = this.offerForm.value;

        // Send email via EmailService
        this.emailService.submitForm(formData).subscribe({
          next: (res) => {
            console.log('Email sent successfully:', res);
            alert('Offer request sent! We will contact you shortly.');
            this.offerForm.reset();
            this.formSubmit.emit(formData);
          },
          error: (err) => {
            console.error('Email sending failed:', err);
            alert('There was an issue sending your offer request. Please try again.');
          }
        });
      } else {
        this.offerForm.markAllAsTouched();
        alert('Please fill out all required fields correctly.');
      }
    }
  }
