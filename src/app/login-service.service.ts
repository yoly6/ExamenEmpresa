import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private logged: boolean = false;
  constructor(private router: Router) {
  }
  isLogged() {
    if (this.logged) {
      return true
    }
    return false
  }
  login(data: any) {
    let user = data.usuario
    let pass = data.pass
    if (user == "admin@admin.com" && pass == "12345") {
      this.router.navigate(["menu"])
      this.logged = true
    }
    else {
      Swal.fire({
        icon: 'error',
        text: 'Credenciales incorrectas!'
      })
      
      this.logged = false
    }
  }
}
