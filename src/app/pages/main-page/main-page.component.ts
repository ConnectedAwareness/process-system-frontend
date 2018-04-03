import { Component, OnInit } from '@angular/core';
import { LogService } from '../../login/services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private _logService: LogService,
    private router: Router
  ) { }

  ngOnInit() {
    if(!this._logService.isUserSet()){
      this.router.navigate(['/'])
    }
  }

}
