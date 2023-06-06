import {Component, Injectable} from '@angular/core';
import {ToDoStoreService} from '../../service/to-do-store.service';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskList} from "../../interfaces/taskList";

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
  public tasks: any = [];

  constructor(public toDoStoreService: ToDoStoreService, private router: Router, private activateRoute: ActivatedRoute) {
    this.tasks = toDoStoreService.items$;
    this.tasks.pipe().subscribe((data: TaskList) => {
      this.tasks = data;
      this.tasks = Array.from(this.tasks);
    });
    this.toDoStoreService.getAllItems();
  }

  onItemClick(item: any) {
    let url: string = "/tasks/" + item.id;
    this.router.navigate([url], {relativeTo: this.activateRoute});
  }


  filterByStatus(status: string) {
    this.toDoStoreService.filterByStatus(status);
  }
}
