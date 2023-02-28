import { Bosses } from '../../../core/services/bosses/ApiBosses.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBosses',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: Bosses[] | null, searchName: string = ''): Bosses[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((boss) => {
      return boss.name.toLowerCase().includes(searchName)
    })
  }
  
}
