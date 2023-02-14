import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';


@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserLoginModule { }
