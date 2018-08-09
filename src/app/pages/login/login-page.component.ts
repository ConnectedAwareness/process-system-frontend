import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthStructure } from '../../shared/services/auth/authStructure.class';

@Component({
  selector: 'ca-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginModel: AuthStructure;
  constructor(private auth: AuthService, private router: Router) {
    this.loginModel = new AuthStructure();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginModel);
    this.auth.login(this.loginModel).subscribe((res) => {
      if (res) {
        this.router.navigate(['/main']);
      }
    });
  }

}
