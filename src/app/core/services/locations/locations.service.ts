import { Observable, map, tap } from 'rxjs';
import { LoaderService } from './../loader/loader.service';
import { Locations, ResApiLocations } from './locations.data';
import { ApiLocationsService } from './api/api-locations.service';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocationsService {

constructor(
  private apiLocationsService: ApiLocationsService,
  private loaderService: LoaderService
){}

public getBosses(): Observable<Locations[]>{
  this.loaderService.showLoading();
  return this.apiLocationsService.getApiLocations().pipe(
    map((locations: ResApiLocations) => {
      return locations.data;
    }),
    tap(() => this.loaderService.hideLoading())
  )
}
}
