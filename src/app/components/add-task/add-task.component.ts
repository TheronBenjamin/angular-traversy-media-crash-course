import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { Subscription } from 'rxjs'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  reminder: boolean = false;
  day: string = '';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe( value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add text')
      return;
    }
    let newTask = {
      // id: this.text,
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit event
    this.onAddTask.emit(newTask);

    //Reset form
    this.text = '';
    this.day ='';
    this.reminder = false;

  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }

}
