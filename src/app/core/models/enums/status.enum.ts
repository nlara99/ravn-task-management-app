/**
 * Enum representing the different statuses that a task can have.
 * These statuses track the progress and state of tasks within the project.
 */
export enum Status {
    /**
     * Task is in the backlog, yet to be started.
     */
    BACKLOG,

    /**
     * Task has been cancelled and will not be completed.
     */
    CANCELLED,

    /**
     * Task has been completed successfully.
     */
    DONE,

    /**
     * Task is currently being worked on.
     */
    IN_PROGRESS,

    /**
     * Task is planned but work has not yet started.
     */
    TODO
}
