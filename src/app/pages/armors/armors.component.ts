import { Armor } from './../../core/services/armors/armorsID.model';
import { Router } from '@angular/router';
import { ArmorsService } from './../../core/services/armors/armors.service';
import { Armors } from './../../core/services/armors/armors.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.scss']
})
export class ArmorsComponent implements OnInit {

  public armors: Armors[] = [];
  public searchName: string = '';
  public weight: string = '';

  constructor(
    private armorsService: ArmorsService,
    private router: Router
  ){}

    public ngOnInit(): void {
      this.armorsService.getArmors().subscribe((armorsApi) => {
        this.armors = armorsApi;
      })
    }

    public goToDetail(id: string){
      if(this.armors){
        this.router.navigate(['armors-detail', id])
      }
    }
    public pagina: number = 0;

    public prevPage(){
      if(this.pagina > 0){
        this.pagina -= 20;
      }
    }
  
    public nextPage(){
      if (this.pagina < 80) {
        this.pagina += 20;
      }
    }

    public ordenMenMay(value: string) {
      this.weight = value;
    }
  
    public ordenMayMen(value: string){
      this.weight = value;
    }

}
