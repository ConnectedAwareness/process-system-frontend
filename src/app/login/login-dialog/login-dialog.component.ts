import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  email: String;
  password: String;

  constructor(private logService: LogService) { }

  ngOnInit() {
  }

  onSubmit(email: String, password: String){
    this.logService.login(email, password);
  }

}
