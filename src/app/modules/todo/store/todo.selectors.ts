import {createFeatureSelector, createReducerFactory, createSelector} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoAdapter, TodoState} from './todo.reducer';


export const todoFeature = createFeatureSelector<TodoState>(TODO_REDUCER_NODE);

export const {selectAll, selectEntities, selectIds, selectTotal} = todoAdapter.getSelectors(todoFeature);


// export const todoListSelector = createSelector(
//   todoFeature,
//   s => s.todoItems,
// );
