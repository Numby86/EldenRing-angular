//import { MyLocations } from './locations.model';
export interface ResApiLocations {
    success: boolean;
    count:   number;
    total:   number;
    data:    Locations[];
}

export interface Locations {
    id:          string;
    name:        string;
    image:       string;
    region:      Region;
    description: string;
}

export enum Region {
    Limgrave = "Limgrave",
}


export const myLocations = [
    {
        image: 'https://eip.gg/wp-content/uploads/2022/06/Crumbling-Farum-Azula-Featured-Image-Elden-Ring-1536x864.jpg',
        name: 'hola'
    },
    {
        image: 'https://images5.alphacoders.com/121/1217525.png',
        name: 'hola1'
    },
    {
        image: 'https://akihabarablues.com/wp-content/uploads/2021/11/Elden-Ring.jpg',
        name: 'hola2'
    },
]