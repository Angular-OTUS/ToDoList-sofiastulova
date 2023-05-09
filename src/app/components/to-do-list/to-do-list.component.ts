import {Component} from '@angular/core';
import {ToDoStoreService} from "../../service/to-do-store.service";
import {ToDoItemComponent} from "../to-do-item/to-do-item.component";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  public description: string = '';

  constructor(public toDoStoreService: ToDoStoreService, public toDoItemComponent: ToDoItemComponent) {
  }


  onItemClick(item: any) {
    this.toDoStoreService.items.forEach(i => i.clicked = false);
    item.clicked = true;
    this.description = item.text;
  }
}
