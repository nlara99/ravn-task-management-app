import { Task } from "../taks.inteface";

export interface TasksState {
    loading: boolean,
    tasks: Task[],
    error: any[] | null
} 