import { CharacterService } from './../../core/services/crateCharacter/character.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResCharacter, CompleteCharacter } from './../../core/services/crateCharacter/res-character.model';
import { Component } from '@angular/core';
import { map, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent {

  public character?: CompleteCharacter;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService,
    private router: Router
  ) {

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });

    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.characterService.getCharacterDetail(characterId).subscribe((character) => {
        console.log(character);
        

        this.character = character;
        
      })
    })
  }

  public backToList(){
    this.router.navigate(['characters'])
  }

  public editCharacter(){
    this.router.navigate(['create-character'], { queryParams: {
      id: this.character?._id
    }});
  }

}
