import { createReducer, on } from '@ngrx/store';
import { Task } from '../../models/interfaces/taks.inteface';
import { loadTasks, loadTasksSuccess, loadTasksFailure } from '../actions/tasks.actions';
import { TasksState } from '../../models/interfaces';

export const initialState: TasksState = {
    loading: false,
    tasks: [],
    error: null
};

export const tasksReducer = createReducer(
    initialState,
    on(loadTasks, state => ({
        ...state,
        loading: true
    })),
    on(loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks,
        loading: false
    })),
    on(loadTasksFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
