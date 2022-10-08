import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
otpForm!: FormGroup;
submitted = false;
constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required]],
  });
  }
  get f() { return this.otpForm.controls; }

  async otpVerify(){
    this.submitted = true;
    if(this.otpForm.invalid){
      return;
    }
    try {
      let map: any = {...this.otpForm.value}
      console.log(map);
      let data = await this.api.post("",map);
        this.router.navigate(['/reset-password']);
    } catch (error) {
      console.error(error);
    }
  }
}
