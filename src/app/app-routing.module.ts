import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/shared/pages/not-found/not-found.component';

const routes: Routes = [
  // .:|TASK MODULE|:.
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks.module').then((m) => m.TasksModule)
  },
  // .:|PAGE NOT FOUND|:.
  {
    path: '**',
    title: 'Página no encontrada',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
