import { IOrganisation } from "@connectedawareness/process-system-interfaces";
import { Role } from "./role.dto";

export class Organisation implements IOrganisation {
  constructor(
    public organisationId: string,
    public name: string,
    public version: string,
    public users: Role[]
  ){}
}
