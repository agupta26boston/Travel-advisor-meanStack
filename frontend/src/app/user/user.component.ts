import { Component, OnInit } from '@angular/core';
import {DestinationsService} from '../destinations.service';
import {}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private destinationsService: DestinationsService ) { }

  ngOnInit() {
  }

}
