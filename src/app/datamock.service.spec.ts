import { TestBed } from '@angular/core/testing';

import { DatamockService } from './datamock.service';

describe('DatamockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatamockService = TestBed.get(DatamockService);
    expect(service).toBeTruthy();
  });
});
