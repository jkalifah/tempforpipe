// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path     : '',
    children : [
      {
        path       : '',
        redirectTo : 'login',
        pathMatch  : 'full',
      },
      {
        path          : 'login',
        loadComponent : () => import('./login/login.component').then(m => m.LoginComponent),
      },
      {
        path          : 'forgot-password',
        loadComponent : () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
      },
      {
        path          : 'change-password',
        loadComponent : () => import('./change-password/change-password.component').then(m => m.ChangePasswordComponent),
      },
      {
        path          : 'otp-verification',
        loadComponent : () => import('./verification/verification.component').then(m => m.VerificationComponent),
      }
    ]
  }
];