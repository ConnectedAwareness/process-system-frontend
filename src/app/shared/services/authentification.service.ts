import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie";

@Injectable()
export class AuthentificationService {

  public loginData: object;
  // TODO: save access rights

  constructor(private router: Router, private cookies: CookieService) {
    if (cookies.get('token')) {
      this.checkToken(cookies.get('token'));
    }
  }

  private checkToken(token: string): void {
    // TODO: request to server
  //   new Promise<>(() => {
  //     if(true) {
  //       this.loginData = {}; //TODO: save loginData
  //     } else {
  //       this.cookies.remove('token');
  //     }
  //     return {loginData: {status: 200}};
  //   }).then(res=>{
  //     if(res.status == 200){
  //       this.loginData = res.loginData;
  //     }
  //   });
  }

  public verifyUserData(
    email: string,
    organisation: string,
    password: string
  ): Promise<boolean> {
    // TODO: request to server
    return new Promise<boolean>(() => {
      this.loginData = {}; //TODO: save loginData
      return true;
    });
  }

  public logOut() {
    this.loginData = undefined;
    this.router.navigateByUrl("/start");
  }

  public getDataRequest() {}
}
