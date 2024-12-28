import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent {
  @Input() card!: CardList;
  @Output() close = new EventEmitter<void>();
  @Output() deleteCardEvent = new EventEmitter<number>();

  alertMessage: string | null = null;
  alertType: 'success' | 'error' | 'warning' = 'error';
  paymentAmount: number = 0;
  paymentHistory: { date: Date; amount: number }[] = []; // Payment history

  onOverlayClick(event: MouseEvent) {
    if (
      (event.target as HTMLElement).classList.contains('card-detail-overlay')
    ) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }

  makePayment() {
    if (this.paymentAmount > 0 && this.paymentAmount <= this.card.amountOwed) {
      this.card.amountOwed -= this.paymentAmount;
      this.paymentHistory.push({
        date: new Date(),
        amount: this.paymentAmount,
      }); // Add to history
      this.paymentAmount = 0;
      this.alertMessage = 'Payment successful!';
      this.alertType = 'success';
    } else {
      this.alertMessage = 'Please enter a valid payment amount.';
      this.alertType = 'error';
    }
  }

  deleteCard(cardId: number) {
    this.deleteCardEvent.emit(cardId); // Emit the delete event with the card ID
  }
}
