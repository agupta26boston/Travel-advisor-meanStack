import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationService {

  result:any;

  constructor(private _http: Http) { }

  getDestinations(){
    return this._http.get("/api/all")
      .map(result => this.result = result.json());
  }

  getDestination(id) {
    return this._http.get("/api/destinations/"+id)
      .map(result => this.result = result.json());
  }
  
}
