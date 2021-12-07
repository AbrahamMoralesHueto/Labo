import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, public userService: UsersService) { }

  ngOnInit(): void {
    if(this.userService.getToken() != ""){
      this.recepcionista();
    }
  }

  public login(){
    this.router.navigate(['login']);
  }

  public recepcionista(){
    this.router.navigate(['recep']);
  }

}
