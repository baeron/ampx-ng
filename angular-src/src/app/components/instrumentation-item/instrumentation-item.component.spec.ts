import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentationItemComponent } from './instrumentation-item.component';

describe('InstrumentationItemComponent', () => {
  let component: InstrumentationItemComponent;
  let fixture: ComponentFixture<InstrumentationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
