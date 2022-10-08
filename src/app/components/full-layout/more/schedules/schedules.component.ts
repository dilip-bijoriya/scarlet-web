import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SelectServicesComponent } from 'src/app/components/modal/select-services/select-services.component';
import { SelectSpecialistsComponent } from 'src/app/components/modal/select-specialists/select-specialists.component';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  serviceName: any;
  seletcServiceForm!: FormGroup;
  constructor(private modal :NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.seletcServiceForm = this.formBuilder.group({
      name: ['']
    })
  }
  async openSelectServicepopup(){
    const modalRef = this.modal.open(SelectServicesComponent, { size: 'lg',centered:true });
    modalRef.componentInstance.emitService.subscribe((emmitValue: any) => {
      console.log(emmitValue);
      this.seletcServiceForm.get('name')?.setValue(emmitValue.service_name);
    })
  }
  async openSpecilistPopup(){
    this.modal.open(SelectSpecialistsComponent),{size : 'md' ,centered:true}
  }
}
