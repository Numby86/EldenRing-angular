import { ResTalismans } from './../talismans.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL_TALISMANS = 'https://eldenring.fanapis.com/api/talismans?limit=87';

@Injectable({
  providedIn: 'root'
})
export class ApiTalismansService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiTalismans(): Observable<ResTalismans>{
    return this.http.get<ResTalismans>(`${API_URL_TALISMANS}`);
  }

}
