import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {Routes, RouterModule} from '@angular/router';
import {DestinationsService} from './destinations.service';
import { Component } from '@angular/core/src/metadata/directives';
// app routes will hold all the routes and the array will be of javascript object.
const appRoutes: Routes = [
  {
    // will create a URL: localhost:4200
    path: '',
    component: HomeComponent
  } ,
  {
    // will create a URL: localhost:4200/login
    path: 'login',
    component: UserComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // to register routes in angular
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  // service file will be the provider.
  providers: [DestinationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

