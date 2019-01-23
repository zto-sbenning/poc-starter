import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AboutPageComponent } from './about/about-page/about-page.component';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundPageComponent }
];