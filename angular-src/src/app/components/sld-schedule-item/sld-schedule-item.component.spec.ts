import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SldScheduleItemComponent } from './sld-schedule-item.component';

describe('SldScheduleItemComponent', () => {
  let component: SldScheduleItemComponent;
  let fixture: ComponentFixture<SldScheduleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SldScheduleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SldScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
