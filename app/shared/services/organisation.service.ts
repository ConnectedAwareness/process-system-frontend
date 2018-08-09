import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Organisation } from '../../classes/Organisation';
import { DTS, DTN } from '../data-mgmt/data-type-structures/dts';
import { StringDTS, ListDTS } from '../data-mgmt/data-type-structures';

@Injectable()
export class OrganisationService {

  public organisationData = [{
    id: "1",
    name: "Organisation 01",
    coordinator_id: "0",
    version: "1.0.1",
    users: this.user.userData
  }, {
    id: "2",
    name: "Organisation 02",
    coordinator_id: "0",
    version: "1.0.1",
    users: this.user.userData
  }, {
    id: "3",
    name: "Organisation 03",
    coordinator_id: "0",
    version: "1.0.6",
    users: this.user.userData
  }];

  constructor(private http: HttpClient, private user: UserService) {
  }

  createOne(dto: Organisation): void{

  }
  readOne(id: string): Organisation{
    for (let i = 0; i < this.organisationData.length; i++) {
      if (this.organisationData[i].id == id) {
        return Organisation.fromObject(this.organisationData[i]);
      }
    }
    return null;
  }
  readMany(): Organisation[]{
    let organisations: Organisation[] = [];
    this.organisationData.forEach(orga => {
      organisations.push(Organisation.fromObject(orga));
    })
    return organisations;
  }
  updateOne(dto: Organisation): void{

  }
  deleteOne(id: string): void{
    console.log(id);
    for (let i = 0; i < this.organisationData.length; i++) {
      if (this.organisationData[i].id === id) {
        this.organisationData.splice(i, 1);
      }
    }
    console.log(this.organisationData);
    
  }
  
  getStructure(): DTS[] {
    return [
      new StringDTS({
        key: 'id',
        label: 'Id',
        disabled: true,
        required: true
      }),
      new StringDTS({
        key: 'name',
        label: 'Name',
        disabled: false
      }),
      new StringDTS({
        key: 'coordinator_id',
        label: 'Coordinator'
      }),
      new StringDTS({
        key: 'version',
        label: 'Version'
      }),
      new ListDTS({
        key: 'users',
        label: 'User'
      })
    ];
  }
}
