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
        image: 'https://images.alphacoders.com/116/1169017.jpg',
        name: 'mesa redonda'
    },
    {
        image: 'https://eip.gg/wp-content/uploads/2022/06/Crumbling-Farum-Azula-Featured-Image-Elden-Ring-1536x864.jpg',
        name: 'farum azula'
    },
    {
        image: 'https://images5.alphacoders.com/121/1217525.png',
        name: 'nokron'
    },
    {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/1309/C7o0D5CoMjsXyQQLl5LQzqhT.jpg?w=1920&thumb=false',
        name: 'coliseo'
    },
    {
        image: 'https://i.redd.it/h3ofxcg47be91.jpg',
        name: 'caelid'
    },
    {
        image: 'https://i.redd.it/56l9sf1crm391.png',
        name: 'leyndell'
    },
    {
        image: 'https://media.vandal.net/m/3-2022/202231123453551_4.jpg',
        name: 'pico de los gigantes'
    },
    {
        image: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg',
        name: 'malenia'
    },
    {
        image: 'https://www.theloadout.com/wp-content/uploads/2022/02/elden-ring-regions-academy-of-raya-lucaria.jpg',
        name: 'academia raya lucaria'
    },
    {
        image: 'https://images3.alphacoders.com/115/1151247.jpg',
        name: 'velo tormentoso'
    },
    {
        image: 'https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2022/02/eldenring-2022-02-24-18-57-47-351.jpg?zoom=2&resize=750%2C400&ssl=1',
        name: 'farum'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR15/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'dragon'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR14/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'tumbas'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR10/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'arbol'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR08/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'batalla atardecer'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR07/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'altus'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR05/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'gigantes'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR02/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'cuevas'
    },
    {
        image: 'https://media.gamestop.com/i/gamestop/11180297_SCR01/Elden-Ring---Xbox-Series-X?$screen2x$',
        name: 'marca dedos llama'
    },
    // {
    //     image: '',
    //     name: ''
    // },
    // {
    //     image: '',
    //     name: ''
    // },
    // {
    //     image: '',
    //     name: ''
    // },
]