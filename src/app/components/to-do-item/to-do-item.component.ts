import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {TaskList} from 'src/app/interfaces/taskList';
import {ToDoStoreService} from "../../service/to-do-store.service";
import {ToastService} from "../../service/toast.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input()
  todo!: TaskList;

  @Output()
  private removeItem = new EventEmitter<number>();


  constructor(public toDoStoreService: ToDoStoreService, public toastService: ToastService) {
  }

  public test: boolean = true;

  onItemDelete(id: number) {
    this.removeItem.emit(id);
  }

  titleChange(title: string) {
    this.test = true;
    this.toDoStoreService.items.map((item) => {
      if (item.id === this.todo.id) {
        item.title = title;
      }
    });
    this.toastService.showToast('Task title changed');
  }
}

