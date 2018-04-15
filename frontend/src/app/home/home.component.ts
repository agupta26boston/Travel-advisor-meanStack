import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';
import { Destination } from '../destination';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destinations: Array<Destination>;
  searchedDest :Destination;

  constructor(private _destinationService: DestinationService) { }

  ngOnInit() {
    this._destinationService.getDestinations()
      .subscribe(res => this.destinations = res);
  }

  searchDestination(title: string): Destination {
    console.log("title is "+ title);
   this.searchedDest= this.destinations
    .filter(searchedDest => searchedDest.title === title)
    .pop();
    console.log(this.searchedDest.title);
    return this.searchedDest;
}

}
