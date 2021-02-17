import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent implements OnInit {

  @Input() todo: Todo;

  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  onDelete(id) {
    this.delete.emit(id);
  }

  onToggle(e, id) {
    e.preventDefault();
    e.stopImmediatePropagation();

    this.toggle.emit(id);
  }

}
