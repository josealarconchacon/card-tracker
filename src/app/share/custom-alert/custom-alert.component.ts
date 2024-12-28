import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.css',
})
export class CustomAlertComponent {
  alert: {
    message: string;
    type: 'success' | 'error' | 'warning' | null;
  } | null = null;

  constructor(private alertService: AlertService) {
    this.alertService.alert$.subscribe((alert) => (this.alert = alert));
  }
}
