import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domains/home/pages/list/list.component').then(m=>m.ListComponent)
  },
];
