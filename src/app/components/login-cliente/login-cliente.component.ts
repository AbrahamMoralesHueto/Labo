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
      pwd: this.pwd
    };

    if (this.typeUser === 'client') {
      this.userService.loginClient(user).subscribe(data => {
        if (data.status === 'true') {
          this.userService.setToken(data.token);
        }
      }, error => {
        console.log("Error " + error);
      });
    } else if (this.typeUser === 'recep') {
      this.userService.loginRecep(user).subscribe(data => {
        this.userService.setToken(data.token);
      });
    } else if (this.typeUser === 'labo') {
      this.userService.loginLabo(user).subscribe(data => {
        this.userService.setToken(data.token);
      });
    } else {
      alert('Elige el tipo de usuario');
    }
  }

  client() {
    this.typeUser = 'client';
    // console.log(this.typeUser);
  }

  recep() {
    this.typeUser = 'recep';
    // console.log(this.typeUser);
  }

  labo() {
    this.typeUser = 'labo';
    // console.log(this.typeUser);
  }
}
