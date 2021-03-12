import { Component, OnInit } from '@angular/core';
import {TodoState} from "../../store/todo/todo.reducer";
import {select, Store} from "@ngrx/store";
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoEditAction,
  TodoToggleDeleteAction
} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {
  todoList =  [];
  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector))

  constructor(
    private store$: Store<TodoState>
  ) { }

  ngOnInit(): void {
  }

  onSubmit(name: string) {
    console.log(name);
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  onDelete(id: number) {
    this.store$.dispatch(new TodoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new TodoToggleDeleteAction({id}))
  }

  onEdit({id, name}) {
    this.store$.dispatch(new TodoEditAction({id, name}))
  }
}
