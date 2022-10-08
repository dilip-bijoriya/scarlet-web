import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
resetPasswordForm!: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      Confirmpassword: ['', [Validators.required]]
  });
  }
  get f() { return this.resetPasswordForm.controls; }

  async resetPassword(){
    this.submitted = true;
    if(this.resetPasswordForm.invalid){
      return;
    }
    try {
      let map: any = {...this.resetPasswordForm.value}
      console.log(map);
      let data = await this.api.post("",map);
        this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

}
