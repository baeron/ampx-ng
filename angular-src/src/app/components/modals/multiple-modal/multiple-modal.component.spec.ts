import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleModalComponent } from './multiple-modal.component';

describe('MultipleModalComponent', () => {
  let component: MultipleModalComponent;
  let fixture: ComponentFixture<MultipleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
