import { Bosses } from './../../core/services/bosses/Bosses.model';
import { ApiBossesService } from './../../core/services/bosses/api/api-bosses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bosses',
  templateUrl: './bosses.component.html',
  styleUrls: ['./bosses.component.scss']
})
export class BossesComponent implements OnInit {

  public bosses: Bosses[] = [];
  public bossId: string[] = [];

  constructor(
    private bossesService: ApiBossesService
  ){}

  ngOnInit(): void {
    this.bossesService.cargarBosses()
    .subscribe(res => {

      this.bosses = res;
      
    })
  }

  cojoId(){
    
  }

}


