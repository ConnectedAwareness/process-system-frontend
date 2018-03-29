import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api
  private _currentUser: User = new User();
  private _currentUserStream = new BehaviorSubject<User>(this._currentUser);

  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.usersUrl);
  }
  setUser = (currentUser: User) => {
    this._currentUser = currentUser;
    this._currentUserStream.next(this._currentUser);
  }
  getCurrentUser(): Observable<User> {
    return this._currentUserStream.asObservable();
  }
}
