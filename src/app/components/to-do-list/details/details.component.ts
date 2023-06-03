import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToDoStoreService} from "../../../service/to-do-store.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id!: number;
  task: any = {};
  text: string = '';

  constructor(private activateRoute: ActivatedRoute, private router: Router, public toDoStoreService: ToDoStoreService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getId();
    this.getTaskById(this.id);
  }

// получаем параметры маршрута
  getId() {
    const firstParam: string = this.router.url.split('/')[2];
    this.id = +firstParam;
  }

//  получение задачи по id
  getTaskById(id: number) {
    this.toDoStoreService.getTaskById(id);
    this.task = this.toDoStoreService.items[id];
    if (this.task !== undefined) {
      this.text = this.task.text;
    }
  }
}
