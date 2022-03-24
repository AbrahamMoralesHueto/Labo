import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { cliente } from 'src/app/models/cliente.model';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cards: any = [];

  constructor(private router: Router, public userService: UsersService, public cliente: cliente, private cookie: CookieService) { }

  ngOnInit(): void {
    this.veriUser();
    this.getClient();
    this.getCardsP(this.cliente.id);
  }

  public getCardsP(id) {
    this.userService.getCardsP(id).subscribe(data => {
      this.cards = data;
      // console.log(this.cards);
    }, error => {
      console.log(error);
    });
  }

  public close() {
    this.cookie.delete("token");
    this.router.navigate(['login']);
  }

  private veriUser() {
    if (this.cookie.get("token") == "") {
      this.router.navigate(['login']);
    }
  }

  private getClient() {
    try {
      //Obtención de payload del token JWT
      let jsonPay: any[] = Array.of(jwt_decode(this.cookie.get("token")));

      //Asignación de payload a las variables
      this.cliente.id = jsonPay[0].id;
      this.cliente.name = jsonPay[0].name;
      this.cliente.lastnames = jsonPay[0].lastnames;

      // console.log(this.recep);

    } catch (Error) {
      console.log("Hay error " + Error);
    }
  }

  public downloadPdf() {
    
  }

}
