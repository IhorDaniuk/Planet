import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlanetsInterceptor } from './planets.interceptor';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: PlanetsInterceptor, multi: true }
]
