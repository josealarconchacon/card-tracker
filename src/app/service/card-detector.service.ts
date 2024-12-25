import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardDetectorService {
  cardBanks: {
    [key in
      | 'Visa'
      | 'MasterCard'
      | 'American Express'
      | 'Discover'
      | 'Unknown']: string[];
  } = {
    Visa: ['Chase', 'Bank of America', 'Wells Fargo'],
    MasterCard: ['Citibank', 'HSBC', 'Capital One'],
    'American Express': ['American Express', 'Barclays', 'Goldman Sachs'],
    Discover: ['Discover Bank', 'Synchrony Bank'],
    Unknown: ['Unknown Bank'],
  };

  detectCardType(cardNumber: string): { type: string; bank: string } {
    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^6/;

    let cardType = 'Unknown';
    let cardBank = 'Unknown Bank';

    if (visaRegex.test(cardNumber)) {
      cardType = 'Visa';
      cardBank = this.getCardBank('Visa');
    } else if (masterCardRegex.test(cardNumber)) {
      cardType = 'MasterCard';
      cardBank = this.getCardBank('MasterCard');
    } else if (amexRegex.test(cardNumber)) {
      cardType = 'American Express';
      cardBank = this.getCardBank('American Express');
    } else if (discoverRegex.test(cardNumber)) {
      cardType = 'Discover';
      cardBank = this.getCardBank('Discover');
    }

    return { type: cardType, bank: cardBank };
  }

  getCardBank(
    cardType:
      | 'Visa'
      | 'MasterCard'
      | 'American Express'
      | 'Discover'
      | 'Unknown'
  ): string {
    const banks = this.cardBanks[cardType];
    return banks
      ? banks[Math.floor(Math.random() * banks.length)]
      : 'Unknown Bank';
  }
}
