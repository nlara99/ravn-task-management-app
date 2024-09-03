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
      type: UserType.CANDIDATE // Ajusta según tu enum
    },
    createdAt: new Date().toISOString(),
    creator: {
      id: 'user456',
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      avatar: 'path/to/avatar.png',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      type: UserType.ADMIN // Ajusta según tu enum
    },
    dueDate: 'YESTERDAY',
    id: 'task123',
    name: 'Example Task',
    pointEstimate: PointEstimate.ONE, // Ajusta según tu enum
    position: 1,
    status: Status.TODO, // Ajusta según tu enum
    tags: [
      TaskTag.ANDROID,
      TaskTag.IOS,
      TaskTag.NODE_JS,
      TaskTag.RAILS,
      TaskTag.REACT
    ].map(tag => TagsNames[tag as TaskTag])
  };

  editTask() {
    // Implementa la lógica para editar la tarea
    console.log('Edit task:', this.task);
  }

  deleteTask() {
    // Implementa la lógica para eliminar la tarea
    console.log('Delete task:', this.task);
  }
}
