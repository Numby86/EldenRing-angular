import { Talismans } from './../../../core/services/talismans/talismans.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTalismans',
  pure: true
})
export class SearchTalismansPipe implements PipeTransform {
  transform(value: Talismans[] | null, searchName: string = ''): Talismans[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((talisman) => {
      return talisman.name.toLowerCase().includes(searchName)
    })
  }
}
