import { ApiWeapon } from './weapon.model';

export interface ApiWeaponResponse {
    success: true,
    count: number,
    data: ApiWeapon[]
}
