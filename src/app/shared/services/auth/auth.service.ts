import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Token, getTokenObject } from '../../../classes/auth/token.dto';
import { User } from '../../../classes/userMgmt/user.dto';

const token_key = 'token';

const api_url = 'http://localhost:3000/';

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

  // TODO: Zugriffsrechte checken
  checkRoute(route: ActivatedRouteSnapshot): Observable<boolean> {
    console.log('checkRoute');
    
    return new Observable((obs) => {
      if (!this.user) {
        this.initClientData(this.cookieService.getObject(token_key) as Token).subscribe((res)=>{
          // TODO Validate
          obs.next(res);
        });
      } else {
        // TODO Validate
        obs.next(true);
      }
    });
  }

  getInterruptedRoute(): string {
    return this.interruptedPath;
  }

  login(email: string, password: string, remember: boolean): Observable<boolean> {
    return this.http.post(api_url + 'auth/login',
      { email: email, password: password }
    ).map(
      (data: { token: string, message: string }) => {
        if (!data.token) {
          throw new Error(!!data.message ? data.message : '500: Server error');
        }
        this.initClientData(getTokenObject(data.token));

        if (remember) {
          this.cookieService.putObject(token_key, this.token);
        }
        return true;
      }
    )
  }
  logout() {
    // TODO: real logout
    this.token = null;
    this.user = null;
    this.cookieService.remove(token_key);
    this.router.navigate(['/login']);
  }

  public initClientData(token: Token): Observable<boolean> {
    if(!token) return;
    this.token = token;
    return this.get('users/'+token.userId).map(user=>{
      this.user = new User().deserialize(user);
      return true;
    })
  }

  getUser(): Promise<User> {
    return this.asyncUser;
  }

  get(url: string): Observable<any> {
    // TODO: send Token
    if (!this.token) {
      throw new Error('Token does not exist!');
    }
    return this.http.get(api_url + url);
  }
  post(url: string, options: any): Observable<any> {
    // TODO: send Token
    if (!this.token) {
      throw new Error('Token does not exist!');
    }
    return this.http.post(api_url+url, options);
  }
  put(url: string, options: any): Observable<any> {
    // TODO: send Token
    if (!this.token) {
      throw new Error('Token does not exist!');
    }
    return this.http.put(url, options);
  }
}
