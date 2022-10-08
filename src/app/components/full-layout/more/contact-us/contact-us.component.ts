import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactUsForm!: FormGroup;
  submitted = false;
  scarletData;
  saloonDetail: any;

  constructor(private api: ApiService, private formBuilder: FormBuilder,
    private toast: ToastrService, private cookie: CookieService) {
      this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
     }

  get f() { return this.contactUsForm.controls; }
   ngOnInit() {
     this.getSaloonDetail();
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      phone_no: ['', [Validators.required]],
      country_code: ['', [Validators.required]]
    });
  }

  async getSaloonDetail(){
    try {
      let data = await this.api.post("users/saloon_detail",{
        "user_id": this.scarletData.user_id
      });
      if(data.status == 1){
        this.saloonDetail = data.data.saloon_detail;
        this.contactUsForm.get('name')?.setValue(this.saloonDetail.firstname);
        this.contactUsForm.get('email')?.setValue(this.saloonDetail.user_email);
        this.contactUsForm.get('phone_no')?.setValue(this.saloonDetail.user_phone);
        this.contactUsForm.get('country_code')?.setValue(this.saloonDetail.country_code);
      }else{

      }
    } catch (error) {
      console.error(error);
    }
  }

  async contactUs() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    }
    try {
      let map: any = { ...this.contactUsForm.value}
      let data = await this.api.post("users/send_contact", map);
      if (data.status == 1) {
        this.toast.success(data.message);
      } else {
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
