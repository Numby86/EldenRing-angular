import {  ClasesDetail } from './../clases/res-clase.model';
import { ResCharacter, CompleteCharacter } from './res-character.model';

export function transformCharacter(apicharacter: ResCharacter, selectedClase?: ClasesDetail): CompleteCharacter{
    return {
        ...apicharacter,
        clases: selectedClase
            ? selectedClase 
            : { name: apicharacter.claseName }
    }
}