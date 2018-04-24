import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  form:FormGroup;
  attraction: Array<Attraction>;

 //public files: any[];
 //  this.files = [];
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
}


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

