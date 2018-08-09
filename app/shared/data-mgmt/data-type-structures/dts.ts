import { FormControl, Validators } from "../../../../../node_modules/@angular/forms";
import { DTO } from "../dto";

export enum DTN {
  STRING = 'string',
  NUMBER = 'number',
  LIST = 'list',
  DATE = 'date'
}

export abstract class DTS {
  public key: string;
  public label: string;
  public required: boolean;
  public disabled: boolean;
  public order: number;
  public type: DTN;

  constructor(options: {
    key?: string,
    label?: string,
    required?: boolean,
    disabled?: boolean,
    order?: number,
    type?: DTN
  } = {}) {
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.disabled = !!options.disabled || false;
    this.order = options.order === undefined ? 1 : options.order;
    this.type = options.type || DTN.STRING;
  }

  generateFormControl(dto: DTO): FormControl {
      return this.required ?
        new FormControl(dto[this.key] || '', Validators.required) :
        new FormControl(dto[this.key] || '');
  }
}
