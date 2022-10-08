import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSalonComponent } from './rate-salon.component';

describe('RateSalonComponent', () => {
  let component: RateSalonComponent;
  let fixture: ComponentFixture<RateSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
