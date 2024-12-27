import { Routes } from '@angular/router';
import { CardListComponent } from './components/card-manager/card-list/card-list.component';
import { CardDetailComponent } from './components/card-manager/card-detail/card-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: CardListComponent },
      { path: 'card-detail/:id', component: CardDetailComponent },
    ],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
