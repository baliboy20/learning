import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-name-editor',
  template: `
 <label>
  Name:
  <input type="text" [formControl]="name">
  
  {{name.value}}
  <button type="button" (click)="clicked($event)">CLICK</button>
</label>
  
  `

   ,
  styles: []
})
export class NameEditorComponent implements OnInit {

  name  = new FormControl();
  constructor() { }

  ngOnInit() {
  }

  clicked() {
    this.name.setValue('NEW VALUES');
    let a: Object = {};

  }

}
