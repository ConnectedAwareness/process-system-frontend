import { IUser, UserCapability } from "@connectedawareness/process-system-interfaces";
import { Role } from "./role.dto";
import { Deserializable } from "../deserializable.interface";

export class User implements IUser, Deserializable {
  public userId: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public capabilities: UserCapability[];
  public rolesInOrganisations: Role[];

  public deserialize(input: any, depth?: number): this {
    if (!input) return null;
    if(depth === 0) return null;
    if(!depth) depth = 5;
    Object.assign(this, input);
    this.rolesInOrganisations = input.rolesInOrganisations.map((role) => new Role().deserialize(role, --depth));
    return this;
  }
}
