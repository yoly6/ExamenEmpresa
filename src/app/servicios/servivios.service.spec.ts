import { TestBed } from '@angular/core/testing';

import { ServiviosService } from './servivios.service';

describe('ServiviosService', () => {
  let service: ServiviosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiviosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
