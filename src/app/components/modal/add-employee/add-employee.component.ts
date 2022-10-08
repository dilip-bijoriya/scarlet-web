import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup;
  submitted = false;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private toastr: ToastrService, 
     private api: ApiService) { }
  get f() { return this.addEmployeeForm.controls; }
  ngOnInit(): void {
    this.addEmployeeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      specialist: ['', [Validators.required]],
      emp_img: ['']
    })
  }

 async submit(){
    this.submitted = true;
    if(this.addEmployeeForm.invalid){
      return;
    }
    try {
      const formData = new FormData()
      formData.append('name', this.addEmployeeForm.value.name);
      formData.append('specialist', this.addEmployeeForm.value.specialist);
      formData.append('emp_img', this.url);
      let data = await this.api.post('employees/employee_add', formData);
      if(data.status == 1){
        this.toastr.success(data.message);
        this.closeModal();
      }else{
        this.toastr.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  url: any;
  format: any;
  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  closeModal(){
    this.activeModal.dismiss();
  }
}
