import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSucessfulComponent } from './payment-sucessful.component';

describe('PaymentSucessfulComponent', () => {
  let component: PaymentSucessfulComponent;
  let fixture: ComponentFixture<PaymentSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
