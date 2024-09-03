import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TasksState } from '../../models/interfaces';

export const selectTasks = (state: AppState) => state.tasks;

export const selectLoading = createSelector(
    selectTasks,
    (state: TasksState) => state.loading
);

export const selectListTasks = createSelector(
    selectTasks,
    (state: TasksState) => state.tasks
);

export const selectError = createSelector(
    selectTasks,
    (state: TasksState) => state.error
);
