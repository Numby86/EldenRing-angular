import { CreateCharacter } from './createCha.model';

export const charactersCreated: CreateCharacter[] = [
    {
        id: '1',
        name: 'Javi',
        edad: 36,
        image: 'https://res.cloudinary.com/dwez3gmwt/image/upload/v1675772227/iconUser_vh3duo.jpg',
        complexion: 'Normal',
        claseName: 'Samurai',
        clase: {
            id: 10,
            name: 'Samurai',
            image:
              'https://eldenring.fanapis.com/images/classes/17f699f7f4cl0i32huaj53vkdxeh7b.png',
            description:
              'A capable fighter from the distant land of reeds. Handy with Katana and Longbows',
            stats: {
              level: 9,
              vigor: 12,
              mind: 11,
              endurance: 13,
              strength: 12,
              dexterity: 15,
              intelligence: 9,
              faith: 8,
              arcane: 8,
            },
          },
        recuerdo: 'Medallon de ambar rojo'
    }
]