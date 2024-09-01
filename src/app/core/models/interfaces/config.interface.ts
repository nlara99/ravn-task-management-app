/**
 * Interface representing the configuration settings required for API interactions.
 */
export interface Config {
    /**
     * The token used for authenticating API requests.
     * @type {string}
     */
    apiToken: string;

    /**
     * The base URL of the API.
     * @type {string}
     */
    apiBase: string;
}
