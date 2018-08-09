import { User } from './UserDto';

export class Organisation {

  constructor(
    public id: string,
    public name: string,
    public coordinator_id: string,
    public version: string,
    public users: User[],
  ) {}

}
