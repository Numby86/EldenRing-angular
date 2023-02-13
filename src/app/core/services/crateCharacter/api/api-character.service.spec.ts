import { TestBed } from '@angular/core/testing';

import { ApiCharacterService } from './api-character.service';

describe('ApiCharacterService', () => {
  let service: ApiCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
