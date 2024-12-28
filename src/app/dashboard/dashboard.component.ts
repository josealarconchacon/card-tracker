import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardFormComponent } from '../components/card-manager/card-form/card-form.component';
import { CardListComponent } from '../components/card-manager/card-list/card-list.component';
import { CardManagerComponent } from '../components/card-manager/card-manager.component';
import { CardList } from '../model/card-list-data';
import { RouterModule } from '@angular/router';

interface Feedback {
  type: string;
  timeAgo: string;
  message: string;
}

@Component({
  selector: 'app-skills-dashboard',
  standalone: true,
  imports: [CommonModule, CardListComponent, CardFormComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentLevel = 5;
  showCardList = false;
  cards: CardList[] = [];

  startTask(taskTitle: string) {
    console.log(`Starting task: ${taskTitle}`);
  }

  onFormSubmit(cardListData: CardList) {
    this.cards.push(cardListData);
    this.showCardList = true;
  }
}
