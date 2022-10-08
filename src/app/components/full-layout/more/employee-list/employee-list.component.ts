import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AddEmployeeComponent } from 'src/app/components/modal/add-employee/add-employee.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employee_list: Array<any> = [];
  user;
  constructor(private api: ApiService, private cookieService: CookieService, public modal :NgbModal) { 
    this.user = JSON.parse(this.cookieService.get('scarlet_website'))
  }

  ngOnInit(): void {
    this.getEmployee();
  }
  async addEmployeePopup(){
    this.modal.open(AddEmployeeComponent,{size :'lg',centered:true})
  }
async  getEmployee(){
    try {
      let data = await this.api.post('employees/employee_list',{
        "user_id" : this.user.user_id,
        "page_no": 0
      });
      if(data.status == 1){
        this.employee_list = data.data.employee_list.employee_list
      }
    } catch (error) {
      console.error(error);
    }
  }

}
