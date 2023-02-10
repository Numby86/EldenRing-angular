import { BossesService } from './../../core/services/bosses/bosses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Boss } from './../../core/services/bosses/Api-bossesId';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bosses-detail',
  templateUrl: './bosses-detail.component.html',
  styleUrls: ['./bosses-detail.component.scss']
})
export class BossesDetailComponent {

  public boss?: Boss;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bossesService: BossesService,
    private router: Router
  ) {

    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });

    this.activatedRoute.params.subscribe((params) => {
      const bossID = params['id'];
      this.bossesService.getBossDetail(bossID).subscribe((boss) => {

        this.boss = boss;

      })
    })
  }

  public backToList(){
      this.router.navigate(['bosses'])
  }
}
