import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import {SocialLoginModule,AuthServiceConfig,FacebookLoginProvider,GoogleLoginProvider} from "angular5-social-login";



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

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("1726553447414314")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("353435284490-u6e340tln57tvjet0vnuo3i2749pe0je.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes), // to register routes in angular
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],

  providers: [ {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }

