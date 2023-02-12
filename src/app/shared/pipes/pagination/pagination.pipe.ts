import { Bosses } from './../../../core/services/bosses/Bosses.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(bosses: Bosses[], page: number = 0, search: string = ''): Bosses[] {

    if (search.length === 0) {
      return bosses.slice(page, page + 20);
    }

    const filteredBosses = bosses.filter(boss => boss.name.toLocaleLowerCase().includes(search));

    return filteredBosses;
  }

}
