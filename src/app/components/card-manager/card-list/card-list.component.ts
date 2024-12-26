import { Component, Input } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
})
export class CardListComponent {
  @Input() cards: CardList[] = [];

  onDetailClick(card: CardList) {
    console.log('Card details:', card);
    // You can implement the detail view logic here later
  }
}
