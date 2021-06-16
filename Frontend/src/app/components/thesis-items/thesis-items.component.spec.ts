import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisItemsComponent } from './thesis-items.component';

describe('ThesisItemsComponent', () => {
  let component: ThesisItemsComponent;
  let fixture: ComponentFixture<ThesisItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
