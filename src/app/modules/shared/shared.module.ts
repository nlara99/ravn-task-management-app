import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DueDateComponent } from './components/due-date/due-date.component';
import { TagComponent } from './components/tag/tag.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const sharedComponents = [
  NotFoundComponent,
  DueDateComponent,
  TagComponent,
  AvatarComponent,
  LoadingComponent
]


@NgModule({
  declarations: sharedComponents,
  entryComponents: [LoadingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  exports: sharedComponents
})
export class SharedModule { }