import { TestBed } from '@angular/core/testing';

import { SpecialisteRdvServiceService } from './specialiste-rdv-service.service';

describe('SpecialisteRdvServiceService', () => {
  let service: SpecialisteRdvServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialisteRdvServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
