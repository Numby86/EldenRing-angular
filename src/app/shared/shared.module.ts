import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { RandomPipe } from './pipes/random/random.pipe';



@NgModule({
  declarations: [
    PaginationPipe,
    RandomPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationPipe,
    RandomPipe
  ]
})
export class SharedModule { }
