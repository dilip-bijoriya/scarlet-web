import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent, LoginComponent, OtpComponent, SignupComponent } from 'src/app/components/authorization/authorization';
import { ResetPasswordComponent } from 'src/app/components/authorization/reset-password/reset-password.component';
import { AuthorizationComponent } from './authorization.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    // canActivate:[LoggedInUserService],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'otp',
        component: OtpComponent
      },
      {
        path: 'forget-password',
        component: ForgetPasswordComponent
      },
         {
        path: 'reset-password',
        component: ResetPasswordComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
