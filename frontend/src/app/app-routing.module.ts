import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'destinations/:id',
    component: DestinationComponent
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
