import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer)
  ]
})
export class TodoModule { }
