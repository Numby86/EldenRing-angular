import { Weapon } from './../../core/services/weapons/api-weaponId.model';
import { WeaponsService } from './../../core/services/weapons/weapons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-weapons-detail',
  templateUrl: './weapons-detail.component.html',
  styleUrls: ['./weapons-detail.component.scss']
})
export class WeaponsDetailComponent {

  public weapon?: Weapon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private weaponsService: WeaponsService,
    private router: Router
  ){

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });

    this.activatedRoute.params.subscribe((params) => {
      const weaponId = params['id'];
      this.weaponsService.getWeaponDetail(weaponId).subscribe((weapon) => {
        this.weapon = weapon;
      })
    })
  }

  public backToList(){
    this.router.navigate(['weapons'])
  }

}
