import {createReducer, on} from '@ngrx/store';

import {Todo} from '../models/todo.model';
import * as TodoActions from './todo.actions';
import {createEntityAdapter, EntityState} from '@ngrx/entity';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState extends EntityState<Todo> {
}

export const todoAdapter = createEntityAdapter<Todo>({selectId: (item) => item._id});


const initialState: TodoState = todoAdapter.getInitialState();


export const todoReducer = createReducer(
  initialState,
  on(TodoActions.createItem, (state, {name}) => {
    return todoAdapter.addOne({
      _id: Date.now(),
      name,
      completed: false,
    }, state);
  }),
  on(TodoActions.deleteItem, (state, {id}) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(TodoActions.toggleItem, (state, {id}) => {
    return todoAdapter.updateOne({
      id,
      changes: {
        completed: !state.entities[id].completed,
      },
    }, state);
  }),
  on(TodoActions.editItem, (state, {id, changes}) => {
    return todoAdapter.updateOne({
      id,
      changes: {
        name: changes.name,
      },
    }, state);
  }),
);
