import { Component, OnInit } from '@angular/core';
import { NgbActiveModal,  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-appointment',
  templateUrl: './schedule-appointment.component.html',
  styleUrls: ['./schedule-appointment.component.scss']
})
export class ScheduleAppointmentComponent implements OnInit {

  constructor(public activeModal :NgbActiveModal) { }

  ngOnInit(): void {
  }

}
