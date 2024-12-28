import { Component, Input } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { CommonModule } from '@angular/common';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { CustomAlertComponent } from '../../../share/custom-alert/custom-alert.component';
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardDetailComponent, CustomAlertComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent {
  @Input() cards: CardList[] = [];
  selectedCard: CardList | null = null;
  alertMessage: string | null = null;
  alertType: 'success' | 'error' | 'warning' = 'error';
  currentPage = 1;
  itemsPerPage = 4;

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return new Array(this.totalPages);
  }

  navigatePage(direction: number) {
    this.currentPage += direction;
    if (this.currentPage < 1) {
      this.currentPage = 1;
    } else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
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
  deleteCard(cardId: number) {
    this.cards = this.cards.filter((card) => card.id !== cardId.toString());
  }
  trackById(index: number, card: CardList): string {
    return card.id;
  }
}
