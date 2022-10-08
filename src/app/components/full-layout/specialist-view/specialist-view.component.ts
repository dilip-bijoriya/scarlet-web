import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';
import { HaircutAndStylingComponent } from '../../modal/haircut-and-styling/haircut-and-styling.component';

@Component({
  selector: 'app-specialist-view',
  templateUrl: './specialist-view.component.html',
  styleUrls: ['./specialist-view.component.scss']
})
export class SpecialistViewComponent implements OnInit {
  scarletData;
  saloonDetail: any;
  constructor(private modal: NgbModal, private api: ApiService, private cookie: CookieService){
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
  }
 async ngOnInit() {
  await this.getSaloonDetail();
  }
async openHairPopup(){
  this.modal.open(HaircutAndStylingComponent, { size: 'lg' })
}
aminities: any;
async getSaloonDetail(){
  try {
    let data = await this.api.post("users/saloon_detail",{
      "user_id": this.scarletData.user_id
    });
    if(data.status == 1){
      console.log(data, "Hello");
      this.saloonDetail = data.data.saloon_detail;
      this.aminities = this.saloonDetail.aminities
    }else{

    }
  } catch (error) {
    console.error(error);
  }
}
}
