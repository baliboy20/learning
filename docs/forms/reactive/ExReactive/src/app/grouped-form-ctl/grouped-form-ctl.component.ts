import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-grouped-form-ctl',
    template: `
    <form [formGroup]="userForm" (ngSubmit)="onFormSubmit()">
    Name: <input formControlName="name"  placeholder="Enter Name">
    Age: <input formControlName="age"  placeholder="Enter Age">
    City: <input formControlName="city"  placeholder="Enter City">
    Country: <input formControlName="country" placeholder="Enter Country">
         <button type="submit">Submit</button>
         
         <br> valid:{{userForm.valid}}
 </form> 
  `,
    styles: []
})
export class GroupedFormCtlComponent implements OnInit {

    constructor() {
    }

    userForm = new FormGroup({
        name: new FormControl('Mahesh', Validators.maxLength(10)),
        age: new FormControl(20, Validators.required),
        city: new FormControl(),
        country: new FormControl()
    });

    ngOnInit() {
    }

    onSubmit(ev) {
        console.log(this.profileForm.value);
    }

}
