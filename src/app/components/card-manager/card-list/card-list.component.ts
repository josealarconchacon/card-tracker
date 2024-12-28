import { Component, Input, OnInit } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from '../card-detail/card-detail.component';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardDetailComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() cards: CardList[] = [];
  selectedCard: CardList | null = null;
  currentPage = 1;
  itemsPerPage = 3;

  ngOnInit() {
    // new method
    this.cards.forEach((card) => {
      if (card.paymentDueDate) {
        this.showDueReminder(card);
      }
    });
  }

  // Show a reminder if payment is due tomorrow
  showDueReminder(card: CardList) {
    // new method
    const dueDate = card.paymentDueDate ? new Date(card.paymentDueDate) : null;
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    if (dueDate && dueDate.toDateString() === tomorrow.toDateString()) {
      alert(`Reminder: Your payment for ${card.cardName} is due tomorrow!`);
    }
  }

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  navigatePage(direction: number) {
    this.currentPage = Math.min(
      Math.max(this.currentPage + direction, 1),
      this.totalPages
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  onDetailClick(card: CardList) {
    this.selectedCard = card;
  }

  closeDetail() {
    this.selectedCard = null;
  }
  handleDeleteCard(cardId: number) {
    this.cards = this.cards.filter((card) => card.id !== cardId);
    if (this.paginatedCards.length === 0 && this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  trackById(index: number, card: CardList): string {
    return card.id.toString();
  }
}
