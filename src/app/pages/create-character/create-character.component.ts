import { clase, complexion, recuerdo } from './../../core/services/crateCharacter/arraysClases';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {

  public createForm: FormGroup;
  // public claseName: ClaseName[] = claseName;
  public clases: string[] = clase;
  public complexiones: string[] = complexion;
  public recuerdos: string[] = recuerdo;

  constructor(
    private fb: FormBuilder
  ) {

    const onlyNumber = new RegExp('^([0-9])+$');

    this.createForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern(onlyNumber)]),
      image: new FormControl(''),
      complexion: new FormControl('', [Validators.required]),
      recuerdo: new FormControl('', [Validators.required]),
      clase: new FormControl('', [Validators.required])
    })
  }

  public sendForm(){
    console.log(this.createForm.value);
  }
}
