import { DTS, DTN } from "./dts";

export class StringDTS  extends DTS {
  type = DTN.STRING;
}

export class NumberDTS  extends DTS {
  type = DTN.NUMBER;
}

export class ListDTS  extends DTS {
  type = DTN.LIST;
}

export class DateDTS  extends DTS {
  type = DTN.DATE;
}
