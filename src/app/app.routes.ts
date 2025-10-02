import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'about', loadComponent: () => import('./components/about-page/about-page.component').then(m => m.AboutPageComponent)},
    {path: 'how-it-works', loadComponent: () => import('./components/how-it-works-page/how-it-works-page.component').then(m => m.HowItWorksPageComponent)},
];
