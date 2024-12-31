// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class CardDetectorService {
//   cardBanks: {
//     [key in
//       | 'Visa'
//       | 'MasterCard'
//       | 'American Express'
//       | 'Discover'
//       | 'Unknown']: string[];
//   } = {
//     Visa: ['Chase', 'Bank of America', 'Wells Fargo'],
//     MasterCard: ['Citibank', 'HSBC', 'Capital One'],
//     'American Express': ['American Express', 'Barclays', 'Goldman Sachs'],
//     Discover: ['Discover Bank', 'Synchrony Bank'],
//     Unknown: ['Unknown Bank'],
//   };

//   cardImages: { [key: string]: string } = {
//     Visa: 'assets/cards/visa-card.png',
//     MasterCard: 'assets/cards/mastercard.png',
//     'American Express': 'assets/cards/amex.png',
//     Discover: 'assets/cards/discover.png',
//     Unknown: 'assets/cards/unknown.png',
//   };

//   detectCardType(cardNumber: string): {
//     type: string;
//     bank: string;
//     image: string;
//   } {
//     const visaRegex = /^4/;
//     const masterCardRegex = /^5[1-5]/;
//     const amexRegex = /^3[47]/;
//     const discoverRegex = /^6/;

//     let cardType:
//       | 'Visa'
//       | 'MasterCard'
//       | 'American Express'
//       | 'Discover'
//       | 'Unknown' = 'Unknown';

//     if (visaRegex.test(cardNumber)) {
//       cardType = 'Visa';
//     } else if (masterCardRegex.test(cardNumber)) {
//       cardType = 'MasterCard';
//     } else if (amexRegex.test(cardNumber)) {
//       cardType = 'American Express';
//     } else if (discoverRegex.test(cardNumber)) {
//       cardType = 'Discover';
//     }

//     const cardBank = this.getCardBank(cardType);
//     const cardImage = this.cardImages[cardType] || this.cardImages['Unknown'];

//     return { type: cardType, bank: cardBank, image: cardImage };
//   }

//   getCardBank(
//     cardType:
//       | 'Visa'
//       | 'MasterCard'
//       | 'American Express'
//       | 'Discover'
//       | 'Unknown'
//   ): string {
//     const banks = this.cardBanks[cardType];
//     return banks
//       ? banks[Math.floor(Math.random() * banks.length)]
//       : 'Unknown Bank';
//   }
// }
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

  cardImages: { [key: string]: string } = {
    Visa: 'assets/cards/visa-card.png',
    MasterCard: 'assets/cards/mastercard.png',
    'American Express': 'assets/cards/amex.png',
    Discover: 'assets/cards/discover.png',
    Unknown: 'assets/cards/unknown.png',
  };

  detectCardType(cardNumber: string): {
    type: string;
    bank: string;
    image: string;
  } {
    if (!cardNumber || typeof cardNumber !== 'string') {
      return this.getDefaultCard();
    }

    const visaRegex = /^4/;
    const masterCardRegex = /^5[1-5]/;
    const amexRegex = /^3[47]/;
    const discoverRegex = /^6/;

    let cardType:
      | 'Visa'
      | 'MasterCard'
      | 'American Express'
      | 'Discover'
      | 'Unknown' = 'Unknown';

    if (visaRegex.test(cardNumber)) {
      cardType = 'Visa';
    } else if (masterCardRegex.test(cardNumber)) {
      cardType = 'MasterCard';
    } else if (amexRegex.test(cardNumber)) {
      cardType = 'American Express';
    } else if (discoverRegex.test(cardNumber)) {
      cardType = 'Discover';
    }

    const cardBank = this.getCardBank(cardType);
    const cardImage = this.cardImages[cardType] || this.cardImages['Unknown'];

    return { type: cardType, bank: cardBank, image: cardImage };
  }

  private getCardBank(
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

  private getDefaultCard(): { type: string; bank: string; image: string } {
    return {
      type: 'Unknown',
      bank: 'Unknown Bank',
      image: this.cardImages['Unknown'],
    };
  }
}
