import { Armor } from './../armorsID.model';
import { ResArmors } from './../armors.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL_ARMORS = 'https://eldenring.fanapis.com/api/armors?limit=100';

@Injectable({
  providedIn: 'root'
})
export class ApiArmorsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiArmors(): Observable<ResArmors>{
    return this.http.get<ResArmors>(`${API_URL_ARMORS}`)
  }

  public getApiArmorsDetail(id: string): Observable<Armor>{
    return this.http.get<Armor>(`${API_URL_ARMORS}/${id}`)
  }
}
