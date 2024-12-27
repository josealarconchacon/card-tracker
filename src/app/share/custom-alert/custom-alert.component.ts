import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.css',
})
export class CustomAlertComponent {
  @Input() message: string | null = null;
  @Input() alertType: 'success' | 'error' | 'warning' = 'error';

  closeAlert() {
    this.message = null;
  }
}
