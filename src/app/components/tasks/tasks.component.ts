import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks ?: Task[];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  addTask(task: Task){
      this.taskService.addTask(task).subscribe(
        () => {
          this.getAllTasks();
        }
      );
  }

  deleteTask(task: Task){
      this.taskService.deleteTask(task).subscribe(
        () => {
          this.getAllTasks();
        }
      )
  }

  toggleReminder(task: Task){
    task.reminder = !task.reminder;
    this.taskService.updateTasks(task).subscribe();     
  }

  getAllTasks(): void{
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
