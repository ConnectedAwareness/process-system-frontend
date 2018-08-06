import { User } from "./User";
import { DTO } from "../shared/data-mgmt/dto";

export class Organisation implements DTO{
  
  constructor(
    public id: string,
    public name: string,
    public coordinator_id: string,
    public version: string,
    public users: User[],
  ) {}

  public static fromObject(orga: {id, name, coordinator_id, version, users}) {
    return new Organisation(
      orga.id,
      orga.name,
      orga.coordinator_id,
      orga.version,
      orga.users
    )
  }
}