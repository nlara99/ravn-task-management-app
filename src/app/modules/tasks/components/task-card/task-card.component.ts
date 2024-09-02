import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  @Input() task: any = {
    title: 'Titulo',
    due: '4 points',
    date: 'yesterday',
    tags: ['Android', 'IOS']
  };  // Cambia `any` por una interfaz adecuada si tienes una definida

  editTask() {
    // Implementa la lógica para editar la tarea
    console.log('Edit task:', this.task);
  }

  deleteTask() {
    // Implementa la lógica para eliminar la tarea
    console.log('Delete task:', this.task);
  }
}
