import { Injectable } from '@angular/core';
import { DashboardLink, OrganisationField, links } from './dashboard-page.config';
import { User } from '../../classes/userMgmt/user.dto';
import { UserRole } from '@connectedawareness/process-system-interfaces';

@Injectable()
export class DashboardService {

  constructor() { }

  public getDashboardConfig(user: User): OrganisationField[] {
    let fields:OrganisationField[] = [];
    fields.push(new OrganisationField('Default', []))
    links.forEach(link => {
      if (link.roles.length === 0 && this.checkCapabilities(link, user)) {
        fields[0].links.push(link);
      }
    });
    user.rolesInOrganisations.forEach(role => {
      let obj = new OrganisationField(role.organisation.name, []);
      links.forEach(link => {
        if (link.roles.length > 0 && this.checkUserRoles(link.roles, role.userRoles)) {
          obj.links.push(link);
        }
      });
      fields.push(obj);
    });

    return fields;
  }

  checkCapabilities(link: DashboardLink, user: User): boolean {
    if(link.capabilities.length === 0) return true;
    let b = false;
    link.capabilities.forEach(linkCapability => {
      user.capabilities.forEach(userCapability => {
        if(linkCapability === userCapability) b = true;
      });
    });
    return b;
  }

  checkUserRoles(linkRoles: UserRole[], organisationRoles: UserRole[]): boolean {
    let b = false;
    linkRoles.forEach(linkRole => {
      organisationRoles.forEach(organisationRole => {
        if(linkRole === organisationRole) b = true;
      });
    });
    return b;
  }
  
}
