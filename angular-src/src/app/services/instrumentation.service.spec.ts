import { TestBed, inject } from '@angular/core/testing';

import { InstrumentationService } from './instrumentation.service';

describe('InstrumentationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentationService]
    });
  });

  it('should be created', inject([InstrumentationService], (service: InstrumentationService) => {
    expect(service).toBeTruthy();
  }));
});
