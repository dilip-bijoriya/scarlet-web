import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-select-services',
  templateUrl: './select-services.component.html',
  styleUrls: ['./select-services.component.scss']
})
export class SelectServicesComponent implements OnInit {
  scarletData;
  serviceData: Array<any> = [];
  @Output() emitService = new EventEmitter();
  constructor(public activeModal: NgbActiveModal, private api: ApiService, private cookie: CookieService) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
   }

 async ngOnInit() {
  await  this.getService();
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

  selectService(item: any){
    if(item){
      this.emitService.next(item);
      this.activeModal.dismiss();
    }else{
      this.activeModal.dismiss();
    }
  }

}
