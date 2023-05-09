import {Component} from '@angular/core';
import {ToDoStoreService} from "../../service/to-do-store.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {
  titleTask!: string;
  textTask: string | undefined;

  constructor(public toDoStoreService: ToDoStoreService) {
  }
}
