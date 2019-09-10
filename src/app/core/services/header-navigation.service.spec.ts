import { TestBed } from '@angular/core/testing';

import { HeaderNavigationService } from './header-navigation.service';

describe('HeaderNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderNavigationService = TestBed.get(HeaderNavigationService);
    expect(service).toBeTruthy();
  });
});
