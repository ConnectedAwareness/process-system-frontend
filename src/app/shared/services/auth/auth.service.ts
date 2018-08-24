import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthStructure } from './authStructure.class';
import { CookieService } from 'ngx-cookie';

const token_key = 'auth';

@Injectable()
export class AuthService {

  private user: AuthStructure;
  public allowSaveCookie: boolean;
  private interruptedPath: string;

  constructor(private router: Router, private cookieService: CookieService) {
    this.user = this.cookieService.getObject(token_key);
  }
  checkRoute(route: ActivatedRouteSnapshot): Observable<boolean> {
    return new Observable((obs) => {
      if (!!this.user) { // TODO: check if rout is valid
        this.interruptedPath = route.routeConfig.path;
        obs.next(true);
        // setTimeout(() => { obs.next(true); }, 2000);
      } else {
        obs.next(false);
        // setTimeout(() => { obs.next(false); }, 2000);
      }
    });
  }
  getInterruptedRoute(): string {
    return this.interruptedPath;
  }
  loginState(): boolean {
    return !!this.user && !!this.user.email && !!this.user.password;
  }
  login(user: AuthStructure): Observable<boolean> {
    return new Observable((obs) => {
      // TODO: real auth
      this.user = user;
      this.cookieService.putObject(token_key, this.user);
      obs.next(!!user && !!user.email && !!user.password);
    });
  }
  logout() {
    // TODO: real logout
    this.user = null;
    this.cookieService.remove(token_key);
    this.router.navigate(['/login']);
  }
  requestData() {

  }
}
