import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Observable } from 'rxjs';

export enum TaskStateState {
    idle = '[Task State State] Idle',
    pending = '[Task State State] Pending',
    paused = '[Task State State] Paused',
    resolved = '[Task State State] Resolved',
    errored = '[Task State State] Errored',
    canceled = '[Task State State] Canceled',
}

export interface Context {
    [key: string]: any;
}
export interface GlobalContext {
    initial?: Context;
    final?: Context;
    [type: string]: { [id: string]: Context };
}

export interface Task {
    type: string;
    id: string;
    contextFactory: (context: GlobalContext) => Context,
    execute: (context: Context) => Observable<Context>,
}

export interface TaskState {
    type: string;
    id: string;
    state: TaskStateState;
    task: Task;
}

export interface ArchState {
    tasks: EntityState<TaskState>;
}

export const tasksStateAdapter = createEntityAdapter<TaskState>({ sortComparer: false });

export const initialArchState: ArchState = {
    tasks: tasksStateAdapter.getInitialState(),
};
