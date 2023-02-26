import { Router } from '@angular/router';
import { myLocations } from './../../core/services/locations/locations.data';
import { Locations } from '../../core/services/locations/locations.data';
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
    private router: Router
  ){}

  
  
  ngOnInit(): void {

    setInterval(() => {
      const randomNuber = () => Math.floor(Math.random() * 20);
      this.myNumber = randomNuber();
    }, 3000);
    
  }

  public goToRegister (){
    this.router.navigate(['register'])
  }
}
