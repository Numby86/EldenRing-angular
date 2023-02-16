import { TestBed } from '@angular/core/testing';

import { ApiArmorsService } from './api-armors.service';

describe('ApiArmorsService', () => {
  let service: ApiArmorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiArmorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
