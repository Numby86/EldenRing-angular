import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArmorsDetailRoutingModule } from './armors-detail-routing.module';
import { ArmorsDetailComponent } from './armors-detail.component';


@NgModule({
  declarations: [
    ArmorsDetailComponent
  ],
  imports: [
    CommonModule,
    ArmorsDetailRoutingModule,
    RouterModule
  ]
})
export class ArmorsDetailModule { }
