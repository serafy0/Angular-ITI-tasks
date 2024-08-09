import { Component, inject, OnInit } from '@angular/core';
import { Tasks } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { TaskComponent } from '../task/task.component';

import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, MatGridListModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Tasks[] = [];
  tasksSrv = inject(TaskService);

  ngOnInit(): void {
    this.tasksSrv.getTasks().subscribe({
      next: (data) => {
        console.log(data);
        this.tasks = data;
      },
    });
  }
  deleteTask(num: number) {
    this.tasks = this.tasks.filter((t) => t.id != num);
  }
  editTask(newTask: Tasks) {
    this.tasks = this.tasks.map((t) => {
      if (t.id == newTask.id) {
        return newTask;
      } else {
        return t;
      }
    });
  }
}
