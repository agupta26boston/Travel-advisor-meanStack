import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {
  attraction: Array<Attraction>;
  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute) { }

  ngOnInit() {
    this.aR.params.subscribe((params) => {
      const id = params['id'];

      this._destinationService.getAttraction(id)
        .subscribe(res => this.attraction = res);
  });
}

}
