import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonsSpecialistComponent } from './salons-specialist.component';

describe('SalonsSpecialistComponent', () => {
  let component: SalonsSpecialistComponent;
  let fixture: ComponentFixture<SalonsSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalonsSpecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonsSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
