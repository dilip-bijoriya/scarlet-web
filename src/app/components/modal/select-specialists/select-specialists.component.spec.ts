import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpecialistsComponent } from './select-specialists.component';

describe('SelectSpecialistsComponent', () => {
  let component: SelectSpecialistsComponent;
  let fixture: ComponentFixture<SelectSpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSpecialistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
