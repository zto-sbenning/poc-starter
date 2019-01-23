import { Injectable } from '@angular/core';
import { Task, TaskState, TaskStateState } from '../../store/arch.state';
import { Store } from '@ngrx/store';
import { AddTaskArch, UpdateTaskArch, DeleteTaskArch } from '../../store/arch.actions';

@Injectable({
  providedIn: 'root'
})
export class ArchService {

  constructor(private store: Store<any>) { }

  /**
   * Add a TaskState to the store
   * @param task the task to base the TaskSate to add
   */
  create(task: Task) {
    const taskState = {
      id: task.id,
      type: task.type,
      state: TaskStateState.idle,
      task: task
    };
    const addTask = new AddTaskArch({ task: taskState });
    this.store.dispatch(addTask);
  }

  update(id: string, changes: Partial<TaskState>) {
    const updateTask = new UpdateTaskArch({ update: { id, changes } });
    this.store.dispatch(updateTask);
  }

  delete(id: string) {
    const deleteTask = new DeleteTaskArch({ id });
    this.store.dispatch(deleteTask);
  }

}
