import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Token, getTokenObject } from '../../../classes/auth/token.dto';

const token_key = 'token';

const api_url = 'http://localhost:3000/';

@Injectable()
export class AuthService {

  public token: Token;
  public allowSaveCookie: boolean;
  private interruptedPath: string;

  constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) {
    this.token = this.cookieService.getObject(token_key) as Token;
  }
  checkRoute(route: ActivatedRouteSnapshot): Observable<boolean> {
    return new Observable((obs) => {
      if (!!this.token) {
        obs.next(true);
      } else {
        this.interruptedPath = '/'+route.routeConfig.path;
        obs.next(false);
      }
    });
  }
  public tokenExists(): boolean{
    return !!this.token;
  }
  getInterruptedRoute(): string {
    return this.interruptedPath;
  }
  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.http.post(api_url+'auth/login',
      {email: email, password: password}
    ).map(
      (data: {token: string, message: string}) => {
        if(!data.token) {
          throw new Error(!!data.message? data.message: '500: Server error');
        }
        this.token = getTokenObject(data.token);
        
        if(remember) {
          this.cookieService.putObject(token_key, this.token);
        }
        return true;
      }
    )
  }
  logout() {
    // TODO: real logout
    this.token = null;
    this.cookieService.remove(token_key);
    this.router.navigate(['/login']);
  }
  get(url: string): Observable<any> {
    // send Token
    if (!this.token) {
      throw new Error('Token does not exist!');
    }
    return this.http.get(url);
  }
  post(url: string, options: any): Observable<any> {
    // send Token
    if (!this.token) {
      throw new Error('Token does not exist!');
    }
    return this.http.post(url, options);
  }
  put(url: string, options: any): Observable<any> {
    // send Token
    if (!this.token.tokenString) {
      throw new Error('Token does not exist!');
    }
    return this.http.put(url, options);
  }
}
