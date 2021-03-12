import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss']
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo: Todo

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id) {
    this.delete.emit(id)
  }

  onEdit() {
    this.edit.emit()
  }

  onToggle(id) {
    event.preventDefault();
    this.toggle.emit(id)
  }

}
