import { ItemsResponse } from './../api-itemsResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_ITEM_URL = 'https://eldenring.fanapis.com/api/items';
const limit = '?limit=100';
const page = '&page=1';


@Injectable({
  providedIn: 'root'
})
export class ApiItemsService {

  constructor(
    private http: HttpClient
  ) { }

  public getApiItems(): Observable<ItemsResponse>{
    return this.http.get<ItemsResponse>(`${API_ITEM_URL}${limit}`);
  }

}
