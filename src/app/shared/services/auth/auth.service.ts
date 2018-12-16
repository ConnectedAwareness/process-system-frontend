import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap'
import { Token, getTokenObject } from '../../../classes/auth/token.dto';
import { User } from '../../../classes/userMgmt/user.dto';

const token_key = 'token';

@Injectable()
export class AuthService {

  public allowSaveCookie: boolean;
  private interruptedPath: string;

  public token: Token;
  public user: User;
  private asyncUser = new Promise<User>(()=>null);

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private http: HttpClient
  ) {}

  checkRoute(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log(route);
    return new Observable((obs) => {
      let token = this.cookieService.getObject(token_key) as Token;
      if (!this.user && !!token) {
        this.initClientData(token).subscribe((res)=>{
          if(!res) 
            this.interruptedPath = route.routeConfig.path;
          obs.next(res);
        });
      } else if (!this.user && !token) {
        this.interruptedPath = route.routeConfig.path;
        obs.next(false);
      } else {
        obs.next(true);
      }
    });
  }

  getInterruptedRoute(): string {
    return this.interruptedPath;
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.http.post('auth/login',
      { email: email, password: password }
    ).mergeMap((value: { token: string, message: string }, index: number) => {
        if (!value.token) {
          throw new Error(!!value.message ? value.message : '500: Server error');
        }
        let tokenObj = getTokenObject(value.token);
        console.log('tokenObj', tokenObj);
        if (remember) {
          console.log('remember');
          
          this.cookieService.putObject(token_key, this.token);
        }
        return this.initClientData(tokenObj);
      }
    )
  }
  logout() {
    this.token = null;
    this.user = null;
    this.interruptedPath = null;
    this.cookieService.remove(token_key);
    this.router.navigate(['/login']);
  }

  public initClientData(token: Token): Observable<boolean> {
    if(!token) return;
    this.token = token;
    return this.http.get('users/'+token.userId).map(user=>{
      this.user = new User().deserialize(user);
      return true;
    })
  }

  getUser(): Promise<User> {
    return this.asyncUser;
  }

  public tokenExists(): boolean {
    return !!this.token && !!this.token.tokenString;
  }

  public setTokenHeader(headers: HttpHeaders): HttpHeaders{
    return headers.set('Authorization', 'bearer ' + this.token.tokenString)
  }
}
