import { IRole, UserRole } from "@connectedawareness/process-system-interfaces";
import { Organisation } from "./organisation.dto.";
import { User } from "./user.dto";
import { Deserializable } from "../deserializable.interface";

export class Role implements IRole, Deserializable {
  public organisation: Organisation;
  public user: User;
  public userAlias: string;
  public userRoles: UserRole[]

  deserialize(input: any, depth?: number): this {
    if (!input) return null;
    if(depth === 0) return null;
    if(!depth) depth = 5;
    Object.assign(this, input);
    this.user = new User().deserialize(input.user);
    this.organisation = new Organisation().deserialize(input.organisation, --depth);
    return this;
  }
}