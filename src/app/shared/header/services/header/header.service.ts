import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HeaderState, selectHeaderState, HeaderStyle, selectHeaderStateStyle, Link, selectHeaderStateLinks, selectHeaderStateTitle } from '../../store/header.state';
import { SimpleHeader } from '../../store/header.actions';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  header$: Observable<HeaderState> = this.store.pipe(select(selectHeaderState));
  headerStyle$: Observable<HeaderStyle> = this.store.pipe(select(selectHeaderStateStyle));
  title$: Observable<string> = this.store.pipe(select(selectHeaderStateTitle));
  links$: Observable<Link[]> = this.store.pipe(select(selectHeaderStateLinks));

  constructor(private store: Store<any>) { }

  simpleStyle() {
    const simpleHeader = new SimpleHeader;
    this.store.dispatch(simpleHeader);
  }
}
