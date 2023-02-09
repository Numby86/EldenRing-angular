import { Weapon } from './api-weaponId.model';
import { ApiWeapon } from './weapon.model';

import { Observable, map } from 'rxjs';
import { ApiWeaponsService } from './api/api-weapons.service';
import { Injectable } from '@angular/core';
import { ApiWeaponResponse } from './api-weapon.model';

@Injectable({
  providedIn: 'root'
})
export class WeaponsService {

  constructor(
    private apiWeaponsService: ApiWeaponsService
  ) { }

  public getWeapons(): Observable<ApiWeapon[]>{
    return this.apiWeaponsService.getApiWeapons().pipe(
      map((weapons: ApiWeaponResponse) => {
          return weapons.data;
        })
      )}
    
  public getWeaponDetail(id: string): Observable<Weapon>{
    return this.apiWeaponsService.getApiWeaponDetail(id).pipe(
      map((weapon: Weapon) => {
        return weapon;
      })
    )
  }
}

