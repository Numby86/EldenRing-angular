import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BossesRoutingModule } from './bosses-routing.module';
import { BossesComponent } from './bosses.component';



@NgModule({
  declarations: [
    BossesComponent,
  ],
  imports: [
    CommonModule,
    BossesRoutingModule,
    RouterModule
  ]
})
export class BossesModule { }
