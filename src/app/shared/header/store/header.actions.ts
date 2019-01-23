import { Action } from '@ngrx/store';
import { Link } from './header.state';

export enum HeaderActionType {
    simple = '[Header Action Type] Simple',
    changeTitle = '[Header Action Type] Change Title',
    changeLinks = '[Header Action Type] Change Links'
}

export class SimpleHeader implements Action {
    type = HeaderActionType.simple;
}

export class ChangeTitleHeader implements Action {
    type = HeaderActionType.changeTitle;
    constructor(public payload: { title: string }) {}
}

export class ChangeLinksHeader implements Action {
    type = HeaderActionType.changeLinks;
    constructor(public payload: { links: Link[] }) {}
}

export type HeaderActions = SimpleHeader | ChangeTitleHeader | ChangeLinksHeader;
