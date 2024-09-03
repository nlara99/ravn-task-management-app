import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { TasksState } from "../../models/interfaces";

export const selectTasks = (state: AppState) => state.tasks;

//  📌.:|Get Tasks Loading|:.
export const selectLoadingTasks = createSelector(
    selectTasks,
    (state: TasksState) => state.loading
);

//  📌.:|Get Tasks List|:.
export const selectListTasks = createSelector(
    selectTasks,
    (state: TasksState) => state.tasks
);

