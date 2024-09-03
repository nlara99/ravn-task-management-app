import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTasks, loadTasksSuccess, loadTasksFailure } from '../actions/tasks.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TasksService } from 'src/app/modules/tasks/services/tasks.service';

@Injectable({ providedIn: 'root' })
export class TasksEffects {

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTasks),
            switchMap(() =>
                this.tasksService.getTasks().pipe(
                    map(response => loadTasksSuccess({ tasks: response.data.tasks })),
                    catchError(error => of(loadTasksFailure({ error })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private tasksService: TasksService
    ) { }
}
