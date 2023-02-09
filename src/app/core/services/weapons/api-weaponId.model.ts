export interface Weapon {
    success: boolean;
    data: Data;
}

export interface Data {
    id:                 string;
    name:               string;
    image:              string;
    description:        string;
    attack:             Attack[];
    defence:            Attack[];
    scalesWith:         ScalesWith[];
    requiredAttributes: Attack[];
    category:           string;
    weight:             number;
}

export interface Attack {
    name:   string;
    amount: number;
}

export interface ScalesWith {
    name:    string;
    scaling: string;
}
