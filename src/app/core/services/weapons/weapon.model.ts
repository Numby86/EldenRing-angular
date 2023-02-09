export interface ApiWeapon {
    id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    weight: number;
    attack: ApiWeaponStats;
    defence: ApiWeaponStats;
    requiredAttributes: ApiWeaponStats;
    scalesWith: ApiWeaponScales;
}

export interface ApiWeaponStats {
    name: string;
    amount: number;
}

export interface ApiWeaponScales {
    name: string;
    scaling: number;
}