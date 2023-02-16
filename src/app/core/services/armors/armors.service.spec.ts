import { TestBed } from '@angular/core/testing';

import { ArmorsService } from './armors.service';

describe('ArmorsService', () => {
  let service: ArmorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
