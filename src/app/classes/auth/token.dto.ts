import { IRolesInOrganisation, IToken } from "@connectedawareness/process-system-interfaces/dist/auth/token.interface";
import * as jwt_decode from "jwt-decode";

export class Token implements IToken {
  constructor(
    public userId: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public rolesInOrganisations: RolesInOrganisation[],
    public capabilities: string[],
    public tokenString: string
  ) { }
}

export function getTokenObject(token: string): Token {
  let obj = jwt_decode(token);
  return new Token(
    obj['userId'],
    obj['email'],
    obj['firstName'],
    obj['lastName'],
    obj['capabilities'],
    obj['rolesInOrganisations'],
    token
  );
}


export class RolesInOrganisation extends IRolesInOrganisation {
  constructor(
    public userAlias: string,
    public userRoles: string[],
    public organisationId: string
  ) {
    super()
  }
}
