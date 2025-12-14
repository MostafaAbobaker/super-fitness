import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', loadComponent: () => import('./core/layout/layout.component').then(c => c.LayoutComponent),
    children: [
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path:'home', loadComponent: () => import('./features/pages/home/home.component').then(c => c.HomeComponent) },
      { path:'about', loadComponent: () => import('./features/pages/about/about.component').then(c => c.AboutComponent) },

      {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found.component').then(c => c.NotFoundComponent)
      }
    ]
  }
];
