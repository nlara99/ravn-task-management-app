import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DueDateComponent } from './components/due-date/due-date.component';
import { TagComponent } from './components/tag/tag.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MatIconModule } from '@angular/material/icon';


const sharedComponents = [
  NotFoundComponent,
  DueDateComponent,
  TagComponent,
  AvatarComponent,
]


@NgModule({
  declarations: sharedComponents,
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: sharedComponents
})
export class SharedModule { }
