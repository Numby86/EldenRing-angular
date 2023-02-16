import { FormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmorsRoutingModule } from './armors-routing.module';
import { ArmorsComponent } from './armors.component';


@NgModule({
  declarations: [
    ArmorsComponent
  ],
  imports: [
    CommonModule,
    ArmorsRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class ArmorsModule { }
