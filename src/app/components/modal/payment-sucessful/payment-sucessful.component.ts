import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payment-sucessful',
  templateUrl: './payment-sucessful.component.html',
  styleUrls: ['./payment-sucessful.component.scss']
})
export class PaymentSucessfulComponent implements OnInit {

  constructor(public activeModal :NgbActiveModal) { }

  ngOnInit(): void {
  }

}
