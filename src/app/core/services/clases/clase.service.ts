import { map, Observable } from 'rxjs';
import { ApiClaseService } from './api/api-clase.service';
import { Injectable } from '@angular/core';
import { ResClases } from './res-clase.model';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(
    private apiClaseService: ApiClaseService
  ) { }

  public getClases(): Observable<ResClases[]> {
    return this.apiClaseService.getApiClass().pipe(
      map((resClases: ResClases[]) => {
        return resClases;
      })
    )
  }
}
