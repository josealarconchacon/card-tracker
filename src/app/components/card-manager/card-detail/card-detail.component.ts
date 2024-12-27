import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardList } from '../../../model/card-list-data';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css',
})
export class CardDetailComponent {
  @Input() card!: CardList;
  @Output() close = new EventEmitter<void>();

  onOverlayClick(event: MouseEvent) {
    if (
      (event.target as HTMLElement).classList.contains('card-detail-overlay')
    ) {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}
