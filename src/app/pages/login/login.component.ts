import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from '../../service/login.service';
import {Admin} from '../../entities/admin';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers: [LoginService]
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  private respAdmin: Admin;

  constructor(
    fb:FormBuilder,
    private loginService: LoginService,
    private router:Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  private goToDashboardWithAdmin(admin: Admin):void {
    this.respAdmin = admin;
    if (this.respAdmin._id) {
      // add to local storage
      localStorage.setItem('currentAdmin',
        JSON.stringify({
          name: this.respAdmin.name,
          surname: this.respAdmin.surname,
          email: this.respAdmin.email
        }));
      let link = ['/pages/dashboard'];
      this.router.navigate(link);
    }
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.loginService.getLogin(
        this.form.get('email').value,
        this.form.get('password').value)
        .then(admin => this.goToDashboardWithAdmin(admin))
    }
  }

}
