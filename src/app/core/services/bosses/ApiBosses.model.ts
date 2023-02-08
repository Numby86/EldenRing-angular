export interface BossesResponse {
    success: boolean;
    count: number;
    total: number;
    data: Bosses[] ;
}

export interface Bosses {
    id:           string;
    name:         string;
    image:        null | string;
    region:       string;
    description:  string;
    location:     string;
    drops:        string[];
    healthPoints: string;
}