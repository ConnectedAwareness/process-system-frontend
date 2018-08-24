import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ca-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  private links = [
    {
      title: 'Profilseite',
      link: 'profile',
      description: 'Auf dieser Seite können Sie Eigenschaften ihres Profils und ihrer Organisation einsehen und bearbeiten'
    },
    {
      title: 'Page 01',
      link: 'page01',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
      title: 'Page 01',
      link: 'page01',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
      title: 'Page 01',
      link: 'page01',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
      title: 'Page 01',
      link: 'page01',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    },
    {
      title: 'Page 01',
      link: 'page01',
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'
    }
  ];

  constructor() {
    this.links = this.listToMatrix(this.links, 3);
    console.log(this.links);
  }
  private listToMatrix(list, elementsPerSubArray) {
    const matrix = [];
    for (let i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
        k++;
        matrix[k] = [];
      }
      matrix[k].push(list[i]);
    }

    return matrix;
  }
  ngOnInit() {
  }

}
