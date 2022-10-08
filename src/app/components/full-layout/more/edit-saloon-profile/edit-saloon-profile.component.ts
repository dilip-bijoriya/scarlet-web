import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ToastrService } from 'ngx-toastr';
import { AddServiceComponent } from 'src/app/components/modal/add-service/add-service.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-saloon-profile',
  templateUrl: './edit-saloon-profile.component.html',
  styleUrls: ['./edit-saloon-profile.component.scss']
})
export class EditSaloonProfileComponent implements OnInit {
  editProfileForm!: FormGroup;
  scarletData;
  model: any = {};
  serviceData: any;
  videoData: any;
  Aminities: any;
  saloon_detail: any;
  data: any;
  public myProfileData: any;
  options = {
    types: []
  };
  lat: any;
  lng: any;
  public handleAddressChange(address: Address) {
    let location: any = address.geometry.location.toJSON();
    this.lat = location.lat;
    this.lng = location.lng;
  }
  @ViewChild("placesRef") placesRef!: GooglePlaceDirective;
  constructor(private api: ApiService, private cookie: CookieService, private formBuilder: FormBuilder,
    private toast: ToastrService, public modal :NgbModal,) {
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
  }

  async ngOnInit() {
    await this.getSaloonDetail();
    await this.getProfile();
    await this.getService();
    await this.getVideos();
    await this.getAminitys();
  }

  async addServicePopup(){
    this.modal.open(AddServiceComponent,{size :'lg',centered:true})
  }

  async getProfile() {
    try {
      let data = await this.api.get(`users/get_profile/${this.scarletData.user_id}`);
      if (data.status == 1) {
        this.myProfileData = data.data.profile;
        this.model.firstname = this.myProfileData.firstname;
        this.model.company_name = this.myProfileData.company_name;
        this.model.user_phone = this.myProfileData.user_phone;
        this.model.user_email = this.myProfileData.user_email;
        this.model.state = this.myProfileData.state;
        this.model.city = this.myProfileData.city;
        this.model.country_code = this.myProfileData.country_code;
        this.model.pincode = this.myProfileData.pincode;
        this.model.busi_address = this.myProfileData.busi_address;
        this.model.busi_description = this.myProfileData.busi_description;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async saloonProfileUpdate() {
    try {
      this.model.busi_lat = this.myProfileData.busi_lat;
      this.model.busi_lng = this.myProfileData.busi_lng;
      this.model.type = 2;
      let data = await this.api.post("users/profile_update", this.model);
      if (data.status == 1) {
        this.toast.success(data.message);
        this.getProfile();
      } else {
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
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

  async getVideos() {
    try {
      let data = await this.api.post("saloon/assets_get", {
        "page_no": 0,
        "type": "Video",
        "user_id": this.scarletData.user_id
      });
      if (data.status == 1) {
        this.videoData = data.data.assets_get.assets
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getAminitys() {
    try {
      let data = await this.api.post("saloon/aminities", {
        "page_no": 0
      });
      if (data.status == 1) {
        this.Aminities = data.data.aminities.aminities
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  removeImage(video: any) {
    this.data = video;
    this.removeAssets();
  }

  async removeAssets(){
    try {
      let data = await this.api.post("saloon/assets_remove",{
        id: this.data.id
      });
      if(data.status == 1){
        this.toast.success(data.message);
        this.getVideos();
      }else{
        this.toast.error(data.message);
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
        this.addImages();
      }
    }
  }

  async addImages(){
    try {
      const formdata: FormData = new FormData();
      formdata.append('type', 'Video');
      formdata.append('user_id', this.scarletData.user_id)
      if (this.url) {
        formdata.append('asset_url', this.url);
      }
      let data = await this.api.post("saloon/assets_add",formdata);
      if(data.status == 1){
        this.toast.success(data.message);
      }else{
        this.toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getSaloonDetail(){
    try {
      let data = await this.api.post("users/saloon_detail",{
        "user_id": this.scarletData.user_id
      });
      if(data.status == 1){
        this.saloon_detail = data.data.saloon_detail;
      }else{

      }
    } catch (error) {
      console.error(error);
    }
  }
}
