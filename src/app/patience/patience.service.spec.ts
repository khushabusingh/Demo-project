import { TestBed } from '@angular/core/testing';

import { PatienceService } from './patience.service';

describe('PatienceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatienceService = TestBed.get(PatienceService);
    expect(service).toBeTruthy();
  });
});
