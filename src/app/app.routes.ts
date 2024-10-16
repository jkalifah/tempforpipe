// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path         : 'auth',
    loadChildren : () => import('./pages/auth/auth.routes').then(m => m.routes),
  },
  {
    path          : 'home',
    loadComponent : () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  { path : '', redirectTo : '/auth/login', pathMatch : 'full' },
  {
    path          : 'dashboard',
    loadComponent : () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path         : 'roles',
    loadChildren : () => import('./pages/roles/roles.routes').then(m => m.routes),
  },
  {
    path         : 'management',
    loadChildren : () => import('./pages/management/management.routes').then(m => m.routes),
  },
  {
    path          : '**',
    loadComponent : () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
  },
];