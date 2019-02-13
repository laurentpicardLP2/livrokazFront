import { TestBed } from '@angular/core/testing';

import { GendleService } from './gendle.service';

describe('GendleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GendleService = TestBed.get(GendleService);
    expect(service).toBeTruthy();
  });
});
