import { ActionReducerMap } from "@ngrx/store";
import { TasksState } from "../models/interfaces";
import { tasksReducer } from "./reducers";

export interface AppState {
    tasks: TasksState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    tasks: tasksReducer
}