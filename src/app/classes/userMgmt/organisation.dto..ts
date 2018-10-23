import { IOrganisation } from "@connectedawareness/process-system-interfaces";
import { Role } from "./role.dto";
import { Deserializable } from "../deserializable.interface";

export class Organisation implements IOrganisation, Deserializable {
  public organisationId: string;
  public name: string;
  public version: string;
  public users: Role[];

  public deserialize(input: any, depth?: number): this {
    if (!input) return null;
    if(depth === 0) return null;
    if(!depth) depth = 5;
    Object.assign(this, input);
    this.users = input.users.map((user)=>new Role().deserialize(user, --depth));
    return this;
  }
}