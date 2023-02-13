export interface ResClases {
    stats:       Stats;
    _id:         string;
    id:          number;
    name:        string;
    image:       string;
    description: string;
    __v:         number;
}

export interface Stats {
    level:        number;
    vigor:        number;
    mind:         number;
    endurance:    number;
    strength:     number;
    dexterity:    number;
    intelligence: number;
    faith:        number;
    arcane:       number;
}