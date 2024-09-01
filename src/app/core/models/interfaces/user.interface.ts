import { UserType } from "../enums";

/**
 * Interface representing a user in the system.
 * A user has various properties including personal details and their role type.
 */
export interface User {
    /**
     * The URL of the user's avatar image.
     */
    avatar: string;

    /**
     * The date and time when the user account was created.
     */
    createdAt: string;

    /**
     * The user's email address.
     */
    email: string;

    /**
     * The full name of the user.
     */
    fullName: string;

    /**
     * The unique identifier of the user.
     */
    id: string;

    /**
     * The type of user, indicating their role and access level within the system.
     */
    type: UserType;

    /**
     * The date and time when the user account was last updated.
     */
    updatedAt: string;
}
