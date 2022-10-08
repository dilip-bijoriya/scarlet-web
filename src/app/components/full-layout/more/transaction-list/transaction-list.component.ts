import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
public scarletData;
public transactionList: Array<any> = [];
  constructor(private api: ApiService, private cookie: CookieService) { 
    this.scarletData = JSON.parse(this.cookie.get("scarlet_website"));
    console.log(this.scarletData);
  }

  async ngOnInit() {
    await this.getTransactionList();
  }

 async getTransactionList(){
  try {
    let data = await this.api.post("saloon/transaction",{
      "user_id": this.scarletData.user_id,
      "page_no": 0
    });
    if(data.status == 1){
      this.transactionList = data.data.transaction.transaction_list
    }
  } catch (error) {
    console.error(error);
  }
  }
}
