import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailRoutingModule } from './characters-detail-routing.module';
import { CharactersDetailComponent } from './characters-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CharactersDetailComponent
  ],
  imports: [
    CommonModule,
    CharactersDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CharactersDetailModule { }
