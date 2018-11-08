import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableDistanceModalComponent } from './cable-distance-modal.component';

describe('CableDistanceModalComponent', () => {
  let component: CableDistanceModalComponent;
  let fixture: ComponentFixture<CableDistanceModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableDistanceModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableDistanceModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
