export interface ResArmors {
    success: boolean;
    count:   number;
    total:   number;
    data:    Armors[];
}

export interface Armors {
    id?:          string;
    name:        string;
    image:       string;
    description: string;
    category?:    Category;
    dmgNegation?: DmgNegation[];
    resistance?:  DmgNegation[];
    weight:      number;
}

export enum Category {
    ChestArmor = "Chest Armor",
    Gauntlets = "Gauntlets",
    Helm = "Helm",
    LegArmor = "Leg Armor",
}

export interface DmgNegation {
    name:   Name;
    amount: number;
}

export enum Name {
    Empty = "",
    Fire = "Fire",
    Focus = "Focus",
    Holy = "Holy",
    Immunity = "Immunity",
    Light = "Light",
    Ligt = "Ligt",
    Mag = "Mag",
    Magic = "Magic",
    Phy = "Phy",
    Pierce = "Pierce",
    Poise = "Poise",
    Pose = "Pose",
    Robustness = "Robustness",
    Slash = "Slash",
    Strike = "Strike",
    The61 = "6.1",
    Vitality = "Vitality",
}
