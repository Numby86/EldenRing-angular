import { CharacterService } from './../../core/services/crateCharacter/character.service';
import { ResCharacter } from './../../core/services/crateCharacter/res-character.model';
import { map, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaseService } from './../../core/services/clases/clase.service';
import { ResClases } from './../../core/services/clases/res-clase.model';
import { complexion, recuerdo, claseName } from './../../core/services/crateCharacter/arraysClases';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})

export class CreateCharacterComponent implements OnInit {

 public createForm?: FormGroup;

  public clases: ResClases[] = [];
  public claseName: string[] = claseName;
  public complexiones: string[] = complexion;
  public recuerdos: string[] = recuerdo;
  public editForm: boolean = false;
  public characterID?: string;

  public eleccion?: ResClases;

  constructor(
    private fb: FormBuilder,
    private claseService: ClaseService,
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if(!id){
          return of(undefined)
        } else {
          this.characterID = id;
          return this.characterService.getCharacterDetail(id)
        }
      })
    )
    .subscribe((character?: ResCharacter) => {
      this.editForm = !!character;
      this.createCharacterForm(character);
    })
  } 

  ngOnInit(): void {

      this.claseService.getClases().subscribe((clasesFromApi) => {
        this.clases = clasesFromApi;
      })

      this.createForm?.get('claseName')?.valueChanges.subscribe((value) => {

      const selectedClass = this.clases.find(clases => clases.name === value);

      if (!value){
        return;
      }

      this.eleccion = selectedClass;
    })
  }


  

  public createCharacterForm (character?: ResCharacter) {
    const onlyNumber = new RegExp('^([0-9])+$');

    this.createForm = this.fb.group({
      name: new FormControl(character?.name || '', [Validators.required]),
      edad: new FormControl(character?.edad || '', [Validators.required, Validators.maxLength(3), Validators.pattern(onlyNumber)]),
      image: new FormControl(character?.image || ''),
      complexion: new FormControl(character?.complexion || '', [Validators.required]),
      recuerdo: new FormControl(character?.recuerdo || '', [Validators.required]),
      claseName: new FormControl(character?.claseName || '', [Validators.required])
    })
  }

  public sendForm(){
    if(!this.createForm?.valid){return;}
    const characterRequest = this.editForm && this.characterID 
      ? this.characterService.editCharacter(this.characterID, this.createForm?.value) 
      : this.characterService.createCharacter(this.createForm?.value);
    characterRequest.subscribe(() => {
      this.createForm?.reset();
      this.router.navigate(['characters']);
    });
  }
}
