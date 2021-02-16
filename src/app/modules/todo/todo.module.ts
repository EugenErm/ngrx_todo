import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo.reducer';
import {RouterModule, Routes} from '@angular/router';
import {TodoPage} from './pages/todo/todo.page';
import {TodoWidgetComponent} from './widget/todo-widget/todo-widget.component';
import {TodoCreateFormUiComponent} from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: TodoPage
  }
];


@NgModule({
  declarations: [TodoPage, TodoWidgetComponent, TodoCreateFormUiComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule
  ]
})
export class TodoModule { }
