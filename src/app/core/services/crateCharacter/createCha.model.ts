export interface CreateCharacter {
    id: string;
    name: string;
    edad: number;
    image?: string;
    complexion?: Complexion;
    claseName?: ClaseName
    clase?: Clase;
    recuerdo?: Recuerdo
}

export interface Clase {
    id: number;
    name: string;
    image: string;
    description: string;
    stats: {
        level: number, 
        vigor: number, 
        mind: number, 
        endurance: number, 
        strength: number, 
        dexterity: number, 
        intelligence: number, 
        faith: number, 
        arcane: number
    }	
}

export type ClaseName = 'Hero'  
| 'Warrior' 
| 'Astrologer' 
| 'Bandit' 
| 'Prisoner' 
| 'Vagabond' 
| 'Confessor' 
| 'Wretch' 
| 'Prophet' 
| 'Samurai';


export type Complexion = 'Normal' 
| 'Delgado'
| 'Fuerte';

export type Recuerdo = 'Ninguno' 
| 'Medallon de ambar rojo'
| 'Runa de las tierras intermedias'
| 'Semilla dorada'
| 'Cenizas de diablo colmilludo'
| 'Tarro agrietado'
| 'LLave de la espada petrea'
| 'Rama cautivadora'
| 'Gambon conocido'
| 'Pesar de Shabriri';
