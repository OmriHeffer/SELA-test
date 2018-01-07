import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';

import { UserService } from './shared/user.service';
import { PagerService } from './shared/pager.service';

const routes: Routes = [
  { path: 'adduser', component: AddUserComponent },
  { path: '', component: UserListComponent },
  { path: '**', redirectTo: ''}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    UserService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
