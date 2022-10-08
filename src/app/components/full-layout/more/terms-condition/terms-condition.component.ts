import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  public data: any;
  url: string = "http://knowledgerevise.com/saloon/welcome/saloon_terms_condition";
  urlSafe!: SafeResourceUrl;
  constructor(private api: ApiService, public sanitizer: DomSanitizer) { }

  async ngOnInit() {
    await this.termsAndCondition();
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    setTimeout(() => {
    }, 2000);

  }

  async termsAndCondition() {
    try {
      let data = await this.api.get("static_page/saloon_terms_condition");
      if (data.status == 1) {
        this.data = data.url;
      } else {

      }
    } catch (error) {
      console.error(error);
    }
  }
}
