import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableItemComponent } from './cable-item.component';

describe('CableItemComponent', () => {
  let component: CableItemComponent;
  let fixture: ComponentFixture<CableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
