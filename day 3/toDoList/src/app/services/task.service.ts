import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/tasks');
  }

  getOneTask(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:3000/tasks/' + id);
  }
  addTasks(data: Tasks): Observable<any> {
    return this.httpClient.post('http://localhost:3000/tasks/', data);
  }

  updateTasks(data: Tasks): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/tasks/${data.id}`, data);
  }

  deleteTasks(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/tasks/${id}`);
  }
}
