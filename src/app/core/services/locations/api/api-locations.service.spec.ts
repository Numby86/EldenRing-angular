import { TestBed } from '@angular/core/testing';

import { ApiLocationsService } from './api-locations.service';

describe('ApiLocationsService', () => {
  let service: ApiLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
