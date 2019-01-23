import { Action } from '@ngrx/store';

export enum LayoutActionType {
    simple = '[Layout Action Type] Simple',
}

export class SimpleLayout implements Action {
    type = LayoutActionType.simple;
}

export type LayoutActions = SimpleLayout;
