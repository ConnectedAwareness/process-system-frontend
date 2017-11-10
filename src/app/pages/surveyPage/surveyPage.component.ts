import { Page } from './../../classes/survey/Page';
import { Category } from './../../classes/survey/Category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveyPage',
  templateUrl: './surveyPage.component.html',
  styleUrls: ['./surveyPage.component.scss']
})
export class SurveyPageComponent implements OnInit {

  private list: Category[];

  constructor() {
    this.list = [];
    this.list.push(new Category(
      "Category 01",
      [
        new Page("Page 01"),
        new Page("Page 02"),
        new Page("Page 03")
      ],
      [new Category(
        "Subcategory 01",
        [
          new Page("Page s01"),
          new Page("Page s02"),
          new Page("Page s03")
        ],
        null)]));
    this.list.push(new Category(
      "Category 02",
      [
        new Page("Page 04"),
        new Page("Page 05"),
        new Page("Page 06")
      ],
      null));
  }

  ngOnInit() {
  }

}
