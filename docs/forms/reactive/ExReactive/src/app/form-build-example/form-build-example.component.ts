import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-form-build-example',
  template: `
    
       
       <form [formGroup]="userForm" (submit)="saveUser()">  
         <label for="name">Name</label>
  <input formControlName="name" id="name" />
  
       
       </form>


  <!--<label for="email">Email</label>-->
  <!--<input formControlName="email" id="email" />-->
  <!--<control-messages [control]="userForm.controls.email"></control-messages>-->

  <!--<label for="profile">Profile Description</label>-->
  <!--<textarea formControlName="profile" id="profile"></textarea>-->
  <!--<control-messages [control]="userForm.controls.profile"></control-messages>-->

  <!--<button type="submit" [disabled]="!userForm.valid">Submit</button>-->
<!--</form>-->
       
      
   
  `,
  styles: []
})
export class FormBuildExampleComponent implements OnInit {

    userForm : any;

    constructor(private formBuilder: FormBuilder) {

        this.userForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', [Validators.required, Validators.email]],
            'profile': ['', [Validators.required, Validators.minLength(10)]]
        });

        console.log(this.userForm);
    }

    saveUser() {
        if (this.userForm.dirty && this.userForm.valid) {
            alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
        }
    }


  ngOnInit() {
  }

}
