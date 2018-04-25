import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { Comment } from '../comment';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { identifierModuleUrl } from '@angular/compiler';
import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  commentFrm: FormGroup;
  attraction: Array<Attraction>;
  comment: Array<Comment> = [];

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
 //public files: any[];
   //this.files = [];
  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute,private fb: FormBuilder) {}
   

  ngOnInit() {
    this.aR.params.subscribe((params) => {
    this.commentFrm = this.fb.group({
      'comment_content' : [null],
      'attraction_id' : [params['id']]
    });
      const id = params['id'];
      this._destinationService.getAttraction(id)
        .subscribe(res => this.attraction = res);
  });

  //maps    
  
}

addComment(comment: Comment,id) { 
  // console.log(this.commentFrm.value);
  this._destinationService.insertComment(comment,id)
    .subscribe(newComment => {
      this.comment.push(newComment);
      // this.router.navigateByUrl('/attractions/'+id)
      location.reload();
    });
}

deleteComment(commentId) {
  this._destinationService.deleteComment(commentId)
    .subscribe(res => {
      // this.router.navigateByUrl('/');
      location.reload();
    })
}

}

