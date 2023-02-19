import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: true
})
export class PaginationPipe implements PipeTransform {

  transform<T>(data: T[], page: number = 0): T[] {
    return data.slice(page, page + 20);
  }

}
