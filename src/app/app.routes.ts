import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';

export const routes: Routes = [
  {path:'', loadComponent: () => import('./core/layout/layout.component').then
    (c => c.LayoutComponent), children: [
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component: HomeComponent}
    ]
  },
  {path:'auth', loadComponent: () => import('./core/auth/auth.component').then(c => c.AuthComponent), children: [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent: () => import('./core/auth/components/login/login.component').then(c => c.LoginComponent)},
    {path:'register', loadComponent: () => import('./core/auth/components/register/register.component').then(c => c.RegisterComponent)},
    {path:'register/question-one', loadComponent: () => import('./core/auth/components/register/question-one/question-one.component').then(c => c.QuestionOneComponent)},
    {path:'register/question-two', loadComponent: () => import('./core/auth/components/register/question-two/question-two.component').then(c => c.QuestionTwoComponent)},
    {path:'register/question-three', loadComponent: () => import('./core/auth/components/register/question-three/question-three.component').then(c => c.QuestionThreeComponent)},
    {path:'register/question-four', loadComponent: () => import('./core/auth/components/register/question-four/question-four.component').then(c => c.QuestionFourComponent)},
    {path:'register/question-five', loadComponent: () => import('./core/auth/components/register/question-five/question-five.component').then(c => c.QuestionFiveComponent)},
    {path:'register/question-six', loadComponent: () => import('./core/auth/components/register/question-six/question-six.component').then(c => c.QuestionSixComponent)},
    {path:'forget-password', loadComponent: () => import('./core/auth/components/forget-password/forget-password.component').then(c => c.ForgetPasswordComponent)}
  ]}
];
