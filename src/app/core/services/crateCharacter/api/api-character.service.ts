import { CreateCharacter } from './../createCha.model';
import { Observable } from 'rxjs';
import { ResCharacter } from './../res-character.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_CHARACTER_URL = 'https://movies-five-eosin.vercel.app/personaje';

@Injectable({
  providedIn: 'root'
})
export class ApiCharacterService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiCharacter(): Observable<ResCharacter[]> {
    return this.http.get<ResCharacter[]>(`${API_CHARACTER_URL}`);
  }

  public getApiCharacterDetail(id: string): Observable<ResCharacter>{
    return this.http.get<ResCharacter>(`${API_CHARACTER_URL}/${id}`);
  }

  public deleteApiCharacter(id: string): Observable<ResCharacter> {
    return this.http.delete<ResCharacter>(`${API_CHARACTER_URL}/${id}`)
  }

  public createApiCharacter(body: ResCharacter): Observable<ResCharacter> {
    return this.http.post<ResCharacter>(`${API_CHARACTER_URL}`, body);
  }

  public editApiCharacter(id: string, body: ResCharacter): Observable<ResCharacter> {
    return this.http.put<ResCharacter>(`${API_CHARACTER_URL}/${id}`, body);
  }
}