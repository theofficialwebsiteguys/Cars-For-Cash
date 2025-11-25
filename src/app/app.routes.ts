import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)},
    {path: 'about', loadComponent: () => import('./components/about-page/about-page.component').then(m => m.AboutPageComponent)},
    {path: 'buy-sell', loadComponent: () => import('./components/how-it-works-page/how-it-works-page.component').then(m => m.HowItWorksPageComponent)},
    {path: 'gallery', loadComponent: () => import('./components/gallery-page/gallery-page.component').then(m => m.GalleryPageComponent)},
    {path: 'lease', loadComponent: () => import('./components/lease-page/lease-page.component').then(m => m.LeasePageComponent)},
];
