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
  itemsPerPage = 3;

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
    this.cards = this.cards.filter((card) => card.id !== cardId.toString());
    if (this.paginatedCards.length === 0 && this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }

  trackById(index: number, card: CardList): string {
    return card.id.toString();
  }
}
