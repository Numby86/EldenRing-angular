import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { RandomPipe } from './pipes/random/random.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    PaginationPipe,
    RandomPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationPipe,
    RandomPipe,
    PaginationComponent
  ]
})
export class SharedModule { }
