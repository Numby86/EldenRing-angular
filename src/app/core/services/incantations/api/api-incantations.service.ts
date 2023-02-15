import { ResIncantations } from './../incantations.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL_INCANTATIONS = 'https://eldenring.fanapis.com/api/incantations?limit=100';

@Injectable({
  providedIn: 'root'
})
export class ApiIncantationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiIncantations(): Observable<ResIncantations>{
    return this.http.get<ResIncantations>(`${API_URL_INCANTATIONS}`)
  }
}
