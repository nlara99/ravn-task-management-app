import { Component, Input } from '@angular/core';
import { PointEstimate, Status, TagsNames, TaskTag, UserType } from 'src/app/core/models/enums';
import { Task } from 'src/app/core/models/interfaces/taks.inteface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: Task = {
    assignee: {
      id: 'user123',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      avatar: 'path/to/avatar.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: ''
    },
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user456',
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: 'path/to/avatar.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: ''
    },
    dueDate: 'YESTERDAY',
    id: 'task123',
    name: 'Example Task',
    pointEstimate: PointEstimate.ONE,
    position: 1,
    status: Status.TODO,
    tags: [
      TaskTag.ANDROID,
      TaskTag.IOS,
      TaskTag.NODE_JS,
      TaskTag.RAILS,
      TaskTag.REACT
    ].map(tag => TagsNames[tag as TaskTag])
  };

  pointEstimateMap: { [key: string]: number } = {
    'ZERO': 0,
    'ONE': 1,
    'TWO': 2,
    'THREE': 3,
    'FOUR': 4,
    'FIVE': 5,
    'SIX': 6,
    'SEVEN': 7,
    'EIGHT': 8,
    'NINE': 9,
    'TEN': 10
  };

  editTask() {
    console.log('Edit task:', this.task);
  }

  deleteTask() {
    console.log('Delete task:', this.task);
  }
}
