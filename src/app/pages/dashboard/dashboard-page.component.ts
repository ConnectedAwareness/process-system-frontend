import { Component, OnInit } from '@angular/core';
import {OrganisationField } from './dashboard-page.config';
import { AuthService } from '../../shared/services/auth/auth.service';
import 'rxjs/add/operator/map';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ca-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit{

  private organisation_fields: OrganisationField[];
  private title = "Herzlich Willkommen, {{this.auth.user.firstName}}!";
  private subtitle = 'Auf dieser Seite befinden sich Verweise auf folgende Aktionen:';


  constructor(private auth: AuthService, private dashboardService: DashboardService) {}
  ngOnInit(){
    this.organisation_fields = this.dashboardService.getDashboardConfig(this.auth.user);
  }
}
