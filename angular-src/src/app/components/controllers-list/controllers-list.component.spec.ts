import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllersListComponent } from './controllers-list.component';

describe('ControllersListComponent', () => {
  let component: ControllersListComponent;
  let fixture: ComponentFixture<ControllersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
