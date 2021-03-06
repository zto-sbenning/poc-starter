import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';
import { RootStoreModule } from './root-store/root-store.module';
import { ArchModule } from './arch/arch.module';
import { StorageService } from './services/storage/storage.service';
import { DialogService } from './services/dialog/dialog.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AboutModule,
    NotFoundModule,
    RootStoreModule,
    ArchModule
  ],
  providers: [
    StorageService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
