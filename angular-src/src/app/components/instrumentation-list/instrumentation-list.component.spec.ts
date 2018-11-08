import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationListComponent } from './instrumentation-list.component';

describe('InstrumentationListComponent', () => {
  let component: InstrumentationListComponent;
  let fixture: ComponentFixture<InstrumentationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
