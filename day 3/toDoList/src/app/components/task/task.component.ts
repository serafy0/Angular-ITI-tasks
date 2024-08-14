import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Tasks } from '../../models/task.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TaskService } from '../../services/task.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Tasks;
  tasksSrv = inject(TaskService);
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<Tasks>();

  onDelete() {
    this.tasksSrv.deleteTasks(this.task.id!).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete: () => {
        this.deleteEvent.emit(this.task.id);
      },
    });
  }
}
