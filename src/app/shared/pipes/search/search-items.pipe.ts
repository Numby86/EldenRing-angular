import { Item } from './../../../core/services/items/api-itemsResponse.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItems',
  pure: false
})
export class SearchItemsPipe implements PipeTransform {
  transform(value: Item[] | null, searchName: string = ''): Item[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((item) => {
      return item.name.toLowerCase().includes(searchName)
    })
  }
}
