/**
 * Enum representing the different statuses that a task can have.
 * These statuses track the progress and state of tasks within the project.
 */
export const Status = {
    /**
     * Task is in the backlog, yet to be started.
     */
    BACKLOG: 'Backlog',

    /**
     * Task has been cancelled and will not be completed.
     */
    CANCELLED: 'Cancelled',

    /**
     * Task has been completed successfully.
     */
    DONE: 'Done',

    /**
     * Task is currently being worked on.
     */
    IN_PROGRESS: 'In Progress',

    /**
     * Task is planned but work has not yet started.
     */
    TODO: 'Todo'
} as const;

type Status = typeof Status[keyof typeof Status];