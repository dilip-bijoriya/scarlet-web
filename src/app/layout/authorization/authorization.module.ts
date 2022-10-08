import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ForgetPasswordComponent, LoginComponent, OtpComponent, SignupComponent } from 'src/app/components/authorization/authorization';
import { ResetPasswordComponent } from 'src/app/components/authorization/reset-password/reset-password.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';



@NgModule({
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SocialLoginModule,
    AuthorizationRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            // google -id = 331912967928-if2s01frqjus8qqgd2g46mk7iit6nn8o.apps.googleusercontent.com
            provider: new GoogleLoginProvider(
              '331912967928-if2s01frqjus8qqgd2g46mk7iit6nn8o.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            // facebook-id =  818868975268074
            provider: new FacebookLoginProvider('818868975268074')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AuthorizationModule { }
