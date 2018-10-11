import { IVersion } from "@connectedawareness/process-system-interfaces";
import { Node } from "./node.dto";

export class Version implements IVersion {
  constructor(
    public versionId: string,
    public published: boolean,
    public linkedNodeRoot: Node,
    public nodes: Node[]
  ) { }
}
