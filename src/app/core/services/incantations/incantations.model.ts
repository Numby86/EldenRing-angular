export interface ResIncantations {
    success: boolean;
    count:   number;
    total:   number;
    data:    Incantations[];
}

export interface Incantations {
    id:          string;
    name:        string;
    image:       string;
    description: string;
    type:        Type;
    cost:        number;
    slots:       number;
    effects:     string;
    requires:    Require[];
}

export interface Require {
    name:   Name;
    amount: number;
}

export enum Name {
    Arcane = "Arcane",
    Faith = "Faith",
    Intelligence = "Intelligence",
}

export enum Type {
    Incantation = "Incantation",
    Incantations = "Incantations",
}
