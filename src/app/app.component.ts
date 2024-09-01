import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTasks } from './core/store/actions';
import { Observable } from 'rxjs';
import { selectLoadingTasks } from './core/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-management-app';
  loading$: Observable<boolean> = new Observable<false>();

  constructor(private store: Store<any>) {
    setTimeout(()=>{
      this.store.dispatch(loadTasks());
    },5000)

    this.loading$ = this.store.select(selectLoadingTasks)
  }
}
