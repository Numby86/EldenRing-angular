import { TestBed } from '@angular/core/testing';

import { ApiWeaponsService } from './api-weapons.service';

describe('ApiWeaponsService', () => {
  let service: ApiWeaponsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiWeaponsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
