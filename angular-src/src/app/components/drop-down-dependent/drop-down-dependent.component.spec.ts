import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownDependentComponent } from './drop-down-dependent.component';

describe('DropDownDependentComponent', () => {
  let component: DropDownDependentComponent;
  let fixture: ComponentFixture<DropDownDependentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownDependentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
