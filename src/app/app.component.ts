import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { LoginDialogComponent } from './login/components/login-dialog/login-dialog.component';
import { SignUpComponent } from './login/components/sign-up/sign-up.component';
import { LogService } from './login/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = null;
  password: string = null;

  constructor(
    private _dialog: MatDialog,
    private _logService: LogService,
    private router: Router
  ) { }

  openSignUp() {
    const loginDialogRef = this._dialog.open(SignUpComponent, {
    });
    loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = 'not logged in';
    });
  }
  openLogin(): void {
    const loginDialogRef = this._dialog.open(LoginDialogComponent, {
      data: { name: this.name, animal: this.password }
    });
    loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = 'not logged in';
    });
  }
  logout() {
    this.router.navigate(['/'])
    this._logService.logout()
  }
  ngOnInit() {
  }
}
