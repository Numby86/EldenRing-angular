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
      private bossesService: BossesService
    ){}

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

  }
