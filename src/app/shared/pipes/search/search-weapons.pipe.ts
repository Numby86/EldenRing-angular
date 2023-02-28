import { ApiWeapon } from './../../../core/services/weapons/weapon.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchWeapons',
  pure: false
})
export class SearchWeaponsPipe implements PipeTransform{
  transform(value: ApiWeapon[] | null, searchName: string = ''): ApiWeapon[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((weapon) => {
      return weapon.name.toLowerCase().includes(searchName)
    })
  }
}
