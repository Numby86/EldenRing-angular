import { ApiWeaponResponse } from './../api-weapon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_WEAPON_URL = 'https://eldenring.fanapis.com/api/weapons';
const limit = '?limit=20&page=1';

@Injectable({
  providedIn: 'root'
})
export class ApiWeaponsService {

  constructor(
    private http: HttpClient
  ) { }

    public getApiWeapons(): Observable<ApiWeaponResponse[]>{
      return this.http.get<ApiWeaponResponse[]>(`${API_WEAPON_URL}`);
    }

}
