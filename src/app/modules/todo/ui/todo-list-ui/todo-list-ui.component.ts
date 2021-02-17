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
  @Output() edit = new EventEmitter<{ id, name }>();

  editModeIds = [];

  constructor() {
  }

  onDelete(id) {
    this.delete.emit(id);
  }

  onToggle(id) {
    this.toggle.emit(id);
  }

  onEdit(id, name) {
    this.edit.emit({id, name});
    this.onCancelEditMode(id);
  }

  myTrackByFunction(index, todo) {
    return todo.id;
  }

  isEdit(id) {
    return !!(this.editModeIds.indexOf(id) + 1);
  }

  onEditMode(id) {
    this.editModeIds = [...this.editModeIds, id];
  }

  onCancelEditMode(id) {
    this.editModeIds = this.editModeIds.filter(onId => onId !== id);
  }


}
