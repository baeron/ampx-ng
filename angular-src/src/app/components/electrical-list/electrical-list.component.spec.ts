import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalListComponent } from './electrical-list.component';

describe('ElectricalListComponent', () => {
  let component: ElectricalListComponent;
  let fixture: ComponentFixture<ElectricalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
