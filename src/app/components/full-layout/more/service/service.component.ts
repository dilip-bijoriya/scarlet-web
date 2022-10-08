import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AddServiceHeaderComponent } from 'src/app/components/modal/add-service-header/add-service-header.component';
import { AddServiceComponent } from 'src/app/components/modal/add-service/add-service.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  scarletData;
  serviceData: any;
  constructor(public modal :NgbModal, private api: ApiService, private cookie: CookieService) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
   }

  async ngOnInit() {
    await this.getService();
  }
  async addServicePopup(){
    this.modal.open(AddServiceComponent,{size :'lg',centered:true})
  }
  async addHeaderServicePopup(){
    this.modal.open(AddServiceHeaderComponent,{size :'sm',centered:true})
  }

  async getService() {
    try {
      let data = await this.api.post("saloon/service_get", {
        "page_no": 0,
        "user_id": this.scarletData.user_id
      });
      if (data.status == 1) {
        this.serviceData = data.data.service_get.service
      }
    } catch (error) {
      console.error(error);
    }
  }
}
