import { clase } from './../../core/services/crateCharacter/clase.data';
import { complexion, recuerdo, claseName } from './../../core/services/crateCharacter/arraysClases';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})

export class CreateCharacterComponent implements OnInit {

 public createForm: FormGroup;

  public clases = clase;
  public claseName: string[] = claseName;
  public complexiones: string[] = complexion;
  public recuerdos: string[] = recuerdo;

  public eleccion: any;
  // public defaultSel: any;

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

  ngOnInit(): void {

      this.createForm?.get('clase')?.valueChanges.subscribe((value) => {

      const selectedClass = this.clases.find(clases => clases.name === value);

      if (!value){
        // const valueFr = this.clases.find(clases => clases.name === 'Warrior');
        // this.eleccion = valueFr;
        // console.log(this.eleccion);
        return;
      }

      this.eleccion = selectedClass;
    })
  }

  public sendForm(){
    console.log(this.createForm.value);
  }
}
