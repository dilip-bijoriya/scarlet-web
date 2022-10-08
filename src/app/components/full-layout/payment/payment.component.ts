import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private api: ApiService) { }

 async ngOnInit() {
  await this.getPaymentList();
  }

  async getPaymentList(){
    try {
      let data = await this.api.post("",{

      });
    } catch (error) {
      console.error(error);
    }
  }
}
