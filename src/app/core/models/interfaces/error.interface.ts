/* Error API Backend Standard*/
export interface Error {
    message: string;
    extensions: {
        code: string;
        response: {
            statusCode: string;
            message: string;
        }
    }
}