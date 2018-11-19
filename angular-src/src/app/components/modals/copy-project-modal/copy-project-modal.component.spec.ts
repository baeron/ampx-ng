import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyProjectModalComponent } from './copy-project-modal.component';

describe('CopyProjectModalComponent', () => {
  let component: CopyProjectModalComponent;
  let fixture: ComponentFixture<CopyProjectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyProjectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyProjectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
