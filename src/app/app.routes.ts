import { Routes } from '@angular/router';

export const routes: Routes = [
  { path:'', loadComponent: () => import('./core/layout/layout.component').then(c => c.LayoutComponent),
    children: [
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path:'home', loadComponent: () => import('./features/pages/home/home.component').then(c => c.HomeComponent) },
      { path:'about', loadComponent: () => import('./features/pages/about/about.component').then(c => c.AboutComponent) }


    ]
  },
  {path:'auth', loadComponent: () => import('./core/auth/auth.component').then(c => c.AuthComponent), children: [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent: () => import('./core/auth/components/login/login.component').then(c => c.LoginComponent)},
    {path:'register', loadComponent: () => import('./core/auth/components/register/register.component').then(c => c.RegisterComponent)},
    {path:'register/question-one', loadComponent: () => import('./core/auth/components/register/gender/gender.component').then(c => c.GenderComponent)},
    {path:'register/question-two', loadComponent: () => import('./core/auth/components/register/Old/Old.component').then(c => c.OldComponent)},
    {path:'register/question-three', loadComponent: () => import('./core/auth/components/register/weight/weight.component').then(c => c.WeightComponent)},
    {path:'register/question-four', loadComponent: () => import('./core/auth/components/register/height/height.component').then(c => c.HeightComponent)},
    {path:'register/question-five', loadComponent: () => import('./core/auth/components/register/Goal/Goal.component').then(c => c.GoalComponent)},
    {path:'register/question-six', loadComponent: () => import('./core/auth/components/register/activityLevel/activityLevel.component').then(c => c.ActivityLevelComponent)},
    {path:'forget-password', loadComponent: () => import('./core/auth/components/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent)},

  ]},
  {
        path: '**',
        loadComponent: () => import('./shared/components/not-found/not-found.component').then(c => c.NotFoundComponent)
      }
];
