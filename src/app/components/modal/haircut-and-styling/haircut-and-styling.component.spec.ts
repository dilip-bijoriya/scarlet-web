import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutAndStylingComponent } from './haircut-and-styling.component';

describe('HaircutAndStylingComponent', () => {
  let component: HaircutAndStylingComponent;
  let fixture: ComponentFixture<HaircutAndStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaircutAndStylingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaircutAndStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
