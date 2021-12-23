import { TestBed } from '@angular/core/testing';

import { SpecialisteEvolutionServiceService } from './specialiste-evolution-service.service';

describe('SpecialisteEvolutionServiceService', () => {
  let service: SpecialisteEvolutionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialisteEvolutionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
