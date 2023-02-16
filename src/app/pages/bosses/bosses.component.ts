import { BossesService } from './../../core/services/bosses/bosses.service';
import { Router } from '@angular/router';
import { Bosses } from './../../core/services/bosses/Bosses.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.scss']
})
export class BossesComponent implements OnInit {

    public bosses: Bosses[] = [];

    constructor(
      private router: Router,
      private bossesService: BossesService,
    ){}

    public pagina: number = 0;
    public searchName: string = '';

    public ngOnInit(): void {
      this.bossesService.getBosses().subscribe((bossesFromApi) => {
        this.bosses = bossesFromApi;
      })
    }

    public goToDetail(id: string){
      if(this.bosses) {
        this.router.navigate(['bosses-detail', id])
      }
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
