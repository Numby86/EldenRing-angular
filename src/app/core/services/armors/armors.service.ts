import { Armor, ResArmor } from './armorsID.model';
import { LoaderService } from './../loader/loader.service';
import { Armors, ResArmors } from './armors.model';
import { map, Observable, tap } from 'rxjs';
import { ApiArmorsService } from './api/api-armors.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArmorsService {

  constructor(
    private apiArmorsService: ApiArmorsService,
    private loaderService: LoaderService
  ) { }

  public getArmors(): Observable<Armors[]>{
    this.loaderService.showLoading();
    return this.apiArmorsService.getApiArmors().pipe(
      map((armors: ResArmors) => {
        return armors.data;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }

  public getArmorsDetail(id: string): Observable<Armor>{
    this.loaderService.showLoading();
    return this.apiArmorsService.getApiArmorsDetail(id).pipe(
      map((armor: Armor) => {
        return armor;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}
