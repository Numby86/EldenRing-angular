import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCharacterRoutingModule } from './create-character-routing.module';
import { CreateCharacterComponent } from '../create-character/create-character.component';


@NgModule({
  declarations: [
    CreateCharacterComponent
  ],
  imports: [
    CommonModule,
    CreateCharacterRoutingModule,
    RouterModule
  ]
})
export class CreateCharacterModule { }
