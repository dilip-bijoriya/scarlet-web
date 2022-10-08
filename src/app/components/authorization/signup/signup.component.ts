import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  options = {
    types: []
  };
  @ViewChild("placesRef") placesRef! : GooglePlaceDirective;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router,
     private toast: ToastrService) { }
  lat: any;
  lng: any;
  public handleAddressChange(address: Address) {
    // address.formatted_address,
    // console.log(address, "Hello");
    let location: any = address.geometry.location.toJSON();
    this.lat = location.lat;
    this.lng = location.lng;
    console.log(this.lat);
}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      type: ['2', [Validators.required]],
      name: ['', [Validators.required]],
      user_phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country_code: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      busi_address: ['', [Validators.required]]
  });
  }

  get f() { return this.signupForm.controls; }

  async signUp(){
    this.submitted = true;
    // if (this.signupForm.invalid) {
    //     return;
    // }
    try {
      let map: any = {...this.signupForm.value, busi_lat: this.lat, busi_lng: this.lng }
      let data = await this.api.post("users/register",map);
      if(data.status == 1){
        this.toast.success(data.message);
        this.router.navigate(['/auth/login']);
      }else{
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
