import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationComponent } from './shared/components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('navbarComponent') navbarComponent: NavigationComponent;

  constructor(
    private router: Router
  ) { }

  private hideNavbarMenu() {
    this.navbarComponent.menuIsOpen = false;
  }

  ngOnInit() {
  }
}
