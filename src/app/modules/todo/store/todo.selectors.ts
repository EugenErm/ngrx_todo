import {createFeatureSelector, createReducerFactory, createSelector} from '@ngrx/store';
import {TODO_REDUCER_NODE, TodoState} from './todo.reducer';


export const todoFeature = createFeatureSelector<TodoState>(TODO_REDUCER_NODE);

export const todoListSelector = createSelector(
  todoFeature,
  s => s.todoItems
);
