import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWorkModalComponent } from './team-work-modal.component';

describe('TeamWorkModalComponent', () => {
  let component: TeamWorkModalComponent;
  let fixture: ComponentFixture<TeamWorkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWorkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWorkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
