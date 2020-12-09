import { TestBed } from '@angular/core/testing';

import { PlanetsInterceptor } from './planets.interceptor';

describe('PlanetsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PlanetsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PlanetsInterceptor = TestBed.inject(PlanetsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
