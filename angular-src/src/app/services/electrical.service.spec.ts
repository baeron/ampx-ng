import { TestBed, inject } from '@angular/core/testing';

import { ElectricalService } from './electrical.service';

describe('ElectricalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElectricalService]
    });
  });

  it('should be created', inject([ElectricalService], (service: ElectricalService) => {
    expect(service).toBeTruthy();
  }));
});
