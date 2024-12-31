import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-loan',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
  templateUrl: './car-loan.component.html',
  styleUrls: ['./car-loan.component.css'],
})
export class CarLoanComponent {
  fullName: string = '';
  dob: Date | null = null;
  ssn: string = '';
  address: string = '';
  phone: string = '';
  email: string = '';
  employer: string = '';
  jobTitle: string = '';
  lengthOfEmployment: string = '';
  employerContact: string = '';
  proofOfIncome: string = '';
  additionalIncome: string = '';
  creditHistory: string = '';
  debtObligations: string = '';
  vehicleInfo: string = '';
  vin: string = '';
  purchasePrice: number = 0;
  downPayment: number = 0;
  bankAccount: string = '';
  assets: string = '';
  liabilities: string = '';
  coSignerFullName: string = '';
  coSignerEmail: string = '';
  coSignerPhone: string = '';
  photoId: string = '';
  insurance: string = '';
  taxReturns: string = '';
  bankStatements: string = '';
  agreeToTerms: boolean = false;
  agreeToPrivacy: boolean = false;
  isSubmitting: boolean = false;
  isSubmitted: boolean = false;
  applicationStatus: string = 'success';

  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.isSubmitted = true;
        this.applicationStatus = Math.random() > 0.5 ? 'success' : 'failure';
      }, 2000);
    }
  }

  openTerms() {
    window.open('/terms-and-conditions', '_blank');
  }

  openPrivacy() {
    window.open('/privacy-policy', '_blank');
  }

  openFAQs() {
    window.open('/faqs', '_blank');
  }
}
