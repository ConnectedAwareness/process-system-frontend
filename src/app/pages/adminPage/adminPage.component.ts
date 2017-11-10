import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminPage',
  templateUrl: './adminPage.component.html',
  styleUrls: ['./adminPage.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router, private http: Http) {
    // if(!window.localStorage.getItem('token')){
    //   console.log('no Token exists');
    //   this.router.navigate(['']);
    // }else{
    //   console.log('loadData');
    // }
  }

  ngOnInit() {

  }

}
