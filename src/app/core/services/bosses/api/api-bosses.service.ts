import { Boss } from './../Api-bossesId';
import { Injectable } from '@angular/core';
import { BossesResponse } from '../ApiBosses.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BOSSES_URL = 'https://eldenring.fanapis.com/api/bosses';
const limit = '?limit=100';
const page = '&page=5';

@Injectable({
  providedIn: 'root'
})
export class ApiBossesService {

  constructor(
    private http: HttpClient
  ) {}

  public getApiBosses(): Observable<BossesResponse>{
    return this.http.get<BossesResponse>(`${API_BOSSES_URL}${limit}`);
  }

  public getApiBossDetail(id: string): Observable<Boss>{
    return this.http.get<Boss>(`${API_BOSSES_URL}/${id}`)
  }
}
