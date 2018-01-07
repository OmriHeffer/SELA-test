import { UserService } from '../shared/user.service';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('firstName') firstName: any;
  @ViewChild('lastName') lastName: any;

  constructor(private userSerivce: UserService,
              private router: Router,
              private zone: NgZone) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = new User(this.firstName.value, this.lastName.value);
    console.log(user);
    this.userSerivce.addUser(user);
    this.zone.run(() => {
      this.router.navigate(['']);
    });
  }

}
