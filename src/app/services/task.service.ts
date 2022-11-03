import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private httpclient: HttpClient) {}

  getTask(id: number): Observable<Task>{
    return this.httpclient.get<Task>(this.apiUrl + '/' + id);
  }
  
  getTasks(): Observable<Task[]> {
    return this.httpclient.get<Task[]>(this.apiUrl);
  }
  
  deleteTask(task: Task): Observable<Task> {
    return this.httpclient.delete<Task>(this.apiUrl + '/' + task.id);
  }

  updateTasks(task: Task): Observable<Task> {
    return this.httpclient.put<Task>(this.apiUrl + '/' + task.id, task);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpclient.post<Task>(this.apiUrl, task);
  }

}
