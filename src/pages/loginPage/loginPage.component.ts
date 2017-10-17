import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.scss']
})
export class LoginPageComponent implements OnInit {
  val: any;
  constructor(private http: Http) {
    if (window.localStorage.getItem('token')) {
      console.log('token exists');
    }
  }

  onSubmit(value: any) {
    console.log(value);
    this.http.post('http://localhost:3000/login', {
        name: value.username,
        password: value.password,
        usertype: value.usertype
    }).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {
      console.log('end of request');
    })
    // send registration {
    // on error {
    // write Problem
    // } else
    // save Token
    // change side with Token
    // }
    // }
  }

  ngOnInit() {
  }

}
