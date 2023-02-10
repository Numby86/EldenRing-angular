import { Observable, map, tap } from 'rxjs';
import { LoaderService } from './../loader/loader.service';
import { ApiItemsService } from './api/api-items.service';
import { Injectable } from '@angular/core';
import { Item, ItemsResponse } from './api-itemsResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private apiItemsService: ApiItemsService,
    private loaderService: LoaderService
  ) { }

  public getItems(): Observable<Item[]>{
    this.loaderService.showLoading();
    return this.apiItemsService.getApiItems().pipe(
      map((items: ItemsResponse) => {
        return items.data;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }
}
