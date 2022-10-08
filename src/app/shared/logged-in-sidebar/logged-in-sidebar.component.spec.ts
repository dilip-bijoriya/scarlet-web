import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInSidebarComponent } from './logged-in-sidebar.component';

describe('LoggedInSidebarComponent', () => {
  let component: LoggedInSidebarComponent;
  let fixture: ComponentFixture<LoggedInSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedInSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
