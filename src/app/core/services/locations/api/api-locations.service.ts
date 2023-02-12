import { ResApiLocations } from '../locations.data';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_LOCATIONS_URL = 'https://eldenring.fanapis.com/api/locations?limit=100';

@Injectable({
  providedIn: 'root'
})
export class ApiLocationsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiLocations(): Observable<ResApiLocations>{
    return this.http.get<ResApiLocations>(`${API_LOCATIONS_URL}`)
  }

}
