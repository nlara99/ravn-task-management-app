import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TASKS } from '../../graphql/operations';
import { GetTasksResponse } from 'src/app/core/models/dtos';

@Injectable({ providedIn: 'root' })
export class TasksService {

    constructor(
        private apollo: Apollo
    ) { }

    getTasks() {
        return this.apollo.watchQuery<GetTasksResponse>({
            query: GET_TASKS
        }).valueChanges;
    }


}