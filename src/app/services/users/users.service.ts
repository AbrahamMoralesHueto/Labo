import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private cookie: CookieService){}

  login(user: any): Observable<any>{
    return this.http.post("https://app-labo.herokuapp.com/login", user);
  }
 
  setToken(token: string){
    this.cookie.set("token", token);
  }
  
  getToken(){
    return this.cookie.get("token");
  } 
}