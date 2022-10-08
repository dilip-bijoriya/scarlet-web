import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  serviceForm!: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private api: ApiService, private toast: ToastrService,
    private formBuilder: FormBuilder) { }


  async ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      service_name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      times: ['', [Validators.required]],
      category: ['USD']
    })
  }
  get f() { return this.serviceForm.controls; }
  async addservice() {
    this.submitted = true;
    if(this.serviceForm.invalid){
      return;
    }
    try {
      let map: any = { ...this.serviceForm.value }
      let data = await this.api.post("saloon/service_add", map);
      if (data.status == 1) {
        this.toast.success(data.message);
        this.closeModal();
      } else {
        this.toast.error(data.message);
        this.closeModal();
      }
    } catch (error) {
      console.error(error);
    }
  }

  closeModal(){
    this.activeModal.dismiss();
  }
}
