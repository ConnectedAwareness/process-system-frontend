import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ca-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public menuIsOpen = false;
  private maxWidth = 104;
  private minWidth = 52;
  private minOffsetY = 104;
  protected logoWidth = this.maxWidth;


  constructor(private router: Router, private auth: AuthService) {
    this.onWindowScroll();
  }

  private toggle() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.logoWidth = Math.max(this.minWidth, ((this.minWidth-this.maxWidth)/this.minOffsetY)*window.pageYOffset+this.maxWidth);
  }
}
