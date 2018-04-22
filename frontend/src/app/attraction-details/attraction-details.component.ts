
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-attraction-details',
  templateUrl: './attraction-details.component.html',
  styleUrls: ['./attraction-details.component.scss']
})
export class AttractionDetailsComponent implements OnInit {
  commentForm: FormGroup;
  userIsAuthenticated: Observable<boolean>;
  //authUser: UserProfile;
  //trip: Trip;


  constructor(
  //  private store: Store<fromRoot.State>,
    private formBuilder: FormBuilder
  ) {
    // this.userIsAuthenticated = this.store.select(fromRoot.getAuthStatus);
   }

  ngOnInit() {
    // this.initCommentForm();
  }

  onCommentSave() {}
  // {
  //   const newComment = this.commentForm.value;
  //   if(this.commentForm.valid){
  //     this.store.dispatch(new AddCommentAction(newComment));
  //     this.resetForm();
  //   }
  // }

  // initCommentForm(){
  //   if (this.authUser && this.trip) {
  //     this.commentForm = this.formBuilder.group({
  //       message: ['', Validators.required],
  //       user_id: [this.authUser.id, Validators.required],
  //       trip_id: [this.trip.id, Validators.required]
  //     });
  //   } else {
  //     this.commentForm = this.formBuilder.group({
  //       message: ['', Validators.required],
  //       user_id: ['', Validators.required],
  //       trip_id: ['', Validators.required]
  //     });
  //   }
  // }

  // onCancel() {
  //   this.resetForm();
  // }

  // resetForm() {
  //   this.initCommentForm();
  // }

  // onKeyPressed(keyCode){
  //   if(keyCode == 13){
  //     this.onCommentSave();
  //   }
  // }
}
