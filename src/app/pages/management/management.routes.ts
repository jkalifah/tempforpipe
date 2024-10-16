// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path     : '',
    data: { breadcrumb: 'Management' },
    children : [     
      {
        path          : 'users',
        loadComponent : () => import('./user/list/list.component').then(m => m.ListComponent),
        data: { breadcrumb: 'Users' },
      },
      
    ]
  }
];