import { myLocations } from './../../../core/services/locations/locations.data';
import { Locations } from '../../../core/services/locations/locations.data';
import { Pipe, PipeTransform } from '@angular/core';
import { findIndex } from 'rxjs';

const randomNuber = () => Math.floor(Math.random() * 2) + 1;

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(locations = myLocations, page: number = randomNuber()): string[] {

    //return locations.slice(page, page + 1);
    return []
  }

}

