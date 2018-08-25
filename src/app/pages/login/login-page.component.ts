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
  remember: boolean;
  constructor(private auth: AuthService, private router: Router) {
    this.loginModel = new AuthStructure();
    if (this.auth.loginState()) {
      this.navigateToNextPage();
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.loginModel, this.remember).subscribe((res) => {
      if (res) {
        this.navigateToNextPage();
      }
    });
  }

  navigateToNextPage() {
    this.router.navigate([this.auth.getInterruptedRoute() || '/main']);
  }

}
