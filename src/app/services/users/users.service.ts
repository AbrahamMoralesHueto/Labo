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
 
  getCards(){
    return this.http.get("https://app-labo.herokuapp.com/analysisOrder");
  }

  getCardsL(id){
    return this.http.get("https://app-labo.herokuapp.com/analysisOrderL/"+id);
  }
  
  getCardsP(id){
    return this.http.get("https://app-labo.herokuapp.com/analysisOrderP/"+id);
  }

  addClient(cliente: any){
    return this.http.post("https://app-labo.herokuapp.com/pacients", cliente);
  }

  addLabo(labo: any){
    return this.http.post("https://app-labo.herokuapp.com/labs", labo);
  }

  addAnalisis(analisis: any){
    return this.http.post("https://app-labo.herokuapp.com/analysis", analisis);
  }

  addAnalysisOrder(analysisOrder: any){
    return this.http.post("https://app-labo.herokuapp.com/analysisOrder", analysisOrder);
  }

  deleteAnalisisOrder(id: any){
    return this.http.delete("https://app-labo.herokuapp.com/analysisOrder/"+id);
  }

  getComboBoxClient(){
    return this.http.get("https://app-labo.herokuapp.com/pacients");
  }

  getComboBoxLabo(){
    return this.http.get("https://app-labo.herokuapp.com/labs");
  }
  
  getComboBoxAnalisis(){
    return this.http.get("https://app-labo.herokuapp.com/analysis");
  }

  updateInProcessOrder(analysisOrder: any){
    return this.http.put("https://app-labo.herokuapp.com/analysisOrder", analysisOrder);
  }

  updateFinalityOrder(analysisOrder: any){
    return this.http.put("https://app-labo.herokuapp.com/analysisOrder", analysisOrder);
  }

  setToken(token: string){
    this.cookie.set("token", token);
  }
  
  getToken(){
    return this.cookie.get("token");
  } 
}