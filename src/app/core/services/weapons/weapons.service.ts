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

  // public getWeapons(): Observable<ApiWeapon[]>{
  //   return this.apiWeaponsService.getApiWeapons().pipe(
  //     map((weapons: ApiWeaponResponse[]) => {
  //         return weapons.data;
  //       })
  //     )}
  }

