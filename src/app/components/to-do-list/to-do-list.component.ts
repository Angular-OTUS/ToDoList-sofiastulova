import {Component} from '@angular/core';
import {ToDoStoreService} from '../../service/to-do-store.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  status: string[] = ['All', 'In Progress', 'Completed'];
  public description: string = '';

  constructor(public toDoStoreService: ToDoStoreService) {
  }

  onItemClick(item: any) {
    this.toDoStoreService.items.forEach(i => i.clicked = false);
    item.clicked = true;
    this.description = item.text;
  }

  filterByStatus(status: string) {
    this.toDoStoreService.filterByStatus(status);
  }
}
