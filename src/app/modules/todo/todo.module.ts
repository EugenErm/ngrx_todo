import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TODO_REDUCER_NODE, todoReducer} from './store/todo.reducer';
import {RouterModule, Routes} from '@angular/router';
import {TodoPage} from './pages/todo/todo.page';
import {TodoWidgetComponent} from './widget/todo-widget/todo-widget.component';
import {TodoCreateFormUiComponent} from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {TodoListUiComponent} from './ui/todo-list-ui/todo-list-ui.component';
import {TodoListItemUiComponent} from './ui/todo-list-item-ui/todo-list-item-ui.component';


const routes: Routes = [
  {
    path: '',
    component: TodoPage
  }
];

const components = [
  TodoPage,
  TodoWidgetComponent,

  TodoCreateFormUiComponent,
  TodoListUiComponent,
  TodoListItemUiComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
    IonicModule,
    FormsModule
  ]
})
export class TodoModule {
}
