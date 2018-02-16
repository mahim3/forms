import { TestBed, async, inject } from '@angular/core/testing';

import { SalmanGuard } from './salman.guard';

describe('SalmanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalmanGuard]
    });
  });

  it('should ...', inject([SalmanGuard], (guard: SalmanGuard) => {
    expect(guard).toBeTruthy();
  }));
});
