import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {

  public data: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('data'));
    console.log(data);

    if (data !== null){
      if(data.status == "true"){
      this.router.navigate(['dashboard']);
      }
    }else{
      console.log('Sesión no iniciada...');
      this.router.navigate(['login-cliente']);
    }
  }

}
