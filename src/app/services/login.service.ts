import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  public isSignedIn: boolean;

  constructor(private http: Http, private router: Router) {
    this.isSignedIn = false;
  }

  public signIn(user: {
    name: string,
    password: string,
    usertype: string
  }) {
    console.log('sign in');
    return this.http.post('http://localhost:3000/login', user).map(res => {
      if (res.json().success) {
        window.localStorage.setItem('token', res.json().token);
        this.isSignedIn = true;
        return res;
      }
      window.localStorage.removeItem('token');
      return res;
    });
  }

  public logout(){
    window.localStorage.removeItem('token');
    // TODO: send delete Token request
    this.router.navigate(['']);
  }

}