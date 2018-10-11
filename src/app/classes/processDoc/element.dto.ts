import { IElement, ElementType } from "@connectedawareness/process-system-interfaces";
import { ElementVersion } from "./elementversion.dto";
export class Element implements IElement {
  constructor(
    public elementId: string,
    public type: ElementType,
    public elementVersions: ElementVersion[]
  ){}
}
