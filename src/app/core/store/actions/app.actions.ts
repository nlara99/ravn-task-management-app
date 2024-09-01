import { createAction, props } from '@ngrx/store';

// Acciones de ejemplo para manejar tareas
export const loadTasks = createAction('[Task] Load Tasks');
// export const loadTasksSuccess = createAction('[Task] Load Tasks Success', props<{ tasks: Task[] }>());
// export const loadTasksFailure = createAction('[Task] Load Tasks Failure', props<{ error: any }>());