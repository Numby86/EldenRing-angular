export interface ResArmor {
    success: boolean;
    data:    Armor;
}

export interface Armor {
    id:          string;
    name:        string;
    image:       string;
    description: string;
    category:    string;
    dmgNegation: DmgNegation[];
    resistance:  DmgNegation[];
    weight:      number;
}

export interface DmgNegation {
    name:   string;
    amount: number;
}
