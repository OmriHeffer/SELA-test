import { User } from '../models/User';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  public users = [];
  private baseUrl = 'http://localhost:3000';

  constructor(private http: Http) {}

  getAllUsers() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(this.baseUrl + '/users', { headers: headers })
      .map(res => res.json());
  }

  addUser(user: User) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post(this.baseUrl + '/user', { 'user': user })
      .subscribe(res => console.log(res),
                 err => console.log( err));
  }

}
