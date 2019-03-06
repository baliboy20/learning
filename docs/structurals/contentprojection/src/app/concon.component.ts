import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concon',
  template: `
    <p style="background-color: yellow">
     <b> <ng-content select=".header"></ng-content></b>
      <ng-content select=".body"></ng-content>
    </p>
  `,
  styles: []
})
export class ConconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
