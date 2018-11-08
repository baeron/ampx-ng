import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalItemComponent } from './electrical-item.component';

describe('ElectricalItemComponent', () => {
  let component: ElectricalItemComponent;
  let fixture: ComponentFixture<ElectricalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
