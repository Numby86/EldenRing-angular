import { Router } from '@angular/router';
import { WeaponsService } from './../../core/services/weapons/weapons.service';
import { ApiWeapon } from './../../core/services/weapons/weapon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  public weapons: ApiWeapon[] = [];

  constructor(
    private weaponsService: WeaponsService,
    private router: Router
  ){}

  public ngOnInit(): void {
    this.weaponsService.getWeapons().subscribe((weaponsFromApi) => {
      this.weapons = weaponsFromApi;
    });
  }

  public goToDetail(id: string){
    if(this.weapons) {
      this.router.navigate(['weapons-detail', id])
    }
  }
}
