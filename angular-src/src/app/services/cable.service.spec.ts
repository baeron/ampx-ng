import { TestBed, inject } from '@angular/core/testing';

import { CableService } from './cable.service';

describe('CableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CableService]
    });
  });

  it('should be created', inject([CableService], (service: CableService) => {
    expect(service).toBeTruthy();
  }));
});
