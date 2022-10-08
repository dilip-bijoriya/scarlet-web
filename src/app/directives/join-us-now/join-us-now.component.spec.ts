import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinUsNowComponent } from './join-us-now.component';

describe('JoinUsNowComponent', () => {
  let component: JoinUsNowComponent;
  let fixture: ComponentFixture<JoinUsNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinUsNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinUsNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
