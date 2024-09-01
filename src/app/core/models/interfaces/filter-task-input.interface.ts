import { PointEstimate, Status, TaskTag } from "../enums";

/**
 * Interface representing the input used to filter tasks.
 * This input is used to search or filter tasks based on various criteria.
 */
export interface FilterTaskInput {
    /**
     * The ID of the user to whom the task is assigned.
     */
    assigneeId: string;

    /**
     * The due date of the task.
     */
    dueDate: string;

    /**
     * The name or title of the task.
     */
    name: string;

    /**
     * The ID of the user who owns or created the task.
     */
    ownerId: string;

    /**
     * The point estimate of the task, indicating the level of effort or complexity.
     */
    pointEstimate: PointEstimate;

    /**
     * The current status of the task (e.g., In Progress, Done).
     */
    status: Status;

    /**
     * An array of tags categorizing the task based on technologies or platforms.
     */
    tags: TaskTag[];
}
