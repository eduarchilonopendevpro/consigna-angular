import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logiGuard } from './logi.guard';

describe('logiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
