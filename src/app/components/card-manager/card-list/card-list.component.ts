// import { Component, Input } from '@angular/core';
// import { CardList } from '../../../model/card-list-data';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { CardDetailComponent } from '../card-detail/card-detail.component';

// @Component({
//   selector: 'app-card-list',
//   standalone: true,
//   imports: [CommonModule, CardDetailComponent],
//   templateUrl: './card-list.component.html',
//   styleUrl: './card-list.component.css',
// })
// export class CardListComponent {
//   @Input() cards: CardList[] = [];
//   selectedCard: CardList | null = null;

//   onDetailClick(card: CardList) {
//     this.selectedCard = card;
//   }

//   closeDetail() {
//     this.selectedCard = null;
//   }
// }
// card-list.component.ts
import { Component, Input } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CardDetailComponent } from '../card-detail/card-detail.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardDetailComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() cards: CardList[] = [];
  selectedCard: CardList | null = null;

  // Pagination properties
  currentPage = 1;
  itemsPerPage = 4;

  get paginatedCards() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.cards.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.cards.length / this.itemsPerPage);
  }

  onDetailClick(card: CardList) {
    this.selectedCard = card;
  }

  closeDetail() {
    this.selectedCard = null;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}
