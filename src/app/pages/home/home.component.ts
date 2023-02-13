import { myLocations } from './../../core/services/locations/locations.data';
import { Locations } from '../../core/services/locations/locations.data';
import { LocationsService } from './../../core/services/locations/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public locationes: Locations[] = [];

  public locations = myLocations;

  public myNumber:number = 0;

  constructor(
    private locationsService: LocationsService
  ){}

  
  
  ngOnInit(): void {

    // this.locationsService.getBosses().subscribe((locaFromApi) => {
    //   this.locations = locaFromApi;
    // })

    // setInterval(() => {
    //   const randomNuber = () => Math.floor(Math.random() * 10) + 1;
    //   this.myNumber = randomNuber();
    // }, 3000);
  }

}
