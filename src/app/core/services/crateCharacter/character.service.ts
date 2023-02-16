import { ResClases } from './../clases/res-clase.model';
import { ResCharacter, CompleteCharacter } from './res-character.model';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { ClaseService } from './../clases/clase.service';
import { LoaderService } from './../loader/loader.service';
import { ApiCharacterService } from './api/api-character.service';
import { Injectable } from '@angular/core';
import { CreateCharacter } from './createCha.model';
import { transformCharacter } from './characters.helpers';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private apiCharacterService: ApiCharacterService,
    private loaderService: LoaderService,
    private claseService: ClaseService
  ) { }

  public getCharacters(): Observable<ResCharacter[]> {
    this.loaderService.showLoading();

    return this.apiCharacterService.getApiCharacter().pipe(
      map((characters: ResCharacter[]) => {
        return characters;
      }),
      tap(() => this.loaderService.hideLoading())
    )
  }

  public getCharacterDetail(id: string): Observable<CompleteCharacter> {
    return forkJoin([
      this.apiCharacterService.getApiCharacterDetail(id),
      this.claseService.getClasesDetail()
    ]).pipe(
      map(([apiCharacter, apiClase]) => {
        
        const selectedClase = apiClase.find((clase) => clase.name === apiCharacter.claseName[0])
        console.log(apiCharacter, apiClase, selectedClase);
        
        return transformCharacter(apiCharacter, selectedClase);
      })
    )
  }






























  // public getCharacterDetail(id: string): Observable<ResCharacter> {
  //   return this.apiCharacterService.getApiCharacterDetail(id).pipe(
  //     map((character: ResCharacter) => {
  //       return character;
  //     })
  //   )
  // }



  public deleteCharacter(id: string): Observable<ResCharacter> {
    return this.apiCharacterService.deleteApiCharacter(id).pipe(
      map((character) => {
        return character;
      })
    )
  }

  public createCharacter(body: ResCharacter): Observable<ResCharacter>{
    return this.apiCharacterService.createApiCharacter(body).pipe(
      map((character) => {
        return character;
      })
    )
  }

  public editCharacter(id: string , body: ResCharacter): Observable<ResCharacter>{
    return this.apiCharacterService.editApiCharacter(id, body).pipe(
      map((character) => {
        return character;
      })
    )
  }
}
