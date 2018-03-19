import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user.model';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api

  constructor(
    private _http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.usersUrl);
  }

}
