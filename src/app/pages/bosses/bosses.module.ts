import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BossesRoutingModule } from './bosses-routing.module';
import { BossesComponent } from './bosses.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BossesComponent,
  ],
  imports: [
    CommonModule,
    BossesRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class BossesModule { }
