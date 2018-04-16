import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'destinations/:id',
    component: DestinationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
