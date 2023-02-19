import { Talismans } from './../../../core/services/talismans/talismans.model';
import { Armors } from './../../../core/services/armors/armors.model';
import { TalismansService } from './../../../core/services/talismans/talismans.service';
import { ArmorsService } from './../../../core/services/armors/armors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cards',
  templateUrl: './view-cards.component.html',
  styleUrls: ['./view-cards.component.scss']
})
export class ViewCardsComponent implements OnInit {

  public pagina: number = 0;
  public searchName: string = '';
  public weight: string = '';

  public armors: Armors[] = [];
  public talismans: Talismans[] = [];

  constructor(
    private armorsService: ArmorsService,
    private talismansService: TalismansService
  ){}

    public ngOnInit(): void {
      this.armorsService.getArmors().subscribe((armorsApi) => {
        this.armors = armorsApi;
      })

      this.talismansService.getTalismans().subscribe((talismansApi) => {
        this.talismans = talismansApi;
      })

    }

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
