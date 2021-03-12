import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TotoPageComponent } from './page/toto-page/toto-page.component';
import {RouterModule} from "@angular/router";
import {todoRoutes} from "./routes";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoListItemEditComponent } from './ui/todo-list-item-edit/todo-list-item-edit.component';

@NgModule({
  declarations: [TotoPageComponent, TodoWidgetComponent, TodoCreateFormUiComponent, TodoListUiComponent, TodoListItemUiComponent, TodoListItemEditComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(todoRoutes),
    FormsModule
  ]
})
export class TodoModule { }
