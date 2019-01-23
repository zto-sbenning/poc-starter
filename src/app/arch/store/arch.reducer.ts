import { ArchState, initialArchState, tasksStateAdapter } from "./arch.state";
import { ArchActions, ArchActionType, AddTaskArch, UpdateTaskArch, DeleteTaskArch } from "./arch.actions";

export function archStateReducer(state: ArchState = initialArchState, action: ArchActions): ArchState {
    switch (action.type) {
        case ArchActionType.addTask: {
            const addTask = action as AddTaskArch;
            return { ...state, tasks: tasksStateAdapter.addOne(addTask.payload.task, state.tasks) };
        }
        case ArchActionType.updateTask: {
            const updateTask = action as UpdateTaskArch;
            return { ...state, tasks: tasksStateAdapter.updateOne(updateTask.payload.update, state.tasks) };
        }
        case ArchActionType.deleteTask: {
            const deleteTask = action as DeleteTaskArch;
            return { ...state, tasks: tasksStateAdapter.removeOne(deleteTask.payload.id, state.tasks) };
        }
        default:
            return state;
    }
}