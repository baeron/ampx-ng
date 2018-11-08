import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleElectricalModalComponent } from './simple-electrical-modal.component';

describe('SimpleElectricalModalComponent', () => {
  let component: SimpleElectricalModalComponent;
  let fixture: ComponentFixture<SimpleElectricalModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleElectricalModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleElectricalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
