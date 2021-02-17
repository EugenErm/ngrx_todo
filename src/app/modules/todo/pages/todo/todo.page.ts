import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {TodoState} from '../../store/todo.reducer';
import * as TodoActions from '../../store/todo.actions';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage {

  constructor() {
  }

}
