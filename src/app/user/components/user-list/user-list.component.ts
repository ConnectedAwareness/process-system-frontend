import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  selectedUser: User = null;

  constructor(
    private _userService: UserService
  ) { }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers(): void {
    this._userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
