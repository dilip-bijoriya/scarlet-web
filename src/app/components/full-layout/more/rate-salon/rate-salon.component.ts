import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-rate-salon',
  templateUrl: './rate-salon.component.html',
  styleUrls: ['./rate-salon.component.scss']
})
export class RateSalonComponent implements OnInit {
  scarletData;
  ratingForm!: FormGroup;
  submitted = false;

  constructor(private api: ApiService, private cookie: CookieService,
    private toast: ToastrService, private formBuilder: FormBuilder, private router: Router) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
    console.log(this.scarletData);
  }
  get f() { return this.ratingForm.controls; }
  async ngOnInit() {
    this.ratingForm = this.formBuilder.group({
      stars: ['', [Validators.required]],
      review: ['', [Validators.required]]
    })
  }

  async reviewAdd() {
    // this.submitted = true;
    // if (this.ratingForm.invalid) {
    //     return;
    // }
    try {
      let map: any = { ...this.ratingForm.value, user_id: this.scarletData.user_id }
      let data = await this.api.post("saloon/rating_add", map);
      if (data.status == 1) {
        this.toast.success(data.message);
        this.router.navigate(['/home/admin/more/review-rating']);
      } else {
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

}
