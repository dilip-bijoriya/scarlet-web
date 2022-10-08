import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchduleAppointmentComponent } from './schdule-appointment.component';

describe('SchduleAppointmentComponent', () => {
  let component: SchduleAppointmentComponent;
  let fixture: ComponentFixture<SchduleAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchduleAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchduleAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
