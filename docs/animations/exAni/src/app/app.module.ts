import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {AboutComponent} from "./about/about.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const route: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
]
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, HomeModule, AboutModule, RouterModule.forRoot(route), BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
