import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DTS } from '../../data-type-structures/dts';
import { DTO } from '../../dto';

@Component({
  selector: 'ca-dynamic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  @Input()
  public structure: DTS[];

  @Input()
  public content: DTO[];

  @Output()
  public selected: EventEmitter<Object> = new EventEmitter();

  private selectedRow: number;

  constructor() { }

  ngOnInit() {}

  public select(i: number) {
    if (i === this.selectedRow) {
      this.selectedRow = null;
      this.selected.emit(null);
    } else {
      this.selectedRow = i;
      this.selected.emit(this.content[i]);
    }
  }
}
