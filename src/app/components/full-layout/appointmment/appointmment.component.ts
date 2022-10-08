import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-appointmment',
  templateUrl: './appointmment.component.html',
  styleUrls: ['./appointmment.component.scss']
})
export class AppointmmentComponent implements OnInit {
  public scarletData: any;
  send_date=new Date();
  formattedDate : any;
  appointmentList: Array<any> = [];
  constructor(private api: ApiService, private cookie: CookieService) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
    this.send_date.setMonth(this.send_date.getMonth());
     this.formattedDate=this.send_date.toISOString().slice(0,10);
    console.log(this.formattedDate);
   }

  ngOnInit(): void {
    this.getAppointment();
  }

 async getAppointment(){
    try {
      let data = await this.api.post('appointment/dashboard',{
        "busi_id": this.scarletData.user_id,
        "todays_date": this.formattedDate,
        "page_no" : "0"
      });
      if(data.status == 1){
        this.appointmentList = data.data.newdashboard
      }
    } catch (error) {
      console.error(error);
    }
  }

}
