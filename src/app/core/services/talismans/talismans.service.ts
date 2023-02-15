import { LoaderService } from './../loader/loader.service';
import { ResTalismans, Talismans } from './talismans.model';
import { Observable, map, tap } from 'rxjs';
import { ApiTalismansService } from './api/api-talismans.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TalismansService {

  constructor(
    private apiTalismansService: ApiTalismansService,
    private loaderService: LoaderService
  ) { }

  public getTalismans(): Observable<Talismans[]>{
    this.loaderService.showLoading();
    return this.apiTalismansService.getApiTalismans().pipe(
      map((talismans: ResTalismans) => {
        return talismans.data;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}
