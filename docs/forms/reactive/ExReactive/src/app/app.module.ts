import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { NameEditorComponent } from './name-editor/name-editor.component';
import { GroupedFormCtlComponent } from './grouped-form-ctl/grouped-form-ctl.component';
import { FormBuildExampleComponent } from './form-build-example/form-build-example.component';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    GroupedFormCtlComponent,
    FormBuildExampleComponent,

  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
