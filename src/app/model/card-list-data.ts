export interface CardList {
  id: string;
  cardName: string;
  cardNumber: string;
  cardType: string;
  amountOwed: number;
  minPayment: number;
  dueDate: Date;
  paymentHistory?: { amount: number; date: Date }[];
}
