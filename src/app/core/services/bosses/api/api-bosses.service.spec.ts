import { TestBed } from '@angular/core/testing';

import { ApiBossesService } from './api-bosses.service';

describe('ApiBossesService', () => {
  let service: ApiBossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
