import {Injectable} from '@angular/core';
import {TaskList} from "../interfaces/taskList";
import {ToastService} from "./toast.service";
import {ApiService} from "./api.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ToDoStoreService {
  private items = new BehaviorSubject<TaskList>({} as TaskList);

  items$ = this.items.asObservable();

  get currentItems(): any {
    return this.items.value;
  }

  set currentItems(value: TaskList) {
    this.items.next(value);
  }

  getAllItems() {
    this.api.getItems().subscribe((data => {
      this.items.next(<TaskList>data);
    }));
  }

  constructor(public toastService: ToastService, public api: ApiService) {
    this.getAllItems();
  }

  addTask(task: TaskList) {
    this.api.postItems(task).subscribe((data => {
      task.id = data.id;
      this.currentItems.push(task);
      this.getAllItems();
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
        this.items.next(<TaskList>data);
      }));
    } else {
      this.api.getItems().subscribe((data => {
        this.items.next(<TaskList>data);
        this.items.next(this.currentItems.filter((item: any) => item.status === status));
      }));
    }
  }

  getTaskById(id?: number) {
    return this.api.getTaskById(id ? id : 1);
  }

  getTasksByStatus(status: string) {
    this.api.getItems().subscribe((data => {
      this.items.next(<TaskList>data);
      this.items.next(this.currentItems.filter((item: any) => item.status === status));
    }));
  }
}
