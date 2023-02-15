import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { SearchWeaponsPipe } from './pipes/search/search-weapons.pipe';



@NgModule({
  declarations: [
    PaginationPipe,
    PaginationComponent,
    SearchPipe,
    SearchWeaponsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationPipe,
    PaginationComponent,
    SearchPipe,
    SearchWeaponsPipe
  ]
})
export class SharedModule { }
