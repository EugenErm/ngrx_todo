import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListUiComponent {

  @Input() todoList: Todo[];

  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  constructor() {
  }

  onDelete(id) {
    this.delete.emit(id);
  }

  onToggle(e, id) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.toggle.emit(id);
  }

  myTrackByFunction(index, todo) {
    return todo.id;
  }


}
