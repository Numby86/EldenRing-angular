import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';


@NgModule({
  declarations: [
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CharacterModule { }
