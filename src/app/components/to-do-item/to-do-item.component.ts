import {Component, EventEmitter, Injectable, Input, Output} from '@angular/core';
import {TaskList} from 'src/app/interfaces/taskList';

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
  @Input() isSelected: boolean = false;

  @Output()
  private removeItem = new EventEmitter<number>();

  onItemDelete(id: number) {
    this.removeItem.emit(id);
  }
}

