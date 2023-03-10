import { Router } from '@angular/router';
import { ApiUserService } from '../../core/services/user/api-user.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { Register } from 'src/app/core/services/user/register.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  public regForm?: FormGroup;

  public userError?: string;

  constructor(
    private fb: FormBuilder,
    private apiUserService: ApiUserService,
    private router: Router
  ) {
    const onlyNumber = new RegExp('^([0-9])+$');
    const email = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    this.regForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl(''),
      phone: new FormControl('', [
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.pattern(onlyNumber),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(email),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(12),
      ]),
    });
  }

  public sendFormulario() {

      if(!this.regForm?.valid){return;}
  const userRegister: Register = this.regForm?.value;
  debugger
  this.apiUserService.registerApiUser(userRegister).subscribe({
    next: (res) => {
      res;
      this.router.navigate(['home']);
    },
    error: (err) => {
      this.userError = err.error;
      this.regForm?.reset();
    }
  })


    // if (!this.regForm?.valid) {
    //   return;
    // }

    // const userRegister = this.apiUserService.registerApiUser(
    //   this.regForm?.value
    // );

    // userRegister.subscribe(() => {
    //   this.regForm?.reset();
    //   this.router.navigate(['home']);
    // });
  }


}
