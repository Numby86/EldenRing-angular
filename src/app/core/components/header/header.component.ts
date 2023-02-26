import { ApiUserService } from '../../services/user/api-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logged: boolean = false;
  
  public logOut: boolean = false;

  public checked: boolean = false;

  constructor(
    private router: Router,
    private apiUserService: ApiUserService
  ){ }

  public ngOnInit(): void {
    this.apiUserService.isLogged();
    this.apiUserService.userLogged$.subscribe((isLogged) => this.logged = isLogged);
  }

  public addButton(){
    this.logOut = true;
  }

  public cerrarSesion(){
    this.apiUserService.logoutUser();
  }

  public goHome(){
    this.router.navigate(['home'])
  }

  public noChecked(){
    this.checked = false;
  }

}
