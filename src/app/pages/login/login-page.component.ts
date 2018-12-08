import { Router } from '@angular/router';
import { AuthService } from './../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'ca-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  error: string;
  model: {email?: string, password?: string, remember?: boolean};
  loginForm: FormGroup;
  constructor(private auth: AuthService, private router: Router) {
    this.model = {};
    if (!!this.auth.token) {
      this.navigateToNextPage();
    }
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.model.email, [
        Validators.required
      ]),
      'password': new FormControl(this.model.password, [
        Validators.required
      ]),
      'remember': new FormControl(this.model.remember)
    });
  }

  onSubmit() {
      this.auth.login(this.model.email, this.model.password, !!this.model.remember).subscribe((res) => {
        if (res) {
          this.navigateToNextPage();
        }
      }
    );
  }

  navigateToNextPage() {
    this.router.navigate([this.auth.getInterruptedRoute() || '/main']);
  }

}
