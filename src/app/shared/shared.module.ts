import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from './header/header.module';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    LayoutModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [],
  exports: [
    HeaderModule,
    LayoutModule,
    MaterialModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
