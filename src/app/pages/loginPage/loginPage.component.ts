import { LoginService } from './../../services/login.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {
  private val: any;
  private message: string;
  constructor(private http: Http, private router: Router, private login: LoginService) {
    // if (window.localStorage.getItem('token')) {
    //   console.log(window.localStorage.getItem('token'));
    // }
  }

  onSubmit(value: any) {
    // this.login.signIn({
    //   name: value.username,
    //   password: value.password,
    //   usertype: value.usertype
    // }).subscribe(res=>{
    //   if(res.json().success){
    //     this.router.navigate([value.usertype]);
    //   }else{
    //     this.message = res.json().message;
    //   }
    // }, err => {
    //   this.message = err;
    // });
  }

  ngOnInit() {
  }

}
