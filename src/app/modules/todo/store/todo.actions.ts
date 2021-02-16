import {createAction, props} from '@ngrx/store';


export const createItem = createAction(
  '[TODO] Create item',
  props<{ name: string }>()
);

// export const createItem = createAction('[TODO] Create item');
