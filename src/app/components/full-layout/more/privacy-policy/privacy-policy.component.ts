import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
 privacyData: any
 url: string = "http://knowledgerevise.com/saloon/welcome/saloon_privacy_policy";
  urlSafe!: SafeResourceUrl;
  constructor(private api: ApiService, public sanitizer: DomSanitizer) { }

  async ngOnInit() {
    await this.termsAndCondition();
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    setTimeout(() => {
    }, 2000);
  }

  async termsAndCondition(){
    try {
      let data = await this.api.get("static_page/saloon_privacy_policy")
      if(data.status == 1){
        this.privacyData = data.data.url
      }else{

      }
    } catch (error) {
      console.error(error);
    }
  }

}
