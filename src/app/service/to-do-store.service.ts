import {Injectable} from '@angular/core';
import {TaskList} from "../interfaces/taskList";
import {ToastService} from "./toast.service";

@Injectable({
  providedIn: 'root'
})
export class ToDoStoreService {
  items: TaskList[] = [];

  constructor(public toastService: ToastService) {
    this.items.push(
      {
        id: 1,
        title: 'Task 1',
        text: 'Description 1',
        clicked: false,
      },
      {
        id: 2,
        title: 'Task 2',
        text: 'Description 2',
        clicked: false,
      },
      {
        id: 3,
        title: 'Task 3',
        text: 'Description 3',
        clicked: false,
      },
      {
        id: 4,
        title: 'Task 4',
        text: 'Description 4',
        clicked: false,
      }
    );
  }

  addTask(title: string, text?: string) {
    this.items.push({id: this.items.length + 1, title: `${title}`, text: `${text}`, clicked: false});
    this.toastService.showToast('Task added');
  }

  deleteTask(id: number) {
    this.items = this.items.filter(todo => todo.id !== id);
    this.toastService.showToast('Task deleted');
  }
}
