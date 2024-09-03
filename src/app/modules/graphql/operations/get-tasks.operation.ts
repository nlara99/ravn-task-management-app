import { gql } from "apollo-angular";

export const GET_TASKS = gql`
   query {
        tasks(input: {}) {
            id
            name
            assignee {
                id
                fullName
                email
                avatar
            }
            creator {
                id
                fullName
                email
                avatar
            }
            dueDate
            pointEstimate
            position
            status
            tags
        }
    }
`;