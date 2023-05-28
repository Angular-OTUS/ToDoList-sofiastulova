import {Injectable} from '@angular/core';
import {TaskList} from "../interfaces/taskList";
import {ToastService} from "./toast.service";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})

export class ToDoStoreService {
  items: TaskList[] = [];

  getAllItems() {
    this.api.getItems().subscribe((data => {
      this.items = data as TaskList[];
    }));
  }

  constructor(public toastService: ToastService, public api: ApiService) {
    this.getAllItems();
  }

  addTask(task: TaskList) {
    this.api.postItems(task).subscribe((data => {
      task.id = data.id;
      this.items.push(data);
    }));
    this.toastService.showToast('Task added');
  }

  deleteTask(id: number) {
    this.api.deleteItems(id)
      .subscribe({
        next: () => {
          this.getAllItems()
        }
      })
    this.toastService.showToast('Task deleted');
  }

  changeStatus(id: number, status: string) {
    if (status === 'In Progress') {
      status = 'Completed';
    } else {
      status = 'In Progress';
    }
    this.api.changeStatus(id, status).subscribe((data => {
      data.status = status;
    }));
    this.toastService.showToast('Task status changed');
  }

  filterByStatus(status: string) {
    if (status === 'All') {
      this.api.getItems().subscribe((data => {
        this.items = data as TaskList[];
      }));
    } else {
      this.api.getItems().subscribe((data => {
        this.items = data as TaskList[];
        this.items = this.items.filter(item => item.status === status);
      }));
    }
  }
}
