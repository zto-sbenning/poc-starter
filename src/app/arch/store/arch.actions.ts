import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { TaskState } from './arch.state';

export enum ArchActionType {
    addTask = '[Arch Action Type] Add Task',
    updateTask = '[Arch Action Type] Update Task',
    deleteTask = '[Arch Action Type] Delete Task',
}

export class AddTaskArch implements Action {
    type = ArchActionType.addTask;
    constructor(public payload: { task: TaskState }) {}
}
export class UpdateTaskArch implements Action {
    type = ArchActionType.updateTask;
    constructor(public payload: { update: Update<TaskState> }) {}
}
export class DeleteTaskArch implements Action {
    type = ArchActionType.deleteTask;
    constructor(public payload: { id: string }) {}
}

export type ArchActions = AddTaskArch | UpdateTaskArch | DeleteTaskArch;
