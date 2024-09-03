/**
 * Enum representing point estimates used in the project.
 * These values correspond to different levels of effort or complexity.
 */
export enum PointEstimate {
    /**
     * Represents the highest estimate, typically used for the most complex tasks.
     */
    EIGHT,

    /**
     * Represents a high estimate, used for tasks with significant complexity.
     */
    FOUR,

    /**
     * Represents a low estimate, used for tasks with minimal complexity.
     */
    ONE,

    /**
     * Represents a very low estimate, used for simple or routine tasks.
     */
    TWO,

    /**
     * Represents no estimate or tasks that require negligible effort.
     */
    ZERO
}
