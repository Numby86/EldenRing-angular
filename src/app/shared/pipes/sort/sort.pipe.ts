import { Armors } from './../../../core/services/armors/armors.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {

  transform(weapons: Armors[] | null, weight: string): Armors[] {
    if(!weapons){return []; }
    if(!weight){return weapons; }

    return weapons.sort((a, b) => {
      if (weight === 'asc') {
        return a.weight - b.weight;
      } else if (weight === 'desc') {
        return b.weight - a.weight;
      } else { return 0; }      
    }); 

  }
}
