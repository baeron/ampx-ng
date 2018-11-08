import { TestBed, inject } from '@angular/core/testing';

import { SldscheduleService } from './sldschedule.service';

describe('SldscheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SldscheduleService]
    });
  });

  it('should be created', inject([SldscheduleService], (service: SldscheduleService) => {
    expect(service).toBeTruthy();
  }));
});
