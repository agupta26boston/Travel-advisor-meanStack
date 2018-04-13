import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TripService {

  result:any;

  constructor(private _http: Http) { }

  get Articles() {
    return this._http.get("/api/all")
      .map(result => this.result = result.json());
  }

}
