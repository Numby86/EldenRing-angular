import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BossesDetailRoutingModule } from './bosses-detail-routing.module';
import { BossesDetailComponent } from './bosses-detail.component';


@NgModule({
  declarations: [
    BossesDetailComponent
  ],
  imports: [
    CommonModule,
    BossesDetailRoutingModule
  ]
})
export class BossesDetailModule { }
