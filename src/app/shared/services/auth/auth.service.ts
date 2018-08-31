import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User, getUserFromToken } from './authStructure.class';

const token_key = 'auth';

const api_url = 'http://localhost:3000/';

@Injectable()
export class AuthService {

  public user: User;
  public allowSaveCookie: boolean;
  private interruptedPath: string;

  constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) {
    this.user = this.cookieService.getObject(token_key) as User;
  }
  checkRoute(route: ActivatedRouteSnapshot): Observable<boolean> {
    return new Observable((obs) => {
      if (!!this.user) {
        obs.next(true);
      } else {
        this.interruptedPath = '/'+route.routeConfig.path;
        obs.next(false);
      }
    });
  }
  public userExists(): boolean{
    return !!this.user;
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
        this.user = getUserFromToken(data.token);
        
        if(remember) {
          this.cookieService.putObject(token_key, this.user);
          console.log(this.cookieService.getAll());
          
        }
        return true;
      }
    )
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
