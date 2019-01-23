import { createSelector } from "@ngrx/store";

export const layoutStateSelector = 'layout';

export enum LayoutStyle {
    simple = '[Layout Style] Simple',
}

export interface LayoutState {
    style: LayoutStyle;
}

export const initialLayoutState: LayoutState = {
    style: LayoutStyle.simple
};

export const selectLayoutState = (state: any) => state[layoutStateSelector] as LayoutState;
export const selectLayoutStateStyle = createSelector(selectLayoutState, (layout: LayoutState) => layout.style);
