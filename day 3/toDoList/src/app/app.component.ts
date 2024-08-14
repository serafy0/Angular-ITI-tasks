import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskService } from './services/task.service';
import { TasksComponent } from './components/tasks/tasks.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskFormComponent } from "./components/task-form/task-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent,RouterOutlet, TasksComponent, HeaderComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'toDoList';
}
