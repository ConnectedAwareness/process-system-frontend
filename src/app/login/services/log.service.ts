import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { log } from 'util';
import { logging } from 'selenium-webdriver';

@Injectable()
export class LogService {
  constructor(private _http: HttpClient) {
  }

  login(email: String, password: String) {
    console.log('login');
    console.log(email);
    console.log(password);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    console.log(httpOptions);

    this._http.post('http://localhost:3000/login', {
      email: email,
      password: password
    }, httpOptions).toPromise().then((res) => {
      console.log('post response');
      console.log(res);
    }).catch((err) => {
      console.error('err:');
      console.error(err);
    });
    console.log(email);
    console.log(password);
  }
}
