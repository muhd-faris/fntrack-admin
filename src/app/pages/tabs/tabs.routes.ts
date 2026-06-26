import { Route } from '@angular/router';

export const TABS_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./tabs.page').then((c) => c.TabsPage),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard/dashboard.page').then((m) => m.DashboardPage),
      },
      {
        path: 'users',
        loadComponent: () =>
          import('../users/users.page').then((m) => m.UsersPage),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
