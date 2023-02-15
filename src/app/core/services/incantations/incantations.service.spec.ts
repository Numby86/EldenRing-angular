import { TestBed } from '@angular/core/testing';

import { IncantationsService } from './incantations.service';

describe('IncantationsService', () => {
  let service: IncantationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncantationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
