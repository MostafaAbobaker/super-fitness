import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./features/pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/pages/about/about.component').then(
            (c) => c.AboutComponent
          ),
      },
      {
        path: 'classes',
        loadComponent: () =>
          import('./features/pages/classes/classes.component').then(
            (c) => c.ClassesComponent
          ),
        title: 'Classes Page',
      },
      {
        path: 'musclesDetails/:id',
        loadComponent: () =>
          import(
            './features/pages/classes/components/muscles-details/muscles-details.component'
          ).then((c) => c.MusclesDetailsComponent),
        title: 'Details',
      },
      {
        path: 'healthy',
        loadComponent: () =>
          import('./features/pages/healthy/healthy.component').then(
            (c) => c.HealthyComponent
          ),
        title: 'Healthy Page',
      },
      {
        path: 'account',
        loadComponent: () =>
          import('./features/pages/acc/acc.component').then(
            (c) => c.ACCComponent
          ),
        title: 'Account Page',
      },
      {
        path: 'mealsDetails/:id',
        loadComponent: () =>
          import(
            './features/pages/healthy/components/meals-details/meals-details.component'
          ).then((c) => c.MealsDetailsComponent),
        title: 'Meals Details',
      },
      {
        path: '**',
        loadComponent: () =>
          import('./shared/components/not-found/not-found.component').then(
            (c) => c.NotFoundComponent
          ),
      },
    ],
  },
];
