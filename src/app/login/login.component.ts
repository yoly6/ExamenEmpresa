import { LoginServiceService } from './../login-service.service';
import { Router, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })


  constructor(public routes:Router, private login:LoginServiceService) { }

  ngOnInit(): void {
  }



onLogin(){
 let user = this.loginForm.get("usuario")?.value
 let pass = this.loginForm.get("password")?.value
 this.login.login({usuario:user,pass:pass})
}
}