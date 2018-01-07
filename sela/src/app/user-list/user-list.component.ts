import { UserService } from '../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { PagerService } from '../shared/pager.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users;
  public pager: any = {};
  public pagedItems;

  constructor(public userService: UserService,
    private pagerService: PagerService) {
  }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
        this.setPage(1);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.numOfPages) {
      return;
    }

    this.pager = this.pagerService.getPager(this.users.length, page, 10, 7);
    this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
