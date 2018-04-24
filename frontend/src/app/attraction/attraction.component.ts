import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { Comment } from '../comment';
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

  commentFrm: FormGroup;
  attraction: Array<Attraction>;
  comment: Array<Comment>;

 //public files: any[];
 //  this.files = [];
  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute,private fb: FormBuilder) {}
   

  ngOnInit() {

    // this.commentFrm = this.fb.group({
    //   'comment_content' : [null, Validators.compose([Validators.minLength(10), Validators.maxLength(45)])]
    // });
    this.aR.params.subscribe((params) => {
      const id = params['id'];
      this._destinationService.getAttraction(id)
        .subscribe(res => this.attraction = res);
  });
}


// addComment(comment : Comment) {
// //  console.log("form value" + attr);
//   this._destinationService.insertComment(comment)
//     .subscribe(newComment => {
//       this.comment.push(newComment);
//       this.router.navigated = false;
//     })
// }

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

