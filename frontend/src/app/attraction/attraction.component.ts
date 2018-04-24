import { Component, OnInit } from '@angular/core';
import { Attraction } from '../attraction';
import { Comment } from '../comment';
import { DestinationService } from '../destination.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  commentFrm: FormGroup;
  attraction: Array<Attraction>;
  comment: Array<Comment> = [];

  constructor(private _destinationService: DestinationService, private router: Router, private aR: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.commentFrm = this.fb.group({
      'comment_content' : [null]
    });
    this.aR.params.subscribe((params) => {
      const id = params['id'];
      this._destinationService.getAttraction(id)
        .subscribe(res => this.attraction = res);
  });
}

addComment(comment: Comment,id) { 
  console.log(this.commentFrm.value);
  this._destinationService.insertComment(comment,id)
    .subscribe(newComment => {
      this.comment.push(newComment);
      this.router.navigated=false;       
    });
}

}

