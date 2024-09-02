import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TasksPageComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class TasksModule { }
