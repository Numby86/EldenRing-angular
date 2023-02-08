import { WeaponsService } from './../../core/services/weapons/weapons.service';
import { ApiWeapon } from './../../core/services/weapons/weapon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent {

  // public weapons: ApiWeapon[] = [];
  

  // constructor(
  //   private weaponsService: WeaponsService
  // ){}

  // public ngOnInit(): void {
  //   this.weaponsService.getWeapons().subscribe((weaponsFromApi) => {
  //     this.weapons = weaponsFromApi;
  //     console.log(weaponsFromApi);
  //     console.log(this.weapons);
  //   });
  // }
}
