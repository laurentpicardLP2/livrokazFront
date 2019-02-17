import { TestBed } from '@angular/core/testing';

import { MyErrorStateMatcherService } from './my-error-state-matcher.service';

describe('MyErrorStateMatcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyErrorStateMatcherService = TestBed.get(MyErrorStateMatcherService);
    expect(service).toBeTruthy();
  });
});
