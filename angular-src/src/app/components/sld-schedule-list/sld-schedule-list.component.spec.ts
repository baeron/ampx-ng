import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SldScheduleListComponent } from './sld-schedule-list.component';

describe('SldScheduleListComponent', () => {
  let component: SldScheduleListComponent;
  let fixture: ComponentFixture<SldScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SldScheduleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SldScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
