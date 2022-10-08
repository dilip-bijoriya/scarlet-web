import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmmentComponent } from './appointmment.component';

describe('AppointmmentComponent', () => {
  let component: AppointmmentComponent;
  let fixture: ComponentFixture<AppointmmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
