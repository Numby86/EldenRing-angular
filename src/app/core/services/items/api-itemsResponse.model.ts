export interface ItemsResponse {
    success: boolean;
    count:   number;
    total:   number;
    data:    Item[];
}

export interface Item {
    id:          string;
    name:        string;
    image:       string;
    description: string;
    type:        string;
    effect:      string;
}