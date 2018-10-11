import { Component, OnInit } from '@angular/core';
import {links, DashboardLink, OrganisationField } from './main-page.config';
import { AuthService } from '../../shared/services/auth/auth.service';
import { UserCapability, UserRole } from '@connectedawareness/process-system-interfaces';
import { Role } from '../../classes/userMgmt/role.dto';

@Component({
  selector: 'ca-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  private default_links: DashboardLink[];
  private organisation_fields: OrganisationField[];


  constructor(private auth: AuthService) {
    this.default_links = [];
    this.organisation_fields = [];
    this.initLinks();
    // this.default_links = this.listToMatrix(this.default_links.filter(this.testRights), 3);
    // this.organisation_links = this.listToMatrix(this.organisation_links.filter(this.testRights), 3);
    // console.log(this.auth.user);
    console.log(this.default_links, this.organisation_fields);
    

  }
  private initLinks(){
    
    this.auth.token.rolesInOrganisations.forEach(field => {
      console.log(field);
      
      this.organisation_fields.push(
        new OrganisationField(
          field['organisationName'],
          []
        )
      )
    });
    for (let i = 0; i < links.length; i++) {
      if(links[i].roles.length == 0) {
        this.default_links.push(links[i]);
      } else {
        this.organisation_fields.forEach(field => {
          // TODO: check access
          field.links.push(links[i]);
        });
      }
      
    }
    // this.organisation_links = [10];
    // this.auth.user.rolesInOrganisations.forEach(role => {
    //   console.log(role.["organisationName"]);
      
      // this.organisation_links.push(new OrganisationField(
      //   role
      // ));
    // });
    // orga_links
  }
  // private listToMatrix(list, elementsPerSubArray) {
    // const matrix = [];
    // for (let i = 0, k = -1; i < list.length; i++) {
    //   if (i % elementsPerSubArray === 0) {
    //     k++;
    //     matrix[k] = [];
    //   }
    //   matrix[k].push(list[i]);
    // }

    // return matrix;
  // }
  // private checkCapabilities(userCapabilities: UserCapability[], linkCapabilities: UserCapability[]): boolean {
  //   linkCapabilities.forEach(linkCapa => {
  //     if (!userCapabilities.includes(linkCapa)) return false;
  //   });
  //   return true;
  // }
  // private checkRoles(userRoles: Role[], linkRoles: UserRole[]): boolean {
  //   linkRoles.forEach(linkRole => {
  //     userRoles.forEach(userRole => {
  //       userRole.
  //     })
  //     // if (!userRoles.includes(linkRole)) return false;
  //   });
  //   return true;
  // }
  // private testRights(link: DashboardLink): boolean {

  //   if (link.capabilities.length > 0 && !this.checkCapabilities(this.auth.user.capabilities, link.capabilities)) {
  //     return false;
  //   }
  //   if (link.roles.length > 0 && !this.checkRoles(this.auth.user.rolesInOrganisations, link.roles)) {
  //     return false;
  //   }
  //   return true;
  // }
  // public checkAccess(link, role): boolean {
  //   console.log(link, role);
    
  //   return true;
  // }

}
