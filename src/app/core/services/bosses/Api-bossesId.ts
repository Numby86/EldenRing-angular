export interface Boss {
    success: boolean;
    data:    Data;
}

export interface Data {
    id:           string;
    name:         string;
    image:        string;
    region:       string;
    description:  string;
    location:     string;
    drops:        string[];
    healthPoints: string;
}
