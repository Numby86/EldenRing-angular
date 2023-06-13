import { ResClases } from './../res-clase.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_CLASS_URL = 'https://nodejs-proyectodb-ne39mugrc-numby86.vercel.app/class';

@Injectable({
  providedIn: 'root'
})
export class ApiClaseService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiClass(): Observable<ResClases[]> {
    return this.http.get<ResClases[]>(`${API_CLASS_URL}`);
  }
}
