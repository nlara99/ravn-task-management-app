import { createReducer, on } from "@ngrx/store"
import { Task } from "../../models/interfaces/taks.inteface"
import { loadTasks } from "../actions/tasks.actions"
import { TasksState } from "../../models/interfaces"


export const initialState: TasksState = {
    loading: false,
    tasks: []
}

export const tasksReducer = createReducer(
    initialState,
    on(loadTasks, (state) => {
        return { ...state, loading: true }
    })
)