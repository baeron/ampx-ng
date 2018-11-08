import { TestBed, inject } from '@angular/core/testing';

import { IoAssignmentService } from './io-assignment.service';

describe('IoAssignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IoAssignmentService]
    });
  });

  it('should be created', inject([IoAssignmentService], (service: IoAssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
