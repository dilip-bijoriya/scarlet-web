import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-haircut-and-styling',
  templateUrl: './haircut-and-styling.component.html',
  styleUrls: ['./haircut-and-styling.component.scss']
})
export class HaircutAndStylingComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }


}
