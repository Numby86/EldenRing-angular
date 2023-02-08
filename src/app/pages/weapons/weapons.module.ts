import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeaponsRoutingModule } from './weapons-routing.module';
import { WeaponsComponent } from './weapons.component';


@NgModule({
  declarations: [
    WeaponsComponent
  ],
  imports: [
    CommonModule,
    WeaponsRoutingModule,
    RouterModule
  ]
})
export class WeaponsModule { }
