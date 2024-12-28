import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { CardList } from '../model/card-list-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cards = new BehaviorSubject<CardList[]>([]);
  cards$ = this.cards.asObservable();

  addCard(card: CardList) {
    const currentCards = this.cards.getValue();
    const cardWithId = { ...card, id: Date.now() };
    this.cards.next([...currentCards, cardWithId]);
    return cardWithId;
  }

  getCardById(id: string) {
    return this.cards.getValue().find((card) => card.id === Number(id));
  }
}
