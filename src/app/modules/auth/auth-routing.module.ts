import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [

  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'sign-up', 
        component:  SignUpComponent},
      {
        path: 'sign-in',
        component: SignInComponent,        
      },
      {
        path: 'sign-in/:id',
        component: SignInComponent,        
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,        
      }
    ],
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
