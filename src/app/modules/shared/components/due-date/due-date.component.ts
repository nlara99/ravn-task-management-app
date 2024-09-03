import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent {
  @Input() date: string = '';

}
