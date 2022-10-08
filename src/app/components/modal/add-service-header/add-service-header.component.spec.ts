import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceHeaderComponent } from './add-service-header.component';

describe('AddServiceHeaderComponent', () => {
  let component: AddServiceHeaderComponent;
  let fixture: ComponentFixture<AddServiceHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServiceHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
