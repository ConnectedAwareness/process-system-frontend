import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ca-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  inResetMode: boolean;
  resetError: Error;
  restModel: {oldPassword?: string, newPassword?: string, confirmation?: string};
  ResetPasswordForm: FormGroup;

  constructor(private auth: AuthService, private http: HttpClient) {
    this.restModel = {};
  }

  ngOnInit() {
    this.ResetPasswordForm = new FormGroup({
      'oldPassword': new FormControl(this.restModel.oldPassword, [
        Validators.required
      ]),
      'newPassword': new FormControl(this.restModel.newPassword, [
        Validators.required
      ]),
      'confirmation': new FormControl(this.restModel.confirmation, [
        Validators.required
      ])
    });
  }

  resetMode(open: boolean) {
    this.inResetMode = open;
    // TODO: reset Form
  }

  reset(){
    if(!this.restModel.confirmation || !this.restModel.newPassword || !this.restModel.oldPassword) {
      this.resetError = new Error('Eines der Felder ist nicht ausgefüllt worden');
      return;
    }
    if(this.restModel.confirmation === '' || this.restModel.newPassword == '') {
      this.resetError = new Error('Eines der Felder ist nicht ausgefüllt worden');
      return;
    }
    if(this.restModel.confirmation != this.restModel.newPassword) {
      this.resetError = new Error('Bitte Bestätigen sie das Passwort');
      this.restModel.confirmation = '';
      this.restModel.newPassword = '';
      return;
    }
    this.http.post('users/resetpassword',
      {
        userId: this.auth.token.userId,
        newPassword: this.restModel.newPassword,
        oldPassword: this.restModel.oldPassword
      }
    ).subscribe((data)=>{
      if(data) {
        this.inResetMode = false;
        this.resetError = null;
        this.restModel.oldPassword = '';
        this.restModel.newPassword = '';
        this.restModel.confirmation = '';
      }
    }, (err)=>{
      this.resetError = err;
      this.restModel.oldPassword = '';
      this.restModel.newPassword = '';
      this.restModel.confirmation = '';
    });
  }

}
