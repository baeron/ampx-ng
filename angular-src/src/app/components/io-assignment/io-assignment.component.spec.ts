import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoAssignmentComponent } from './io-assignment.component';

describe('IoAssignmentComponent', () => {
  let component: IoAssignmentComponent;
  let fixture: ComponentFixture<IoAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
