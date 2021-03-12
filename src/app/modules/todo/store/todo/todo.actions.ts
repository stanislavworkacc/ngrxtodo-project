import {Action} from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo item',
  toggleDelete = '[TODO] toggleDelete todo item',
  delete = '[TODO] delete todo item',
  edit = '[TODO] edit todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: {name: string}) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: {id: number}) {
  }
}

export class TodoToggleDeleteAction implements Action {
  readonly type = todoActionsType.toggleDelete;
  constructor(public payload: {id: number}) {
  }
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: {id: number, name: string}) {
  }
}

export type TodoActions = TodoCreateAction | TodoDeleteAction | TodoToggleDeleteAction | TodoEditAction;
