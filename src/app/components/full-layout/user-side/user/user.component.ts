import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ScheduleAppointmentComponent } from 'src/app/components/modal/schedule-appointment/schedule-appointment.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private modal:NgbModal, private api: ApiService) { }

 async ngOnInit() {
  }
  appointementSchedulePopup(){
    this.modal.open(ScheduleAppointmentComponent, { size: 'lg',centered:true })
  }

  async getUsers(){
    try {
      let data = await this.api.post("",{

      });
    } catch (error) {
      console.error(error);
    }
  }
}
