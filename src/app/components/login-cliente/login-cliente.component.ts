import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  email: string;
  pwd: string;
  typeUser: string;

  constructor(private router: Router, public userService: UsersService) { }

  ngOnInit(): void {
  }

  login() {

    const user = {
      email: this.email,
      pwd: this.pwd,
      rol: this.typeUser
    };

    if (this.typeUser != null) {
      this.userService.login(user).subscribe(data => {
        if (data.status === 'true') {
          this.userService.setToken(data.token);
          if(this.typeUser = "recep") this.router.navigate(['recep']);
        }else{
          alert('Usuario no registrado o credenciales incorrectas');
        }
      }, error => {
        console.log("Error " + error);
      });
    } else {
      alert('Elige el tipo de usuario');
    }
  }

  client() {
    this.typeUser = 'pacient';
    // console.log(this.typeUser);
  }

  recep() {
    this.typeUser = 'recep';
    // console.log(this.typeUser);
  }

  labo() {
    this.typeUser = 'lab';
    // console.log(this.typeUser);
  }
}
