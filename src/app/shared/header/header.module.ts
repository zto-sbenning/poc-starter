import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { SimpleHeaderPresenterComponent } from './header-container/simple-header-presenter/simple-header-presenter.component';
import { HeaderService } from './services/header/header.service';
import { StoreModule } from '@ngrx/store';
import { headerStateSelector } from './store/header.state';
import { headerStateReducer } from './store/header.reducer';
import { MaterialModule } from '../material/material.module';
import { RoutingModule } from '../routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RoutingModule,
    StoreModule.forFeature(headerStateSelector, headerStateReducer),
  ],
  declarations: [HeaderContainerComponent, SimpleHeaderPresenterComponent],
  providers: [
    HeaderService
  ],
  exports: [
    HeaderContainerComponent
  ]
})
export class HeaderModule { }
