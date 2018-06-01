import { Component, OnInit } from '@angular/core';

enum BodyState {
  open = 'open',
  close = 'close',
  inClose = 'inClose', // in-animation
  inOpen = 'inOpen', // in-animation
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private navigationState: BodyState;
  private loginState: BodyState;

  constructor() {
    this.loginState = BodyState.close;
    this.navigationState = BodyState.close;
  }

  ngOnInit() {
  }

  private toggle(isMenu :boolean){
    if(isMenu){
      switch (this.navigationState) {
        case BodyState.close: this.navigationState = BodyState.inOpen; break;
        case BodyState.open: this.navigationState = BodyState.inClose; break;
        case BodyState.inClose: this.navigationState = BodyState.inOpen; break;
        case BodyState.inOpen: this.navigationState = BodyState.inClose; break;
      }
      switch (this.loginState) {
        case BodyState.close: this.loginState = BodyState.close; break;
        case BodyState.open: this.loginState = BodyState.inClose; break;
        case BodyState.inClose: break;
        case BodyState.inOpen: this.loginState = BodyState.inClose; break;
      }
    }else{
      switch (this.navigationState) {
        case BodyState.close: this.navigationState = BodyState.close; break;
        case BodyState.open: this.navigationState = BodyState.inClose; break;
        case BodyState.inClose: break;
        case BodyState.inOpen: this.navigationState = BodyState.inClose; break;
      }
      switch (this.loginState) {
        case BodyState.close: this.loginState = BodyState.inOpen; break;
        case BodyState.open: this.loginState = BodyState.inClose; break;
        case BodyState.inClose: this.loginState = BodyState.inOpen; break;
        case BodyState.inOpen: this.loginState = BodyState.inClose; break;
      }
    } 
  }

}
