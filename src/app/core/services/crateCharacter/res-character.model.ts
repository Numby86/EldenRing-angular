import { ClaseName } from './createCha.model';
import { ClasesDetail } from './../clases/res-clase.model';


export interface ResCharacter {
    _id:        string;
    name:       string;
    edad:       number;
    image:      string;
    complexion: string[];
    recuerdo:   string[];
    claseName:  ClaseName;
    __v:        number;
}

export interface CompleteCharacter {
    _id:        string;
    name:       string;
    edad:       number;
    image:      string;
    complexion: string[];
    recuerdo:   string[];
    claseName:  ClaseName;
    __v:        number;
    clases: ClasesDetail
}