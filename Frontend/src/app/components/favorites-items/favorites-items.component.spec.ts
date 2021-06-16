import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesItemsComponent } from './favorites-items.component';

describe('FavoritesItemsComponent', () => {
  let component: FavoritesItemsComponent;
  let fixture: ComponentFixture<FavoritesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
