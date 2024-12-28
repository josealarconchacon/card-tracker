import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardDetectorService } from '../../../service/card-detector.service';
import { CardList } from '../../../model/card-list-data';
import { CardService } from '../../../service/card.service';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<CardList>();
  cardForm: FormGroup;
  cardType = '';
  cardName = '';

  constructor(
    private fb: FormBuilder,
    private cardDetector: CardDetectorService,
    private cardService: CardService
  ) {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      amountOwed: ['', [Validators.required, Validators.min(1)]],
      minPayment: ['', [Validators.required, Validators.min(1)]],
      paymentDate: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.cardForm.get('cardNumber')?.valueChanges.subscribe((value) => {
      const { type, bank } = this.cardDetector.detectCardType(value);
      this.cardType = type;
      this.cardName = bank;
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const { cardNumber, amountOwed, minPayment } = this.cardForm.value;
      const cardData: CardList = {
        id: Date.now().toString(),
        cardName: this.cardName,
        cardNumber,
        cardType: this.cardType,
        amountOwed,
        minPayment,
        dueDate: new Date(),
      };
      const savedCard = this.cardService.addCard(cardData);
      this.formSubmitted.emit(savedCard);

      this.cardForm.reset();
    }
  }
}
