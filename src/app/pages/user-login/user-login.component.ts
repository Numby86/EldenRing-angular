import { LoginJWT, Login } from './../../core/services/user/login.model';
import { ApiUserService } from './../../core/services/user/api/api-user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {


  public logForm?: FormGroup;

  public userError?: string;

  constructor(
    private fb: FormBuilder,
    private apiUserService: ApiUserService,
    private router: Router
  ){

    const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    this.logForm = this.fb.group({

      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
    })
  }

  public sendFormulario (){

    const user = this.logForm?.value;

    if(!this.logForm?.valid){return;}
    this.apiUserService.loginApiUser(user).subscribe();
    this.router.navigate(['home']);
  }

  public goToRegister (){
    this.router.navigate(['register'])
  }
}
