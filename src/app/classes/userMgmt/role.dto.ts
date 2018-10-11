import { IRole, UserRole } from "@connectedawareness/process-system-interfaces";
import { Organisation } from "./organisation.dto.";
import { User } from "./user.dto";

export class Role implements IRole {
  constructor(
    public organisation: Organisation,
    public user: User,
    public userAlias: string,
    public userRoles: UserRole[]
  ){}
}
