import { IncantationsService } from './../../core/services/incantations/incantations.service';
import { Incantations } from './../../core/services/incantations/incantations.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incantations',
  templateUrl: './incantations.component.html',
  styleUrls: ['./incantations.component.scss']
})
export class IncantationsComponent implements OnInit {

  public incantations: Incantations[] = [];
  public pagina: number = 0;
  public searchName: string = '';

  constructor(
    private incantationsService: IncantationsService
  ){ }

  public ngOnInit(): void {
    this.incantationsService.getIncantations().subscribe((incantatiosApi) => {
      this.incantations = incantatiosApi;
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
  }