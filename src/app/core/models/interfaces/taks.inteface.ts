import { PointEstimate, Status, TaskTag } from "../enums";
import { User } from "./user.interface";

/**
 * Interface representing a task in the system.
 * A task has various properties such as assignment, status, and other metadata.
 */
export interface Task {
    /**
     * The user to whom the task is assigned.
     */
    assignee: User;

    /**
     * The date and time when the task was created, typically in ISO 8601 format.
     */
    createdAt: string;

    /**
     * The user who created the task.
     */
    creator: User;

    /**
     * The due date of the task.
     */
    dueDate: string;

    /**
     * The unique identifier of the task.
     */
    id: string;

    /**
     * The name or title of the task.
     */
    name: string;

    /**
     * The point estimate of the task, indicating its level of effort or complexity.
     */
    pointEstimate: PointEstimate;

    /**
     * The position of the task, which might be used for ordering or prioritization.
     */
    position: number;

    /**
     * The current status of the task (e.g., In Progress, Done).
     */
    status: Status;

    /**
     * An array of tags categorizing the task based on technologies or platforms.
     */
    tags: string[];
}
