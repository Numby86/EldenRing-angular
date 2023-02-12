import { Bosses, BossesResponse } from './ApiBosses.model';
import { Observable, tap, map } from 'rxjs';
import { LoaderService } from './../loader/loader.service';
import { ApiBossesService } from './api/api-bosses.service';
import { Injectable } from '@angular/core';
import { Boss } from './Api-bossesId';

@Injectable({
  providedIn: 'root'
})
export class BossesService {

  constructor(
    private apiBossesService: ApiBossesService,
    private loaderService: LoaderService
  ){ }

  public getBosses(): Observable<Bosses[]>{
    this.loaderService.showLoading();
    return this.apiBossesService.getApiBosses().pipe(
      map((bosses: BossesResponse) => {
        return bosses.data;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }

  public getBossDetail(id: string): Observable<Boss>{
    this.loaderService.showLoading();
    return this.apiBossesService.getApiBossDetail(id).pipe(
      map((boss: Boss) => {
        return boss;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }

  
}
