import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { log } from "util";
import { logging } from "selenium-webdriver";

const path = "http://localhost:3000";

class User {
  constructor(
    public alias: string,
    public email: string,
    public first_name: string,
    public id: string,
    public last_name: string,
    public roles: string[],
    public token: string
  ) {}
}
// TODO: localStorage
@Injectable()
export class LogService {
  private user: User;

  constructor(private _http: HttpClient) {}

  public getHeader(): HttpHeaders{
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "apikey": this.user.token
    })
  }

  isUserSet(): boolean {
    return this.user != null;
  }

  setUser(user: User): void {
    this.user = user;
  }

  logout() {
    const httpOptions = { headers: this.getHeader() }

    return this._http
      .post(path+'/logout', {id: this.user.id}, httpOptions)
      .toPromise()
      .then(res => {
        console.log(res);
        this.user = undefined;
      }).catch((err)=>{
        console.log(err)
        this.user = undefined;
      });
  }

  login(email: String, password: String): Promise<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      })
    };

    let userData = { email: email, password: password };

    return this._http
      .post(path+'/login', userData, httpOptions)
      .toPromise()
      .then(res => {
        console.log(res["user"]);
        if (!res["user"])
          throw new Error("User does not exist!");
        this.setUser(res["user"]);
        console.log(this.user)
        return this.user.token;
      });
  }
}
