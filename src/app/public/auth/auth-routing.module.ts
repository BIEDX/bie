import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren:()=>import('./sign-in/sign-in.module').then((m)=>m.SignInModule)       
      },
      {
        path: 'sign-up',
        loadChildren:()=>import('./sign-up/sign-up.module').then((m)=>m.SignUpModule)       
      },
      {
        path: 'forgot-password',
        loadChildren:()=>import('./forgot-password/forgot-password.module').then((m)=>m.ForgotPasswordModule)    
      }
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
