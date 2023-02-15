import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalismansRoutingModule } from './talismans-routing.module';
import { TalismansComponent } from './talismans.component';


@NgModule({
  declarations: [
    TalismansComponent
  ],
  imports: [
    CommonModule,
    TalismansRoutingModule,
    SharedModule
  ]
})
export class TalismansModule { }
