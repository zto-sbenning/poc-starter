import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { SimpleLayoutPresenterComponent } from './layout-container/simple-layout-presenter/simple-layout-presenter.component';
import { LayoutService } from './services/layout/layout.service';
import { StoreModule } from '@ngrx/store';
import { layoutStateSelector } from './store/layout.state';
import { layoutStateReducer } from './store/layout.reducer';
import { HeaderModule } from '../header/header.module';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    RoutingModule,
    StoreModule.forFeature(layoutStateSelector, layoutStateReducer),
  ],
  declarations: [LayoutContainerComponent, SimpleLayoutPresenterComponent],
  providers: [
    LayoutService
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
