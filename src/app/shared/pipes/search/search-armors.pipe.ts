import { Armors } from './../../../core/services/armors/armors.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArmors',
  pure: false
})
export class SearchArmorsPipe implements PipeTransform {
  transform(value: Armors[] | null, searchName: string = ''): Armors[] {
    if(!value){return []; }
    if(!searchName){return value; }
    return value.filter((armor) => {
      return armor.name.toLowerCase().includes(searchName)
    })
  }
}
