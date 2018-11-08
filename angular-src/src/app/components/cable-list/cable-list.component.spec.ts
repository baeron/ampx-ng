import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CableListComponent } from './cable-list.component';

describe('CableListComponent', () => {
  let component: CableListComponent;
  let fixture: ComponentFixture<CableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
