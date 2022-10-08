import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { MustMatch } from 'src/app/services/helper.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService, 
    private toast: ToastrService) { }

  get f() { return this.ChangePasswordForm.controls; }

  ngOnInit(): void {
    this.ChangePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      new_password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
    }, {
      validators: MustMatch('password', 'confirmpassword')
    })
  }

 async changePassword(){
  this.submitted = true;
  if (this.ChangePasswordForm.value.password.trim() === '' && this.ChangePasswordForm.value.confirmpassword.trim() === '') {
    return
  }
  if(this.ChangePasswordForm.invalid){
    return;
  }
  let map: any = {...this.ChangePasswordForm.value};
  delete map['confirmpassword'];
  try {
    let data = await this.api.post("users/changepassword", map);
    if(data.status == 1){
      this.toast.success(data.message);
    }else{
      this.toast.error(data.message);
    }
  } catch (error) {
    console.error(error);
  }
  }
}
