import {Component} from '@angular/core';
import {ToDoStoreService} from "../../service/to-do-store.service";

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss']
})
export class TodoCreateItemComponent {
  titleTask!: string;
  textTask: string = '';

  constructor(public toDoStoreService: ToDoStoreService) {
  }

  addTask() {
    if (this.titleTask) {
      let task = {
        title: this.titleTask,
        text: this.textTask,
        status: 'In Progress',
        clicked: false,
        id: 0
      }
      this.toDoStoreService.addTask(task);
    }
  }
}
