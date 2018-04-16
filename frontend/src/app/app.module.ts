import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import {UserService } from './user.service';
import { CreateUserComponent } from './create-user/create-user.component';
// app routes will hold all the routes and the array will be of javascript object.
const appRoutes: Routes = [
  {
    // will create a URL: localhost:3000
    path: '',
    component: HomeComponent
  } ,
  {
    // will create a URL: localhost:3000/login
    path: 'login',
    component: UserComponent
  },
  {
    // url: localhost:3000/createUser
    path: 'createUser',
    component: CreateUserComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes), // to register routes in angular
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

