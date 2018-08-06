import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../shared/services/authentification.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router, private auth: AuthentificationService
  ) { }

  ngOnInit() {
    
    // if(!this.auth.loggedIn()) {
    //   this.router.navigate(['/'])
    // }
  }

}
