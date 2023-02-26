import { LoaderService } from './../loader/loader.service';
import { map, Observable, tap } from 'rxjs';
import { ApiClaseService } from './api/api-clase.service';
import { Injectable } from '@angular/core';
import { ResClases, ClasesDetail } from './res-clase.model';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  constructor(
    private apiClaseService: ApiClaseService,
    private loaderService: LoaderService
  ) { }

  public getClases(): Observable<ResClases[]> {
    this.loaderService.showLoading();
    return this.apiClaseService.getApiClass().pipe(
      map((resClases: ResClases[]) => {
        return resClases;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }

  public getClasesDetail(): Observable<ClasesDetail[]>{
    this.loaderService.showLoading();
    return this.apiClaseService.getApiClass().pipe(
      map((apiClases: ResClases[]) => {
        return apiClases.map((apiClase) => ({
          _id: apiClase._id, 
          name: apiClase.name, 
          image: apiClase.image, 
          description: apiClase.description 
        }))
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}
