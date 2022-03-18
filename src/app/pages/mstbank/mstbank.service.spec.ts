import { TestBed } from '@angular/core/testing';

import { MstbankService } from './mstbank.service';

describe('MstbankService', () => {
  let service: MstbankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MstbankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
