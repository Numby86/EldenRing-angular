import { map, Observable } from 'rxjs';
import { ApiClaseService } from './api/api-clase.service';
import { Injectable } from '@angular/core';
import { ResClases, ClasesDetail } from './res-clase.model';

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

  public getClasesDetail(): Observable<ClasesDetail[]>{
    return this.apiClaseService.getApiClass().pipe(
      map((apiClases: ResClases[]) => {
        return apiClases.map((apiClase) => ({
          _id: apiClase._id, 
          name: apiClase.name, 
          image: apiClase.image, 
          description: apiClase.description 
        }))
      })
    )
  }
}
