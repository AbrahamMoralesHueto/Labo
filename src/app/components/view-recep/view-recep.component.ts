import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users/users.service';
import { cliente } from 'src/app/models/cliente.model';
import { labo } from 'src/app/models/labo.model';
import { analisis } from 'src/app/models/analisis.model';

@Component({
  selector: 'app-view-recep',
  templateUrl: './view-recep.component.html',
  styleUrls: ['./view-recep.component.css']
})
export class ViewRecepComponent implements OnInit {

  public idPac: string = "";
  public idLab: string = "";
  public idAna: string;

  public cards: any = [];
  public comboBoxC: any = [];
  public comboBoxL: any = [];
  public comboBoxA: any = [];

  constructor(private modal: NgbModal, public userService: UsersService, public cliente: cliente, public labo: labo, public analisis: analisis) { }

  ngOnInit(): void {
    this.getCards();
    this.getComboBoxClient();
    this.getComboBoxLabo();
    this.getComboBoxAnalisis();
  }

  openSM(contenido){
    this.modal.open(contenido,{size:'md'});
  }
  
  getCards(){
    this.userService.getCards().subscribe(data => {
      this.cards = data;
    }, error => {
      console.log(error);
    });
  }

  getComboBoxClient(){
    this.userService.getComboBoxClient().subscribe(data => {
      this.comboBoxC = data;
      // console.log(this.comboBoxC);
    }, error => {
      console.log(error);
    });
  }

  getComboBoxLabo(){
    this.userService.getComboBoxLabo().subscribe(data => {
      this.comboBoxL = data;
      // console.log(this.comboBoxL);
    }, error => {
      console.log(error);
    });
  }
  
  getComboBoxAnalisis(){
    this.userService.getComboBoxAnalisis().subscribe(data => {
      this.comboBoxA = data;
      // console.log(this.comboBoxL);
    }, error => {
      console.log(error);
    });
  }

  public addCliente(){

    let cliente = {
      name: this.cliente.name,
      lastnames: this.cliente.lastnames,
      email: this.cliente.email,
      pwd: this.cliente.pwd
    };

    this.userService.addClient(cliente).subscribe(() => {
      alert("Usuario registrado");
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  public addLabo(){

    let labo = {
      name: this.labo.name,
      lastnames: this.labo.lastnames,
      email: this.labo.email,
      pwd: this.labo.pwd
    };

    this.userService.addLabo(labo).subscribe(() => {
      alert("Usuario registrado");
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  public addAnalisis(){

    let analisis = {
      name: this.analisis.name,
      price: this.analisis.price,
    };

    this.userService.addAnalisis(analisis).subscribe(() => {
      alert("Usuario registrado");
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

  public asignarAnalisis(){

    let asigAnalisis = {
      idPac: this.idPac,
      idLab: this.idLab
    };

    console.log(asigAnalisis);

  }

}