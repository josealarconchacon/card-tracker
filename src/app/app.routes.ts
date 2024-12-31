import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoanComponentsComponent } from './loan-components/loan-components.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'loan', component: LoanComponentsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
