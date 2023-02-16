import { ApiArmorsService } from './../../core/services/armors/api/api-armors.service';
import { Armor } from './../../core/services/armors/armorsID.model';
import { ArmorsService } from './../../core/services/armors/armors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-armors-detail',
  templateUrl: './armors-detail.component.html',
  styleUrls: ['./armors-detail.component.scss']
})
export class ArmorsDetailComponent {

  public armor?: Armor;
  
  

  constructor(
      private activatedRoute: ActivatedRoute,
      private armorsService: ArmorsService,
      private apiArmorsService: ApiArmorsService,
      private router: Router
    ){
      this.activatedRoute.queryParams.subscribe((queryParams) => {
        console.log(queryParams);
        
      });

      this.activatedRoute.params.subscribe((params) => {
        const armorID = params['id'];
        this.apiArmorsService.getApiArmorsDetail(armorID).subscribe((armori) => {
          this.armor = armori
          console.log(this.armor);
        })
          
          
        })
 
    } 

    public backToList(){
      this.router.navigate(['armors'])
    }

}
