import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchPipe } from './pipes/search/search-bosses.pipe';
import { SearchWeaponsPipe } from './pipes/search/search-weapons.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { ViewCardsComponent } from './components/view-cards/view-cards.component';
import { SearchArmorsPipe } from './pipes/search/search-armors.pipe';
import { SearchIncantationsPipe } from './pipes/search/search-incantations.pipe';
import { SearchItemsPipe } from './pipes/search/search-items.pipe';
import { SearchTalismansPipe } from './pipes/search/search-talismans.pipe';



@NgModule({
  declarations: [
    PaginationPipe,
    PaginationComponent,
    SearchPipe,
    SearchWeaponsPipe,
    SortPipe,
    ViewCardsComponent,
    SearchArmorsPipe,
    SearchIncantationsPipe,
    SearchItemsPipe,
    SearchTalismansPipe
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
    ViewCardsComponent,
    SearchArmorsPipe,
    SearchIncantationsPipe,
    SearchItemsPipe,
    SearchTalismansPipe
  ]
})
export class SharedModule { }
