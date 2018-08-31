
import * as jwt_decode from "jwt-decode";

export function getUserFromToken(token: string): User {
  let obj = jwt_decode(token);
  console.log(obj);
  return new User(
    obj['userId'],
    obj['email'],
    obj['firstName'],
    obj['lastName'],
    obj['capabilities'],
    obj['rolesInOrganisations'],
    obj['iat'],
    obj['exp'],
    token
  );
}

export class User {
  constructor(
    public userId: string,
    public email?: string,
    public firstName?: string,
    public lastName?: string,
    public capabilities?: UserCapability[],
    public rolesInOrganisations?: {organisationName: string, userAlias?: string, userRoles: UserRole[]}[],
    public iat?: number,
    public exp?: number,
    public token?: string
  ) {}
}

export enum UserRole {
  Connectee = 'Connectee',
  Connector = 'Connector',
  ProcessCoordinator = 'ProcessCoordinator'
}

export enum UserCapability {
  Connector = 'Connector',
  ITAdmin = 'ITAdmin',
  AwarenessIntegrator = 'AwarenessIntegrator',
  // ProcessCoordinator = 'ProcessCoordinator'
}