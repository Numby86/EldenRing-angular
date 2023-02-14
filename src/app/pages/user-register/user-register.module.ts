import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegisterRoutingModule } from './user-register-routing.module';
import { UserRegisterComponent } from './user-register.component';


@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserRegisterModule { }
