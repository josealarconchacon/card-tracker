import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardFormComponent } from './components/card-form/card-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'card-tracker';
}
