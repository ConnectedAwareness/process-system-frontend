import { Category } from './../../classes/survey/Category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aside-category',
  templateUrl: './asideCategory.component.html',
  styleUrls: ['./asideCategory.component.scss']
})
export class AsideCategoryComponent implements OnInit {

  @Input('category')
  private category: Category;

  @Input()
  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  private toggle(){
    this.isOpen = !this.isOpen;
  }

}
