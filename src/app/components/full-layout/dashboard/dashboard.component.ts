import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  scarletData;
  send_date=new Date();
  formattedDate : any;
  constructor(private cookie: CookieService, private api: ApiService) { 
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
    this.send_date.setMonth(this.send_date.getMonth());
     this.formattedDate=this.send_date.toISOString().slice(0,10);
    console.log(this.formattedDate);
  }

  ngOnInit(): void {
    this.getSaloonDashboard();
  }

  async getSaloonDashboard(){
    try {
      let data = await this.api.post("users/saloon_dashboard",{
        "page_no" : 0,
        "current_date": this.formattedDate
      });
    } catch (error) {
      console.error(error);
    }
  }

}
