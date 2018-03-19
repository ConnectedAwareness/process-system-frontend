import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '../../login/login-dialog/login-dialog.component';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  name: string = null;
  password: string = null;

  constructor(
    private _dialog: MatDialog
  ) { }

  openSignUp() {
    // Todo: create sign up form
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
  ngOnInit() {
  }
}

