import { Injectable } from '@angular/core';
import { BossesResponse } from '../ApiBosses.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

const BOSSES_URL = 'https://eldenring.fanapis.com/api/bosses';

@Injectable({
  providedIn: 'root'
})
export class ApiBossesService {

  constructor(
    private http: HttpClient
  ) {}

  public cargarBosses(){

    return this.http.get<BossesResponse>(BOSSES_URL)
    .pipe(
      map(resp => {
        return resp.data;
      })
    );
  }
}
