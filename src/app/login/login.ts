import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login{

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })

  formSubmited = false;

  get email(){
    return this.loginForm.controls.email
  }

  get password(){
    return this.loginForm.controls.password
  }

  onSubmit(){
    this.formSubmited = true;

    console.log(this.email)
  }

}
