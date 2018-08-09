import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthStructure } from './authStructure.class';

@Injectable()
export class AuthService {

  private user: AuthStructure;

  constructor(private router: Router) { }
  loginState(): boolean {
    return !!this.user && !!this.user.email && !!this.user.password;
  }
  hasPermission(): boolean {
    return !!this.user && !!this.user.email && !!this.user.password;
  }
  login(user: AuthStructure): Observable<boolean> {
    return new Observable((obs) => {
      // TODO: real auth
      this.user = user;
      obs.next(!!user && !!user.email && !!user.password);
    });
  }
  logout() {
    // TODO: real logout
    this.user = null;
    this.router.navigate(['/login']);
  }
}
