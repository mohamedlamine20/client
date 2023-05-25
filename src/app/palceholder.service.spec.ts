import { TestBed } from '@angular/core/testing';

import { PalceholderService } from './palceholder.service';

describe('PalceholderService', () => {
  let service: PalceholderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalceholderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
