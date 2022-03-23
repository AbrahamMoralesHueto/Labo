import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';
import { labo } from 'src/app/models/labo.model';
import { CookieService } from "ngx-cookie-service";
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-labo',
  templateUrl: './labo.component.html',
  styleUrls: ['./labo.component.css']
})
export class LaboComponent implements OnInit {

  public cards: any = [];

  constructor(private router: Router, public userService: UsersService, public labo: labo, private cookie: CookieService) { }

  ngOnInit(): void {
    this.veriUser();
    this.getLabo();
    this.getCardsL(this.labo.id);
  }
  
  getCardsL(id){
    this.userService.getCardsL(id).subscribe(data => {
      this.cards = data;
      console.log(this.cards);
    }, error => {
      console.log(error);
    });
  }

  public close(){
    this.cookie.delete("token");
    this.router.navigate(['login']);
  }

  private veriUser(){
    if(this.cookie.get("token") == ""){
      this.router.navigate(['login']);
    }
  }

  private getLabo(){
    try{
      //Obtención de payload del token JWT
      let jsonPay: any[]  = Array.of(jwt_decode(this.cookie.get("token")));

      //Asignación de payload a las variables
      this.labo.id = jsonPay[0].id;
      this.labo.name = jsonPay[0].name;
      this.labo.lastnames = jsonPay[0].lastnames;

      // console.log(this.recep);

    }catch(Error){
      console.log("Hay error " + Error);
    }
  }

}
