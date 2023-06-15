import {Component} from '@angular/core';
import {ToDoStoreService} from "../../service/to-do-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TaskList} from "../../interfaces/taskList";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  public tasks: any = [];

  constructor(public toDoStoreService: ToDoStoreService) {
    this.tasks = toDoStoreService.items$;
    this.tasks.pipe().subscribe((data: TaskList) => {
      this.tasks = data;
      this.tasks = Array.from(this.tasks);
    });
  }
}
