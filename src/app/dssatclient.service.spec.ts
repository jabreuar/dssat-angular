import { TestBed, inject } from '@angular/core/testing';

import { DSSATClientService } from './dssatclient.service';

describe('DSSATClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DSSATClientService]
    });
  });

  it('should be created', inject([DSSATClientService], (service: DSSATClientService) => {
    expect(service).toBeTruthy();
  }));
});
