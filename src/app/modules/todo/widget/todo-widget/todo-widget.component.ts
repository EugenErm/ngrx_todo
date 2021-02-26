import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodoState} from '../../store/todo.reducer';
import {selectAll} from '../../store/todo.selectors';
import * as TodoActions from '../../store/todo.actions';
import {Todo} from '../../models/todo.model';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent implements OnInit {

  todoList$ = this.store.select(selectAll);

  constructor(private readonly store: Store<TodoState>) {
  }

  ngOnInit() {
  }

  onCreate(name) {
    this.store.dispatch(TodoActions.createItem({name}));
  }

  onDelete(id) {
    this.store.dispatch(TodoActions.deleteItem({id}));
  }

  onToggle(id) {
    this.store.dispatch(TodoActions.toggleItem({id}));
  }

  onEdit({id, name}) {
    this.store.dispatch(TodoActions.editItem({id, changes: {name}}));
  }
}
