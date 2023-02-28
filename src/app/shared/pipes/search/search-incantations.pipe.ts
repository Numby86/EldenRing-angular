import { Incantations } from './../../../core/services/incantations/incantations.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchIncantations',
  pure: false
})
export class SearchIncantationsPipe implements PipeTransform {
  transform(value: Incantations[] | null, searchName: string = ''): Incantations[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((incantation) => {
      return incantation.name.toLowerCase().includes(searchName)
    })
  }
}
