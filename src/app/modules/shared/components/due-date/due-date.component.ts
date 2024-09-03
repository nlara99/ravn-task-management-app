import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent {
  @Input() date: string = '';

  get dueDate(): Date {
    return new Date(this.date);
  }

  get statusClass(): string {
    const now = new Date();
    const dueDate = this.dueDate;
    const timeDiff = dueDate.getTime() - now.getTime();
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (dueDate < now) {
      return 'late-style'; // Late
    } else if (diffDays <= 2) {
      return 'soso-style'; // Soso
    } else {
      return 'ontime-style'; // on Time
    }
  }

  get formattedDate(): string {
    return this.dueDate.toLocaleDateString();
  }
}
