import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss']
})
export class TodoListUiComponent implements OnInit {
  editIds: number[] = [];

  @Input()
  todoList: Todo[] = [];

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<{id: number, name: string}>();


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: number) {
    this.delete.emit(id)
  }

  onToggle(id: number) {
    event.preventDefault();
    this.toggle.emit(id)
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter(item => item !== id)
    this.edit.emit({id, name})
  }

  onEditMode(id: number) {
    this.editIds.push(id)
  }
}
