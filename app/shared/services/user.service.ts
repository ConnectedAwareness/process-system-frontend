import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../classes/User';
import { DTS, DTN } from '../data-mgmt/data-type-structures/dts';
import { StringDTS } from '../data-mgmt/data-type-structures';

@Injectable()
export class UserService {

  public userData = [{
    id: '1',
    username: 'Test',
    firstname: 'Peter',
    lastname: 'Peterson',
    email: 'peter@peter.de',
    lastapprovedversion: '1.0.0'
  }, {
    id: '2',
    username: 'Test2',
    firstname: 'Max',
    lastname: 'Maxson',
    email: 'max@max.de',
    lastapprovedversion: '1.0.0'
  }, {
    id: '3',
    username: 'Test3',
    firstname: 'Petra',
    lastname: 'Petrason',
    email: 'petra@petra.de',
    lastapprovedversion: '1.0.2'
  }];

  constructor(private http: HttpClient) {
  }

  // public getDataStructure(id?: string): DynamicFormBase<any>[] {

  //   if (id) {
  //     let data = this.getDataById(id);
  //     struct.forEach(element => {
  //       element.value = data[element.key];
  //     });
  //   }
  //   return struct;
  // };

  createOne(dto: User): void {

  }
  readOne(userId: string): User {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].id == userId) {
        return User.fromObject(this.userData[i]);
      }
    }
    return null;
  }
  readMany(): User[] {
    let users: User[] = [];
    this.userData.forEach(user => {
      users.push(User.fromObject(user));
    })
    return users;
  }
  updateOne(dto: User): void {

  }
  deleteOne(id: string): void {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].id === id) {
        this.userData.splice(i, 1);
      }
    }
  }
  getStructure(): DTS[] {
    return [
      new StringDTS({
        key: 'id',
        label: 'Id',
        type: DTN.STRING,
        disabled: true,
        required: true
      }),
      new StringDTS({
        key: 'username',
        label: 'Username',
        type: DTN.STRING
      }),
      new StringDTS({
        key: 'firstname',
        label: 'Vorname',
        type: DTN.STRING
      }),
      new StringDTS({
        key: 'lastname',
        label: 'Nachname',
        type: DTN.STRING
      }),
      new StringDTS({
        key: 'email',
        label: 'Email',
        type: DTN.STRING
      }),
      new StringDTS({
        key: 'lastapprovedversion',
        label: 'Aktuelle Version',
        type: DTN.STRING
      })
    ];
  }
}
