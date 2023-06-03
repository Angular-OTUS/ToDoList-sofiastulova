import {Component, Injectable, Input} from '@angular/core';
import {ToDoStoreService} from '../../service/to-do-store.service';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  status: string[] = ['All', 'In Progress', 'Completed'];

  constructor(public toDoStoreService: ToDoStoreService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  onItemClick(item: any) {
    this.toDoStoreService.items.forEach(i => i.clicked = false);
    item.clicked = true;
    let url: string = "/tasks/" + item.id;
    this.router.navigate([url], {relativeTo: this.activateRoute});
  }


  filterByStatus(status: string) {
    this.toDoStoreService.filterByStatus(status);
  }
}
