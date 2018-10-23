import { IRolesInOrganisation, IToken } from "@connectedawareness/process-system-interfaces/dist/auth/token.interface";
import * as jwt_decode from "jwt-decode";
import { Deserializable } from "../deserializable.interface";

export class Token implements IToken, Deserializable {
  public userId: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public rolesInOrganisations: RolesInOrganisation[];
  public capabilities: string[];
  public tokenString: string;

  public deserialize(input: any, depth?: number): this {
    if (!input) return null;
    if (depth === 0) return null;
    if (!depth) depth = 5;
    Object.assign(this, input);
    // console.log(input, this);
    
    this.rolesInOrganisations = input.rolesInOrganisations.map(role => new RolesInOrganisation().deserialize(role, --depth));
    return this;
  }
}

export function getTokenObject(token: string): Token {
  let obj = jwt_decode(token);
  obj.tokenString = token;
  return new Token().deserialize(obj, 5);
}



// TODO: implement IRolesInOrganisation
export class RolesInOrganisation {

  public userAlias: string;
  public userRoles: string[];
  public organisationId: string;

  public deserialize(input: any, depth?: number): RolesInOrganisation {
    if (!input) return null;
    if (depth === 0) return null;
    Object.assign(this, input);
    return this;
  }
}
