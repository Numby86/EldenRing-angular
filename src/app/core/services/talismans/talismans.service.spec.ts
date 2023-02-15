import { TestBed } from '@angular/core/testing';

import { TalismansService } from './talismans.service';

describe('TalismansService', () => {
  let service: TalismansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalismansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
