import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Array<User>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    // life cycle hook for this
    // this.userService.getUser()
    // .subscribe(res => this.user = res);
  }

}
