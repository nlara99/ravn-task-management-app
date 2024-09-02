import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatIconModule,
    MatCardModule
  ]
})
export class TasksModule { }
