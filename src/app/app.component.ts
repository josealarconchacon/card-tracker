import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardManagerComponent } from './components/card-manager/card-manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'card-tracker';
}
