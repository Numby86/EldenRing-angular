import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsDetailRoutingModule } from './weapons-detail-routing.module';
import { WeaponsDetailComponent } from './weapons-detail.component';


@NgModule({
  declarations: [
    WeaponsDetailComponent
  ],
  imports: [
    CommonModule,
    WeaponsDetailRoutingModule,
    RouterModule
  ]
})
export class WeaponsDetailModule { }
