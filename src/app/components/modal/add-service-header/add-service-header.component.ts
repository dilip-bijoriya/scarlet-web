import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-service-header',
  templateUrl: './add-service-header.component.html',
  styleUrls: ['./add-service-header.component.scss']
})
export class AddServiceHeaderComponent implements OnInit {

  constructor(public activeModal :NgbActiveModal) { }

  ngOnInit(): void {
  }

}
