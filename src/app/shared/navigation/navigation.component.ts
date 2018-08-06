import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import { AuthentificationService } from "../services/authentification.service";

enum BodyState {
  open = "open",
  close = "close",
  inClose = "inClose", // in-animation
  inOpen = "inOpen" // in-animation
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  private navigationState: BodyState;
  private loginState: BodyState;
  private formdata: FormGroup;
  private possibleNavigations =[
    { link: 'organisations', name: 'Organisationen'}
  ];

  constructor(private router: Router, private auth: AuthentificationService) {
    this.loginState = BodyState.open;
    this.navigationState = BodyState.close;
  }

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])
      ),
      password: new FormControl("", Validators.compose([Validators.required])),
      organisation: new FormControl(
        "",
        Validators.compose([Validators.required])
      )
    });
  }

  private toggle(isMenu: boolean) {
    if (isMenu) {
      switch (this.navigationState) {
        case BodyState.close:
          this.navigationState = BodyState.inOpen;
          break;
        case BodyState.open:
          this.navigationState = BodyState.inClose;
          break;
        case BodyState.inClose:
          this.navigationState = BodyState.inOpen;
          break;
        case BodyState.inOpen:
          this.navigationState = BodyState.inClose;
          break;
      }
      switch (this.loginState) {
        case BodyState.close:
          this.loginState = BodyState.close;
          break;
        case BodyState.open:
          this.loginState = BodyState.inClose;
          break;
        case BodyState.inClose:
          break;
        case BodyState.inOpen:
          this.loginState = BodyState.inClose;
          break;
      }
    } else {
      switch (this.navigationState) {
        case BodyState.close:
          this.navigationState = BodyState.close;
          break;
        case BodyState.open:
          this.navigationState = BodyState.inClose;
          break;
        case BodyState.inClose:
          break;
        case BodyState.inOpen:
          this.navigationState = BodyState.inClose;
          break;
      }
      switch (this.loginState) {
        case BodyState.close:
          this.loginState = BodyState.inOpen;
          break;
        case BodyState.open:
          this.loginState = BodyState.inClose;
          break;
        case BodyState.inClose:
          this.loginState = BodyState.inOpen;
          break;
        case BodyState.inOpen:
          this.loginState = BodyState.inClose;
          break;
      }
    }
  }

  private onSubmit() {
    // TODO: check serverdata match
    this.auth.verifyUserData(this.formdata.controls.email.value, this.formdata.controls.organisation.value, this.formdata.controls.password.value)
    if(this.formdata.valid) {
      this.loginState = BodyState.inClose;
      this.router.navigateByUrl('/main');
    }
  }
}
