import { ApiWeapon } from './../../../core/services/weapons/weapon.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(weapons: ApiWeapon[] | null, weight: number = 0): ApiWeapon[] {
    if(!weapons){return []; }
    if(!weight){return weapons; }

    
    return weapons.sort((a, b) => ( a.weight > b.weight) ? 1 : -1)
    
    
  }

}
