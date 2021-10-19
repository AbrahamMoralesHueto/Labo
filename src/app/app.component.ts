import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Labo';
  public session: number = 1;

  constructor(private router: Router){};

  public cerrarSesion(): void{
    localStorage.removeItem('data');
    console.log(localStorage.getItem('data'));

    if(localStorage.getItem('data') === null){
      this.session = 0;
    }else{
      this.router.navigate(['login-cliente']);
    };
  }
}
