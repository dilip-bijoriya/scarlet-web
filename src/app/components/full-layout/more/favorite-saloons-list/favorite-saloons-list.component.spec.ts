import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteSaloonsListComponent } from './favorite-saloons-list.component';

describe('FavoriteSaloonsListComponent', () => {
  let component: FavoriteSaloonsListComponent;
  let fixture: ComponentFixture<FavoriteSaloonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteSaloonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteSaloonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
