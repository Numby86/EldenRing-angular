import { TestBed } from '@angular/core/testing';

import { ApiItemsService } from './api-items.service';

describe('ApiItemsService', () => {
  let service: ApiItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
