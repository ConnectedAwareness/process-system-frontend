import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

enum BodyState {
  open = 'open',
  close = 'close',
  inClose = 'inClose', // in-animation
  inOpen = 'inOpen' // in-animation
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
  }
}
