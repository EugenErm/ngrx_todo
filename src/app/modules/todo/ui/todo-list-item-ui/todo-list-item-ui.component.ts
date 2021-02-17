import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  constructor() {
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(e) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.toggle.emit();
  }

  onEdit() {
    this.edit.emit();
  }


}
