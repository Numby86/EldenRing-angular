import { SharedModule } from './../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncantationsRoutingModule } from './incantations-routing.module';
import { IncantationsComponent } from './incantations.component';


@NgModule({
  declarations: [
    IncantationsComponent
  ],
  imports: [
    CommonModule,
    IncantationsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class IncantationsModule { }
