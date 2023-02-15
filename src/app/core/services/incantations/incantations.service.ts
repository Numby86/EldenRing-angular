import { Incantations, ResIncantations } from './incantations.model';
import { map, Observable, tap } from 'rxjs';
import { LoaderService } from './../loader/loader.service';
import { ApiIncantationsService } from './api/api-incantations.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncantationsService {

  constructor(
    private apiIncantationsService: ApiIncantationsService,
    private loaderService: LoaderService
  ) { }

  public getIncantations(): Observable<Incantations[]>{
    this.loaderService.showLoading();
    return this.apiIncantationsService.getApiIncantations().pipe(
      map((incantations: ResIncantations) => {
        return incantations.data;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}
