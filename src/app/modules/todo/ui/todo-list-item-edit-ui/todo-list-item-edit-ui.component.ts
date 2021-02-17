import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../models/todo.model';


@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.scss'],
})
export class TodoListItemEditUiComponent implements OnInit {

  name = '';

  @Input() todo: Todo;

  @Output() edit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    this.name = this.todo.name;
  }

  onEdit() {
    if (this.name !== this.todo.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.cancel.emit();
  }

}
