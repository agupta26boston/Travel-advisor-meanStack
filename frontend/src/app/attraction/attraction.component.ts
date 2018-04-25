import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  form:FormGroup;
  attraction: Array<Attraction>;


 //public files: any[];
   //this.files = [];
  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute,private fb: FormBuilder) {}
   

  ngOnInit() {
   this.form = this.fb.group({
    'title' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(45)])]
   });
    this.aR.params.subscribe((params) => {
      const id = params['id'];
      this._destinationService.getAttraction(id)
        .subscribe(res => this.attraction = res);
  });

  //maps    
  
}
// ngAfterViewInit(){
// var mapProp = {
//   center: new google.maps.LatLng(42.3601,71.0589),
//   zoom: 5,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
// }


addAttraction(attr : string) {
 console.log("form value" + attr);
  this._destinationService.insertAttraction(attr)
    .subscribe(newArticle => {
      this.attraction.push(newArticle);
      this.router.navigateByUrl('/');
    })
}

// onFileChanged(event: any) {
//   this.files = event.target.files;
// }

// onUpload() {
//   const formData = new FormData();
//   for (const file of this.files) {
//       formData.append(name, file, file.name);
//   }
  // this._http.post('url', formData).subscribe(x => ....);
}

