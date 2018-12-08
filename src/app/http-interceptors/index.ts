import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt-interceptor';
import { BackendUrlIterceptor } from './backend-url-intercepter';
import { AuthService } from '../shared/services/auth/auth.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true, deps: [AuthService] },
  { provide: HTTP_INTERCEPTORS, useClass: BackendUrlIterceptor, multi: true },
];