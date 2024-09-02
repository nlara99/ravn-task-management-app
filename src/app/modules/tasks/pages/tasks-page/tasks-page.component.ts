import { Component, OnInit } from '@angular/core';
import { Status, StatusNames } from 'src/app/core/models/enums';


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  columns: string[] = Object.values(Status).filter(value => typeof value === 'number').map(status => StatusNames[status as Status]);

  constructor() {

  }

  ngOnInit(): void { }
}
