import { Routes } from '@angular/router';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TasksComponent } from './components/tasks/tasks.component';

export const routes: Routes = [
  { path: 'form', component: TaskFormComponent },
  { path: 'tasks', component: TasksComponent },
];
