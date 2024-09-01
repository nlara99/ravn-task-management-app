import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const sharedComponents = [
  NotFoundComponent
]


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: sharedComponents
})
export class SharedModule { }
