import {Component, OnInit} from '@angular/core';
import {TaskList} from "../../interfaces/taskList";

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  titleTask: string | undefined;
  textTask: string | undefined;
  items: TaskList[] = [];
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.items.push(
      {
        id: 1,
        title: 'Task 1',
        text: 'Description 1',
      },
      {
        id: 2,
        title: 'Task 2',
        text: 'Description 2',
      },
      {
        id: 3,
        title: 'Task 3',
        text: 'Description 3',
      },
      {
        id: 4,
        title: 'Task 4',
        text: 'Description 4',
      }
    );
  }

  deleteTask(id: number) {
    this.items = this.items.filter(todo => todo.id !== id);
  }

  addTask() {
    if (this.titleTask !== undefined && this.titleTask !== '') {
      this.items.push({id: this.items.length + 1, title: `${this.titleTask}`, text: `${this.textTask}`});
      this.titleTask = '';
    }
  }
}
