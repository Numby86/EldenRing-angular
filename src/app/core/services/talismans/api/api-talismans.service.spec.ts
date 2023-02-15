import { TestBed } from '@angular/core/testing';

import { ApiTalismansService } from './api-talismans.service';

describe('ApiTalismansService', () => {
  let service: ApiTalismansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTalismansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
