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
        image: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/DVRFAWBGZJFY7LRQ3E2FPOC6PI.jpg',
        name: 'bossMagic'
    },
    {
        image: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/1612/DZ8wS2H3kWLWPkdFz8r6RpAy.jpg',
        name: 'cueva'
    },
    {
        image: 'https://pbs.twimg.com/media/FT_Q23SWYAEm86v?format=jpg&name=4096x4096',
        name: 'maliketh'
    },
    {
        image: 'https://mp1st.com/wp-content/uploads/2022/12/elden-ring-update-3.png',
        name: 'bossSan'
    },
    {
        image: 'https://www.ggrecon.com/media/dkxkralg/elden-ring-blaidd-cover.jpg',
        name: 'blaidd'
    },
    {
        image: 'https://images2.alphacoders.com/122/1221814.jpg',
        name: 'melina'
    },
    {
        image: 'https://gameoverpnx.files.wordpress.com/2021/06/elden_ring-5456385.jpg',
        name: 'giant'
    },
    {
        image: 'https://www.ps4wallpapers.com/wp-content/uploads/2022/05/2022-05-28_6291d66b45db0_RDT_20220526_1945002677886310958238687.jpg',
        name: 'aureo'
    },
    {
        image: 'https://uiuiui.in/uploads/posts/2022-11/2767426493-4cd2d6e210ae836e51a8041ccc5b5c5e.webp',
        name: 'ranni'
    }
]