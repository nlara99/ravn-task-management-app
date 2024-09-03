import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { Task } from 'src/app/core/models/interfaces/taks.inteface';
import { loadTasks } from 'src/app/core/store/actions';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { selectError, selectListTasks, selectLoading } from 'src/app/core/store/selectors';
import { Status, StatusNames } from 'src/app/core/models/enums';

@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.scss']
})
export class TasksPageComponent implements OnInit {

  columns: string[] = Object.values(Status).filter(value => typeof value === 'number').map(status => StatusNames[status as Status]);
  tasks$: Observable<Task[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private loadingService: LoadingService,
    private notificationService: NotificationService
  ) {
    this.tasks$ = this.store.select(selectListTasks);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
    this.loading$.subscribe(loading => {
      if (loading) {
        this.loadingService.showLoading()
      } else {
        this.loadingService.hideLoading()
      }
    });

    this.error$.subscribe(error => {
      if (error) {
        this.notificationService.showError('Error Loading Tasks');
      }
    });
  }
}
