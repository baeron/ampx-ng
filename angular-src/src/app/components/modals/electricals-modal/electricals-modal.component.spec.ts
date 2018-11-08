import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalsModalComponent } from './electricals-modal.component';

describe('ElectricalsModalComponent', () => {
  let component: ElectricalsModalComponent;
  let fixture: ComponentFixture<ElectricalsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricalsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
