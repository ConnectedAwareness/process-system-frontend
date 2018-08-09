import { Component, OnInit, Input } from '@angular/core';
import { DTS, DTN } from '../../data-type-structures/dts';
import { FormGroup } from '../../../../../../node_modules/@angular/forms';
import { DTO } from '../../dto';

@Component({
  selector: 'ca-dynamic-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss']
})
export class DynamicFormElementComponent {
  @Input() structure: DTS;
  @Input() form: FormGroup;
  @Input() content: DTO;

  private tableSelection: Object;
  get isValid() { return this.form.controls[this.structure.key].valid; }
  onSelectRow($event): void {
    this.tableSelection = $event;
  }

  delete() {
    // this.organisationService.removeData(this.tableSelection['id'])
  }
}
