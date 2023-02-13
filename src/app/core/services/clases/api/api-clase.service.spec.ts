import { TestBed } from '@angular/core/testing';

import { ApiClaseService } from './api-clase.service';

describe('ApiClaseService', () => {
  let service: ApiClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
