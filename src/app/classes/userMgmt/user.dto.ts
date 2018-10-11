import { IUser, UserCapability } from "@connectedawareness/process-system-interfaces";
import { Role } from "./role.dto";

export class User implements IUser {
  constructor(
    public userId: string,
    public email: string,
    public firstName: string,
    public lastName: string,
    public capabilities: UserCapability[],
    public rolesInOrganisations: Role[],
    public token?: string,
    public iat?: number,
    public exp?: number
  ) { }
}
