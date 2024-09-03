import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { loadTasks } from 'src/app/core/store/actions';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { selectError, selectListTasks, selectLoading } from 'src/app/core/store/selectors';
import { Status } from 'src/app/core/models/enums';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/core/models/interfaces/taks.inteface';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {
  columns: string[] = Object.values(Status);
  tasksByStatus: { [key: string]: Task[] } = {};
  tasksByStatus$: Observable<{ [status: string]: Task[] }>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) {
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);

    this.tasksByStatus$ = this.store.select(selectListTasks).pipe(
      map(tasks => this.groupTasksByStatus(tasks))
    );

  }

  ngOnInit(): void {
    this.starStatus();
  }

  starStatus() {
    this.store.dispatch(loadTasks());

    this.loading$.subscribe(loading => {
      if (loading) {
        this.loadingService.showLoading();
      } else {
        this.loadingService.hideLoading();
      }
    });

    this.error$.subscribe(error => {
      if (error) {
        this.notificationService.showError('Error Loading Tasks');
      }
    });
  }

  private groupTasksByStatus(tasks: Task[]): { [status: string]: Task[] } {
    const groupedTasks = tasks.reduce((acc, task) => {

      const statusName = Status[task.status as keyof typeof Status];

      if (!acc[statusName]) {
        acc[statusName] = [];
      }

      acc[statusName].push(task);

      return acc;
    }, {} as { [status: string]: Task[] });

    return groupedTasks;
  }

}

