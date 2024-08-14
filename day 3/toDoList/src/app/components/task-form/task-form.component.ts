import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskService } from '../../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Tasks } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Input() taskId!: number;
  name: string = '';
  id?: number;
  tasksSrv = inject(TaskService);
  _snackBar = inject(MatSnackBar);
  task?: Tasks;
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
    if (this.id) {
      this.tasksSrv.getOneTask(this.id).subscribe({
        next: (res) => {
          this.task = res;
          this.name = res.name;
          console.log(res, 'from get one res');
        },
      });
    }
  }
  setTask(event: any) {
    console.log(this.name);
    let postValue: Tasks = { name: this.name };
    if (this.id) {
      postValue.id = this.id;
      this.tasksSrv.updateTasks(postValue).subscribe({
        next: (res) => {
          console.log(res);
        },
        complete: () => {
          this._snackBar.open(
            'updated task: ' + postValue.name + ' with id ' + this.id,
            '',
            {
              duration: 5000,
            }
          );
        },
      });
    }
    this.tasksSrv
      .addTasks({
        name: this.name,
      })
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        complete: () => {
          this._snackBar.open('added new task', '', {
            duration: 5000,
          });
        },
      });
  }
}
