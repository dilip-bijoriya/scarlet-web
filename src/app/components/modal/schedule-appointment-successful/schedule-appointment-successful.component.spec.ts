import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleAppointmentSuccessfulComponent } from './schedule-appointment-successful.component';

describe('ScheduleAppointmentSuccessfulComponent', () => {
  let component: ScheduleAppointmentSuccessfulComponent;
  let fixture: ComponentFixture<ScheduleAppointmentSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleAppointmentSuccessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleAppointmentSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
