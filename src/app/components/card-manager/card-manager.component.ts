import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardList } from '../../model/card-list-data';

@Component({
  selector: 'app-card-manager',
  standalone: true,
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css'],
  imports: [CommonModule, CardFormComponent, CardListComponent],
})
export class CardManagerComponent {
  showCardList = false;
  cards: CardList[] = [];

  onFormSubmit(cardListData: CardList) {
    this.cards.push(cardListData);
    this.showCardList = true;
  }
}
