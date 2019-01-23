import { LayoutState, initialLayoutState, LayoutStyle } from "./layout.state";
import { LayoutActions, LayoutActionType } from "./layout.actions";

export function layoutStateReducer(state: LayoutState = initialLayoutState, action: LayoutActions): LayoutState {
    switch (action.type) {
        case LayoutActionType.simple:
            return { ...state, style: LayoutStyle.simple };
        default:
            return state;
    }
}