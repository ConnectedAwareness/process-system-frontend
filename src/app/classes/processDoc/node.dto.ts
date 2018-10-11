import { INode } from "@connectedawareness/process-system-interfaces";
import { ElementVersion } from "./elementversion.dto";

export class Node implements INode {
  constructor(
    public nodeId: string,
    public nodes: Node[],
    public elementVersion: ElementVersion
  ) { }
}
