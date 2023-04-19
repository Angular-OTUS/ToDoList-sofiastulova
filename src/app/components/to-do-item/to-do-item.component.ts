import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskList} from 'src/app/interfaces/taskList';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input()
  todo!: TaskList;
  selectedItemId?: number;

  @Output()
  private removeItem = new EventEmitter<number>();

  get isSelected() {
    return this.selectedItemId != null;
  }

  onSelectedClick(id: number) {
    if (this.selectedItemId === id) {
      this.selectedItemId = undefined;
      return;
    } else {
      this.selectedItemId = id;
    }
  }

  onItemDelete(id: number) {
    this.removeItem.emit(id);
  }
}

