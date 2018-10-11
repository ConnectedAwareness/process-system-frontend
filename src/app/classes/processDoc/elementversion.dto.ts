import { IElementVersion } from "@connectedawareness/process-system-interfaces";
import { Element } from "./element.dto";

export class ElementVersion implements IElementVersion {
  constructor(
    public elementVersionId: string,
    public element: Element,
    public order: number,
    public text: string
  ) { }
}
