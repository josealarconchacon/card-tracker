import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private alertSubject = new BehaviorSubject<{
    message: string;
    type: 'success' | 'error' | 'warning' | null;
  }>({ message: '', type: null });

  alert$ = this.alertSubject.asObservable();

  showAlert(message: string, type: 'success' | 'error' | 'warning') {
    this.alertSubject.next({ message, type });
    setTimeout(() => this.clearAlert(), 5000); // Auto-hide after 5 seconds
  }

  clearAlert() {
    this.alertSubject.next({ message: '', type: null });
  }
}
