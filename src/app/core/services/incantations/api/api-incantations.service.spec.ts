import { TestBed } from '@angular/core/testing';

import { ApiIncantationsService } from './api-incantations.service';

describe('ApiIncantationsService', () => {
  let service: ApiIncantationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIncantationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
