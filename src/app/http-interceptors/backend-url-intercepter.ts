import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Adds the BE adress to internal BE requests
@Injectable()
export class BackendUrlIterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (req.headers.has('externalRequest')) {
      let headers = req.headers;
      delete headers['externalRequest'];
      return next.handle(req.clone({
        headers: headers
      }));
    }
    return next.handle(req.clone({
      url: environment.backendUrl + req.url
    }));
  }
}