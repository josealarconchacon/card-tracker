import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardDetectorService } from '../../../service/card-detector.service';
import { CardList } from '../../../model/card-list-data';

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
  cardType: string = '';
  cardName: string = '';

  constructor(
    private fb: FormBuilder,
    private cardDetector: CardDetectorService
  ) {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      amountOwed: ['', [Validators.required, Validators.min(1)]],
      minPayment: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    this.cardForm.get('cardNumber')?.valueChanges.subscribe((value: string) => {
      const { type, bank } = this.cardDetector.detectCardType(value);
      this.cardType = type;
      this.cardName = bank;
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const { amountOwed } = this.cardForm.value;
      const cardData: CardList = {
        cardName: this.cardName,
        amountOwed: amountOwed,
      };
      this.formSubmitted.emit(cardData);
    }
  }
}
