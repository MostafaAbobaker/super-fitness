import { Routes } from '@angular/router';
import { ClassesComponent } from './features/pages/classes/classes.component';
import { HealthyComponent } from './features/pages/healthy/healthy.component';
import { ACCComponent } from './features/pages/acc/acc.component';
import { MusclesDetailsComponent } from './features/pages/classes/components/muscles-details/muscles-details.component';
import { MealsDetailsComponent } from './features/pages/healthy/components/meals-details/meals-details.component';

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
        component: ClassesComponent,
        title: 'Classes Page',
      },
      {
        path: 'musclesDetails/:id',
        component: MusclesDetailsComponent,
        title: 'Details',
      },
      { path: 'healthy', component: HealthyComponent, title: 'Healthy Page' },
      { path: 'account', component: ACCComponent, title: 'Account Page' },
      {
        path: 'mealsDetails/:id',
        component: MealsDetailsComponent,
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
