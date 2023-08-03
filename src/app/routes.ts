import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/pages/home/home.component').then(component => component.HomeComponent)
    }
];