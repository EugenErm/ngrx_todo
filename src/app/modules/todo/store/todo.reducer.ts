import {createReducer, on} from '@ngrx/store';

import {Todo} from '../models/todo.model';
import * as TodoActions from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoItems: Todo[];
}

const initialState: TodoState = {
  idIncrement: 0,
  todoItems: []
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.createItem, (state, {name}) => {
    return {
      ...state,
      idIncrement: state.idIncrement + 1,
      todoItems: [...state.todoItems, {
        name,
        completed: false,
        id: state.idIncrement
      }]
    };
  })
);
