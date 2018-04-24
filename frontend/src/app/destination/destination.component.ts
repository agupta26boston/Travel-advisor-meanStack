import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../destination.service';
import { Destination } from '../destination';
import { Router, ActivatedRoute } from '@angular/router';
// import { Attraction } from '../attraction';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {

  destination: Array<Destination>;
  // attraction: Array<Attraction>;

  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute) { }

  ngOnInit() {
    this.aR.params.subscribe((params) => {
      const id = params['id'];

      this._destinationService.getDestination(id)
        .subscribe(res => this.destination = res);

      // this._destinationService.getAttraction(id)
      //   .subscribe(res => this.attraction = res);
    });

  }

}
