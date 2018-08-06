import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '../../../../../../node_modules/@angular/forms';
import { DTO } from '../../dto';
import { DTS } from '../../data-type-structures/dts';

@Component({
  selector: 'ca-dynamic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() structure: DTS[] = [];
  @Input() content: DTO;
  form: FormGroup;
  payLoad = '';

  constructor() { }

  ngOnInit() {
    let group: any = {};

    this.structure.forEach(struct => {
      group[struct.key] = struct.generateFormControl(this.content);
    });
    this.form = new FormGroup(group);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
