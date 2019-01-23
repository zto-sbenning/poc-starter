import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutState, selectLayoutState, selectLayoutStateStyle, LayoutStyle } from '../../store/layout.state';
import { select, Store } from '@ngrx/store';
import { SimpleLayout } from '../../store/layout.actions';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout$: Observable<LayoutState> = this.store.pipe(select(selectLayoutState));
  layoutStyle$: Observable<LayoutStyle> = this.store.pipe(select(selectLayoutStateStyle));

  constructor(private store: Store<any>) { }

  simpleStyle() {
    const simpleLayout = new SimpleLayout;
    this.store.dispatch(simpleLayout);
  }
}
