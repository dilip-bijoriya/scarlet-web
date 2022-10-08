import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  async forgotPassword() {
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    try {
      let map: any = { ...this.forgotPasswordForm.value }
      let data = await this.api.post("users/forgotpassword", map);
      if (data.status == 1) {
        this.toast.success(data.message);
        // this.router.navigate(['/auth/otp']);
      } else {
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
