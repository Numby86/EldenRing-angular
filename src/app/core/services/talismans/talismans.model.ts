export interface ResTalismans {
    success: boolean;
    count:   number;
    total:   number;
    data:    Talismans[];
}

export interface Talismans {
    id:          string;
    name:        string;
    image:       string;
    description: string;
    effect:      string;
}
