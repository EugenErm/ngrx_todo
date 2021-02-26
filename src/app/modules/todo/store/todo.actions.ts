import {createAction, props} from '@ngrx/store';
import {Todo} from '../models/todo.model';


export const createItem = createAction(
  '[TODO] Create item',
  props<{ name: string }>()
);

export const deleteItem = createAction(
  '[TODO] Delete item',
  props<{ id: number }>()
);

export const toggleItem = createAction(
  '[TODO] Toggle item',
  props<{ id: number }>()
);

export const editItem = createAction(
  '[TODO] Edit item',
  props<{ id: number, changes: Partial<Todo>}>()
);
