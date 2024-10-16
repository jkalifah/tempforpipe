// Angular modules
import { Routes } from '@angular/router';

export const routes : Routes = [
  {
    path     : '',
    data: { breadcrumb: 'Roles' },
    children : [     
      {
        path          : 'zain-cash-role',
        loadComponent : () => import('./zain-cash-role/list/list.component').then(m => m.ListComponent),
        data: { breadcrumb: 'Zain Cash Role' },
      },
      
    ]
  }
];