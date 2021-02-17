import {createAction, props} from '@ngrx/store';


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
