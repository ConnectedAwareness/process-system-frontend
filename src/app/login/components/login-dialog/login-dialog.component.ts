import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, RequiredValidator } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { User } from '../../../user/models/user.model';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  currentUser: User;
  userLoginForm: FormGroup;

  constructor(
    private _logService: LogService,
    private _formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this.createForm();
  }

  createForm() {
    this.userLoginForm = this._formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // subscribe to the current active user using the app
    this._userService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  onSubmit() {
    this.currentUser.email = this.userLoginForm.value.email;
    this.currentUser.password = this.userLoginForm.value.password;
    this._logService.login(this.currentUser.email, this.currentUser.password).then((res)=>{
      console.log('res:',res)
    }).catch((err)=>{
      console.log('err', err)
    })
  }
}
