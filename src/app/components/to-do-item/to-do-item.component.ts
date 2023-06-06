import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {TaskList} from 'src/app/interfaces/taskList';
import {ToDoStoreService} from "../../service/to-do-store.service";
import {ToastService} from "../../service/toast.service";
import {ApiService} from "../../service/api.service";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input() todo!: TaskList;

  @Output()
  private removeItem = new EventEmitter<number>();


  constructor(public toDoStoreService: ToDoStoreService, public toastService: ToastService,public api: ApiService) {
  }

  public test: boolean = true;

  onItemDelete(id: number) {
    this.removeItem.emit(id);
  }

  titleChange(title: string) {
    this.test = true;
    this.api.putItems(title, this.todo.id).subscribe((data => {
      this.todo.title = data.title;
    }));
    this.toastService.showToast('Task title changed');
  }
}

