import { TestBed } from '@angular/core/testing';

import { SheardService } from './sheard.service';

describe('SheardService', () => {
  let service: SheardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
