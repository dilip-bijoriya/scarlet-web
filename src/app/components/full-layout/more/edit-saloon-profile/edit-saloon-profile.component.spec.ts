import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaloonProfileComponent } from './edit-saloon-profile.component';

describe('EditSaloonProfileComponent', () => {
  let component: EditSaloonProfileComponent;
  let fixture: ComponentFixture<EditSaloonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaloonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSaloonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
