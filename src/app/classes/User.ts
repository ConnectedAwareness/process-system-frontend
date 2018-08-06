import { DTO } from "../shared/data-mgmt/dto";

export class User implements DTO{
  constructor(
    public id: string,
    public username: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public lastapprovedversion: string
  ) {}

  public static fromObject(user: {id, username, firstname, lastname, email, lastapprovedversion}) {
    return new User(
      user.id,
      user.username,
      user.firstname,
      user.lastname,
      user.email,
      user.lastapprovedversion
    )
  }
}