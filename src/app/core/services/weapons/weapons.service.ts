import { LoaderService } from './../loader/loader.service';
import { Weapon } from './api-weaponId.model';
import { ApiWeapon } from './weapon.model';

import { Observable, map, tap } from 'rxjs';
import { ApiWeaponsService } from './api/api-weapons.service';
import { Injectable } from '@angular/core';
import { ApiWeaponResponse } from './api-weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(
    private apiWeaponsService: ApiWeaponsService,
    private loaderService: LoaderService
  ) { }

  public getWeapons(): Observable<ApiWeapon[]>{
    this.loaderService.showLoading();
    return this.apiWeaponsService.getApiWeapons().pipe(
      map((weapons: ApiWeaponResponse) => {
          return weapons.data;
        }),
        tap(() => this.loaderService.hideLoading())
      )}
    
  public getWeaponDetail(id: string): Observable<Weapon>{
    this.loaderService.showLoading();
    return this.apiWeaponsService.getApiWeaponDetail(id).pipe(
      map((weapon: Weapon) => {
        return weapon;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}

