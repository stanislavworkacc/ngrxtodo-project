import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrls: ['./todo-list-item-edit.component.scss']
})
export class TodoListItemEditComponent implements OnInit {
  name = '';

  @Input()
  todo: Todo

  @Output()
  edit = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
    this.name = this.todo.name;
  }

  onEdit() {
    if(this.name) {
      this.edit.emit(this.name)
    }
  }

  onCancel() {
    this.name = this.todo.name
  }
}
