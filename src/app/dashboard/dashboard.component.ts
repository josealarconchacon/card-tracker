import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardFormComponent } from '../components/card-manager/card-form/card-form.component';
import { CardListComponent } from '../components/card-manager/card-list/card-list.component';
import { CardManagerComponent } from '../components/card-manager/card-manager.component';
import { CardList } from '../model/card-list-data';

interface Feedback {
  type: string;
  timeAgo: string;
  message: string;
}

@Component({
  selector: 'app-skills-dashboard',
  standalone: true,
  imports: [CommonModule, CardListComponent, CardFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  feedbacks: Feedback[] = [
    {
      type: 'Manager Feedback',
      timeAgo: '5m ago',
      message:
        'Great leadership today during the team meeting. Keep up the good work!',
    },
    {
      type: 'Team Member Feedback',
      timeAgo: '1hr ago',
      message: "You've really improved in your problem-solving abilities!",
    },
  ];

  currentLevel = 5;
  showCardList = false;
  cards: CardList[] = [];

  startNewTask() {
    console.log('Starting new task...');
  }

  startTask(taskTitle: string) {
    console.log(`Starting task: ${taskTitle}`);
  }
  onFormSubmit(cardListData: CardList) {
    this.cards.push(cardListData);
    this.showCardList = true;
  }
}
