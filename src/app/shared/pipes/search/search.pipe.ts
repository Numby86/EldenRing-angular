import { ApiWeapon } from './../../../core/services/weapons/weapon.model';
import { Bosses } from './../../../core/services/bosses/ApiBosses.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
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

// export class SearchPipe implements PipeTransform {

//   transform<T>(data: T[] | null, searchName: string = ''): T[] {
//     if(!data){return []; }
//     if(!searchName){return data; }
//     return data.filter((res) => {
//       return res.name.toLowerCase().includes(searchName)
//     })
//   }
// }