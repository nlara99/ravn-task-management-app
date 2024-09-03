import { Task } from "../taks.inteface";

export interface TasksState {
    loading: boolean,
    tasks: ReadonlyArray<Task>
} 