import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { SearchWeaponsPipe } from './pipes/search/search-weapons.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { ViewCardsComponent } from './components/view-cards/view-cards.component';



@NgModule({
  declarations: [
    PaginationPipe,
    PaginationComponent,
    SearchPipe,
    SearchWeaponsPipe,
    SortPipe,
    ViewCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginationPipe,
    PaginationComponent,
    SearchPipe,
    SearchWeaponsPipe,
    SortPipe,
    ViewCardsComponent
  ]
})
export class SharedModule { }
