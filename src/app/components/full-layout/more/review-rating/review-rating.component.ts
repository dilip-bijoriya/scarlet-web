import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-review-rating',
  templateUrl: './review-rating.component.html',
  styleUrls: ['./review-rating.component.scss']
})
export class ReviewRatingComponent implements OnInit {
  scarletData;
  reviewData: any;
  myJson: Array<any> = [];
  constructor(private api: ApiService, private cookie: CookieService, private router: Router) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
  }

  async ngOnInit() {
    await this.reviewAndRatings()
  }

  async reviewAndRatings() {
    try {
      let data = await this.api.post("saloon/review_get", {
        "user_id": this.scarletData.user_id,
        "page_no": 0
      });
      if (data.status == 1) {
        this.reviewData = data.data.review_get
        this.myJson = this.reviewData.reviews;
      }
    } catch (error) {
      console.error(error);
    }
  }

  rateSaloon() {
    this.router.navigate(['/home/admin/rate-salon']);
  }
}
