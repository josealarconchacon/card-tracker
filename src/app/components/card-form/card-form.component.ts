import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CardDetectorService } from '../../service/card-detector.service';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
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
      const { cardNumber, amountOwed, minPayment } = this.cardForm.value;
      console.log('Form Submitted', {
        cardNumber,
        amountOwed,
        minPayment,
        cardType: this.cardType,
        cardName: this.cardName,
      });
    }
  }
}
