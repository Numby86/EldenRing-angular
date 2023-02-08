import { TestBed } from '@angular/core/testing';

import { BossesService } from './bosses.service';

describe('BossesService', () => {
  let service: BossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
