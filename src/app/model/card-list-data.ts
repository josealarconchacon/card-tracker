export interface CardList {
  id: number;
  image?: string;
  cardName: string;
  cardNumber: string;
  cardType: string;
  amountOwed: number;
  minPayment: number;
  dueDate: Date;
  paymentDueDate?: Date;
  paymentHistory?: { amount: number; date: Date }[];
}
