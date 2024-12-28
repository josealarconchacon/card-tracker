import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertService } from '../../../share/service/alert.service';
import { CustomAlertComponent } from '../../../share/custom-alert/custom-alert.component';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, CustomAlertComponent], // Add AlertComponent to imports
  providers: [AlertService],
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent {
  @Input() card!: {
    id: number;
    cardName: string;
    cardType: string;
    cardNumber: string;
    amountOwed: number;
    minPayment: number;
    dueDate: Date;
  };
  @Output() close = new EventEmitter<void>();
  @Output() deleteCardEvent = new EventEmitter<number>();

  paymentAmount: number = 0;
  paymentHistory: { date: Date; amount: number }[] = [];
  showAlert: any;

  constructor(private alertService: AlertService) {}

  makePayment() {
    if (this.paymentAmount > 0 && this.paymentAmount <= this.card.amountOwed) {
      this.card.amountOwed -= this.paymentAmount;
      this.paymentHistory.push({
        date: new Date(),
        amount: this.paymentAmount,
      });
      this.alertService.showAlert('Payment successful!', 'success');
      this.paymentAmount = 0;
    } else {
      this.alertService.showAlert(
        'Payment amount must be greater than the total amount owed.',
        'error'
      );
    }
  }

  emitDeleteCard() {
    this.deleteCardEvent.emit(this.card.id);
  }

  onClose() {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (
      (event.target as HTMLElement).classList.contains('card-detail-overlay')
    ) {
      this.onClose();
    }
  }
}
