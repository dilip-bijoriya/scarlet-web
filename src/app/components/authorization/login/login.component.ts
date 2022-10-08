import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  user!: any;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,
    private cookieService: CookieService, private toast: ToastrService, private authService: SocialAuthService, 
    private dataShareService : DataShareService) { }

  ngOnInit(): void {
    this.cookieService.delete('scarlet_website');
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    });


    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
  }

  get f() { return this.signInForm.controls; }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res =>
       console.log(res));
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(res =>
       console.log(res, "Hello")
       );
  }
  async signIn() {
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    try {
      let map: any = { ...this.signInForm.value }
      let data = await this.api.post("users/login", map);
      console.log(data);
      if (data.status == 1) {
        this.toast.success(data.message);
        this.cookieService.set(
          'scarlet_website',
          JSON.stringify(data.data.login)
        );
        this.dataShareService.changeMessage('CHECK_LOGIN')
        this.router.navigate(['/home/admin/dashboard']);
      } else {
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

}
