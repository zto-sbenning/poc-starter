import { HeaderState, initialHeaderState, HeaderStyle } from "./header.state";
import { HeaderActions, HeaderActionType, ChangeLinksHeader, ChangeTitleHeader } from "./header.actions";

export function headerStateReducer(state: HeaderState = initialHeaderState, action: HeaderActions): HeaderState {
    switch (action.type) {
        case HeaderActionType.simple: {
            return { ...state, style: HeaderStyle.simple };
        }
        case HeaderActionType.changeTitle: {
            const changeTitle = action as ChangeTitleHeader;
            return { ...state, title: changeTitle.payload.title };
        }
        case HeaderActionType.changeLinks: {
            const changeLinks = action as ChangeLinksHeader;
            return { ...state, links: changeLinks.payload.links };
        }
        default:
            return state;
    }
}