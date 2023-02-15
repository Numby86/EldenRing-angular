import { TalismansService } from './../../core/services/talismans/talismans.service';
import { Talismans } from './../../core/services/talismans/talismans.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talismans',
  templateUrl: './talismans.component.html',
  styleUrls: ['./talismans.component.scss']
})
export class TalismansComponent implements OnInit {

  public talismans: Talismans[] = [];

  constructor(
    private talismansService: TalismansService
  ){

  }

  public ngOnInit(): void {
    this.talismansService.getTalismans().subscribe((talismansApi) => {
      this.talismans = talismansApi;
    })
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
}
