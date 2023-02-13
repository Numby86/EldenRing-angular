import { Observable, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { CharacterService } from './../../core/services/crateCharacter/character.service';
import { ResCharacter } from './../../core/services/crateCharacter/res-character.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  
  public characters: ResCharacter[] = [];
  public listCharacters$?: Observable<ResCharacter[]>

  constructor(
    private characterService: CharacterService,
    private router: Router
  ){ }

  public ngOnInit(): void {
    this.characterService.getCharacters().subscribe((charactersFromApi) => {
      this.characters = charactersFromApi;
    })
  }

  public goToDetail(id: string){
    if(this.characters){
      this.router.navigate(['character-detail', id])
    }
  }

  public deleteCharacter(id?: string){
    if(!id) { return; }
    this.listCharacters$ = this.characterService.deleteCharacter(id).pipe(
      switchMap(() => {
        return this.characterService.getCharacters();
      })
    )
    console.log(this.listCharacters$);
    
  }
}
