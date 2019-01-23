import { createSelector } from "@ngrx/store";

export const headerStateSelector = 'header';

export interface Link {
  name: string;
  path: string;
  icon: string;
}

export enum HeaderStyle {
    simple = '[Header Style] Simple',
}

export interface HeaderState {
    style: HeaderStyle;
    links: Link[];
    title: string;
}

export const initialHeaderState: HeaderState = {
    title: 'ARCH',
    style: HeaderStyle.simple,
    links: [
        { name: 'HOME', path: '/home', icon: 'home' },
        { name: 'ABOUT', path: '/about', icon: 'info' },
    ]
};

export const selectHeaderState = (state: any) => state[headerStateSelector] as HeaderState;
export const selectHeaderStateStyle = createSelector(selectHeaderState, (header: HeaderState) => header.style);
export const selectHeaderStateTitle = createSelector(selectHeaderState, (header: HeaderState) => header.title);
export const selectHeaderStateLinks = createSelector(selectHeaderState, (header: HeaderState) => header.links);
