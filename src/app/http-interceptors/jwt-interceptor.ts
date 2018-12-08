import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';

/** Adds the Token if exists to internal BE requests */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  
  constructor(private auth: AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
      
    if (this.auth.tokenExists() && !req.headers.has('externalRequest')) {
      return next.handle(req.clone({
        headers: this.auth.setTokenHeader(req.headers)
      }));
    }

    return next.handle(req);
  }
}