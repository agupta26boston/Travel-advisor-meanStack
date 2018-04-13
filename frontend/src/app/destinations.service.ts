import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// Reactive Extensions Library for JavaScript

@Injectable()
export class DestinationsService {

  result: any;
  constructor(private http: Http) { }
  getTrips() {
    return this.http.get('/api/all')
      .map(result => this.result = result.json());
    // to convert to json format
  }
}
