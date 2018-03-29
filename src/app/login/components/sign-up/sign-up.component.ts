import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { User } from '../../../user/models/user.model';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  currentUser: User;
  signUpForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this._userService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }
  onSubmit() {
    this.currentUser.email = this.signUpForm.value.email;
    this.currentUser.password = this.signUpForm.value.password;
    // && this._logService.login(this.currentUser.email, this.currentUser.password);
  }
}
