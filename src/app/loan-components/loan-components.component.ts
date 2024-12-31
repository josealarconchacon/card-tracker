import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';

interface LoanType {
  id: number;
  name: string;
  description: string;
  icon: string;
  component: any;
}

@Component({
  selector: 'app-loan-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loan-components.component.html',
  styleUrls: ['./loan-components.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class LoanComponentsComponent {
  selectedLoan: LoanType | null = null;
  isPanelOpen = false;

  loanTypes: LoanType[] = [
    {
      id: 1,
      name: 'Auto Loan',
      description: 'Finance a new or used vehicle',
      icon: '🚗',
      component: CarLoanComponent,
    },
    {
      id: 2,
      name: 'Mortgage',
      description: 'Buy or refinance your home',
      icon: '🏠',
      component: HomeLoanComponent,
    },
    {
      id: 3,
      name: 'Personal Loan',
      description: 'Flexible financing for your needs',
      icon: '💳',
      component: PersonalLoanComponent,
    },
  ];

  selectLoan(loan: LoanType): void {
    this.selectedLoan = loan;
    this.isPanelOpen = true;
  }

  closePanel(): void {
    this.isPanelOpen = false;
  }
}
